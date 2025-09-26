import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { BotIcon, LeafIcon } from '../components/icons';
import Card from '../components/Card';

// A safer, more robust markdown component.
const SimpleMarkdown: React.FC<{ content: string }> = ({ content }) => {
    const applyInlineFormatting = (text: string) => {
        // A simple escape to prevent basic HTML injection.
        const escapedText = text
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        
        return escapedText
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>');
    };

    // Split content into blocks separated by double newlines.
    const blocks = content.split('\n\n');
    
    const htmlContent = blocks.map((block) => {
        const trimmedBlock = block.trim();
        
        // Handle unordered lists (starting with '- ')
        if (trimmedBlock.startsWith('- ')) {
            const listItems = block.split('\n')
                .map(item => item.trim())
                // Ensure we only process lines that are valid list items.
                .filter(item => item.startsWith('- ')) 
                .map(item => {
                    const itemContent = item.substring(2); // Remove the '- ' marker.
                    return `<li>${applyInlineFormatting(itemContent)}</li>`;
                })
                .join('');
            
            // Only render the list if it has items.
            if (listItems) {
                return `<ul>${listItems}</ul>`;
            }
        }
        
        // Handle paragraphs.
        if (trimmedBlock) {
            // Apply formatting and convert single newlines to <br>.
            const paragraphContent = applyInlineFormatting(block).replace(/\n/g, '<br />');
            return `<p>${paragraphContent}</p>`;
        }
        
        return null; // Ignore empty blocks.
    }).filter(Boolean).join('');

    return <div className="prose prose-sm dark:prose-invert max-w-full" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};


interface Message {
    role: 'user' | 'model';
    text: string;
}

const EcoAssistantPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: '¡Hola! Soy Eco, tu asistente ecológico personal. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre reciclaje, ahorro de energía, consejos de sostenibilidad, ¡o cualquier otra duda ecológica que tengas!' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const aiRef = useRef<GoogleGenAI | null>(null);

    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            if (!aiRef.current) {
               aiRef.current = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            }
        } catch (err) {
            console.error("Failed to initialize GoogleGenAI:", err);
            setError("No se pudo iniciar el asistente. Por favor, verifica la configuración.");
        }
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        const ai = aiRef.current;
        if (!input.trim() || isLoading || !ai) return;

        const userMessage: Message = { role: 'user', text: input };
        const newMessages = [...messages, userMessage];
        
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const contents = newMessages.map(msg => ({
                role: msg.role,
                parts: [{ text: msg.text }],
            }));
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: contents,
                config: {
                    systemInstruction: 'Eres Eco, un asistente amigable y experto en ecología y sostenibilidad. Proporciona consejos claros, concisos y prácticos. Anima al usuario a tomar acciones positivas para el medio ambiente. Usa markdown para formatear tus respuestas y hacerlas más legibles (negritas con **, listas con -).',
                }
            });

            const modelMessage: Message = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (err) {
            console.error(err);
            const errorMessage = 'Lo siento, algo salió mal al contactar a mi cerebro digital. Por favor, inténtalo de nuevo en un momento.';
            setError(errorMessage);
            setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <BotIcon className="h-20 w-20 text-primary mx-auto mb-4" />
                <h1 className="text-5xl font-extrabold font-display">Eco Asistente</h1>
                <p className="mt-4 text-xl text-text-muted-light dark:text-text-muted-dark">
                    Tu guía personal para un estilo de vida más sostenible.
                </p>
            </div>
            
            <Card className="flex flex-col h-[70vh]">
                <div className="flex-grow p-6 overflow-y-auto space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                           {msg.role === 'model' && <div className="bg-primary/20 text-primary p-2 rounded-full flex-shrink-0"><LeafIcon className="h-6 w-6"/></div>}
                            <div className={`max-w-lg p-4 rounded-xl shadow-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-gray-100 dark:bg-gray-700 rounded-bl-none'}`}>
                                <SimpleMarkdown content={msg.text} />
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-3 justify-start">
                             <div className="bg-primary/20 text-primary p-2 rounded-full flex-shrink-0"><LeafIcon className="h-6 w-6"/></div>
                             <div className="max-w-lg p-4 rounded-xl shadow-sm bg-gray-100 dark:bg-gray-700 rounded-bl-none">
                                 <div className="flex items-center gap-2">
                                     <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                     <span className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.2s]"></span>
                                     <span className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.4s]"></span>
                                 </div>
                             </div>
                        </div>
                    )}
                    {error && <div className="text-red-500 text-center p-2">{error}</div>}
                    <div ref={chatEndRef} />
                </div>
                
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-card-light dark:bg-card-dark">
                    <form onSubmit={handleSendMessage} className="flex gap-4 items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={aiRef.current ? "Pregúntame algo sobre ecología..." : "Iniciando asistente..."}
                            className="flex-grow w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                            disabled={isLoading || !aiRef.current}
                            aria-label="Escribe tu mensaje"
                        />
                        <button type="submit" disabled={isLoading || !input.trim() || !aiRef.current} className="bg-primary text-white rounded-full p-3 hover:bg-green-600 dark:hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex-shrink-0" aria-label="Enviar mensaje">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default EcoAssistantPage;