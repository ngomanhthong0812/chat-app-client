import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const URL = 'http://localhost:8080';

const useSocket = (userID: number | undefined, chatId: number | null, groupId: number | null) => {
    const [roomId, setRoomId] = useState<string | null>(null);
    const socket: Socket = io(URL, {
        path: '/socket.io',
        query: {
            userID: userID,
        },
    });

    useEffect(() => {
        socket.on('connect', () => {
            const newRoomId = chatId ? `chat:${chatId}` : groupId ? `group:${groupId}` : null;
            if (newRoomId) {
                setRoomId(newRoomId);
                socket.emit('join-room', newRoomId);
                console.log(newRoomId);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, [userID, chatId, groupId]);

    return { socket, roomId };
};

export default useSocket;