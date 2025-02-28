import { Brain, X, Maximize2, Minimize2, Loader } from 'lucide-react';
import { useState } from 'react';
import { useAI } from '../contexts/AIContext';

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState('');
    const { messages, addMessage, isProcessing } = useAI();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        addMessage(input, 'user');
        setInput('');

        // Simuler une réponse de l'IA (à remplacer par votre logique d'IA)
        setTimeout(() => {
            addMessage("Je suis là pour vous aider. Que puis-je faire pour vous ?", 'assistant');
        }, 1000);
    };

    return (
        <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300
      ${isOpen ? 'w-96' : 'w-auto'}
      ${isMinimized ? 'h-12' : isOpen ? 'h-[600px]' : 'h-12'}`}
        >
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full
            hover:bg-indigo-700 transition-colors shadow-lg"
                >
                    <Brain className="w-5 h-5" />
                    <span>Assistant IA</span>
                </button>
            ) : (
                <div className="w-full h-full bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
                    <div className="p-4 border-b flex items-center justify-between bg-indigo-50">
                        <div className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-indigo-600" />
                            <h3 className="font-medium">Assistant IA</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsMinimized(!isMinimized)}
                                className="p-1 hover:bg-indigo-100 rounded"
                            >
                                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-indigo-100 rounded"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            <div className="flex-1 p-4 overflow-y-auto">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`mb-4 ${message.type === 'user' ? 'ml-auto' : 'mr-auto'
                                            }`}
                                    >
                                        <div
                                            className={`p-3 rounded-lg max-w-[80%] ${message.type === 'user'
                                                    ? 'bg-indigo-600 text-white'
                                                    : 'bg-gray-100 text-gray-800'
                                                }`}
                                        >
                                            {message.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <form onSubmit={handleSubmit} className="p-4 border-t">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Posez votre question..."
                                        className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                                    >
                                        {isProcessing ? <Loader className="w-5 h-5 animate-spin" /> : 'Envoyer'}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            )}
        </div>
    );
} 