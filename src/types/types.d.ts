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
    handleSetLoading: () => void;
}