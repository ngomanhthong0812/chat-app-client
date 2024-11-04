interface ChatItemType {
    avatar_url: string;
    chat_name: string;
    id: number;
    user_id: number;
    chat_id: number | null;
    group_id: number | null;
    content: string;
    image_url: string | null;
    video_url: string | null;
    file_url: string | null;
    sent_at: string;
    seen_at: string | null;
    is_read: number;
    sender_last_name: string;
    sender_first_name: string;
    participants: string;
    participants_avatar_url: string;
    active: boolean;
    handleSetLoading: () => void;
    handleActiveItem: (msg_id: number, chat_id: number | null, group_id: number | null) => void;
}

interface User {
    user_id: number;
    avatar_url: string;
    first_name: string;
    last_name: string;
}