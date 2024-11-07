import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const URL = 'http://localhost:8080';

const useSocket = (userID: number | undefined, chatId: number | null, groupId: number | null) => {
    const [roomId, setRoomId] = useState<string | null>(null);
    const socketRef = useRef<Socket | null>(null);

    // Khởi tạo socket một lần khi hook được gọi lần đầu
    if (!socketRef.current && userID) {
        socketRef.current = io(URL, {
            path: '/socket.io',
            query: {
                userID: userID,
            },
        });
    }

    useEffect(() => {
        const socket = socketRef.current;
        if (!socket) return;

        socket.on('connect', () => {
            console.log('Socket connected');
        });

        return () => {
            socket.disconnect();
        };
    }, [userID])

    // Xử lý join room khi `chatId` hoặc `groupId` thay đổi
    useEffect(() => {
        const socket = socketRef.current;
        if (!socket) return;

        if (roomId) {
            socket.emit('leave-room', roomId);
            console.log(`Left room: ${roomId}`);
            socket.off('receive-message'); // Xóa listener cũ khi rời phòng
        }

        const newRoomId = chatId ? `chat:${chatId}` : groupId ? `group:${groupId}` : null;
        if (newRoomId && newRoomId !== roomId) {
            setRoomId(newRoomId);
            socket.emit('join-room', newRoomId);
            console.log(`Joined room: ${newRoomId}`);
        }
    }, [chatId, groupId]);

    return { socket: socketRef.current, roomId };
};

export default useSocket;
