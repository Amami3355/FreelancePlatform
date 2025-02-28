import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
    id: string;
    content: string;
    type: 'user' | 'assistant';
    timestamp: Date;
}

interface AIContextType {
    messages: Message[];
    addMessage: (content: string, type: 'user' | 'assistant') => void;
    clearMessages: () => void;
    isProcessing: boolean;
}

const AIContext = createContext<AIContextType | undefined>(undefined);

export function AIProvider({ children }: { children: ReactNode }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);

    const addMessage = (content: string, type: 'user' | 'assistant') => {
        const newMessage: Message = {
            id: Date.now().toString(),
            content,
            type,
            timestamp: new Date(),
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const clearMessages = () => {
        setMessages([]);
    };

    return (
        <AIContext.Provider value={{ messages, addMessage, clearMessages, isProcessing }}>
            {children}
        </AIContext.Provider>
    );
}

export function useAI() {
    const context = useContext(AIContext);
    if (context === undefined) {
        throw new Error('useAI must be used within an AIProvider');
    }
    return context;
} 