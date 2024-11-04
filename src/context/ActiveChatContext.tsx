"use client"

import React, { createContext, useContext, useState } from 'react';
interface ActiveChatType {
    chatId: number | null;
    groupId: number | null;
    setChatId: React.Dispatch<React.SetStateAction<number | null>>;
    setGroupId: React.Dispatch<React.SetStateAction<number | null>>;
}
const ActiveChatContext = createContext<ActiveChatType | null>(null);

export const ActiveChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [chatId, setChatId] = useState<number | null>(null);
    const [groupId, setGroupId] = useState<number | null>(null);

    return (
        <ActiveChatContext.Provider value={{ chatId, setChatId, groupId, setGroupId }
        }>
            {children}
        </ActiveChatContext.Provider>
    );
};

// Hook để sử dụng context
export const useActiveChat = () => {
    const context = useContext(ActiveChatContext);
    if (!context) {
        throw new Error("useActiveChat must be used within an ActiveChatProvider");
    }
    return context;
};