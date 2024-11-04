import { jwtDecode } from 'jwt-decode'; // Chú ý cú pháp import

interface TokenPayload {
    userId: number; // Điều chỉnh dựa trên cấu trúc payload của token
    // Thêm bất kỳ trường nào khác mà bạn cần từ token
}

export const getUserIdFromToken = (): number | null => {
    const token = localStorage.getItem("token"); // Hoặc từ cookies
    console.log("token: ", token);

    if (token) {
        try {
            const decoded: TokenPayload = jwtDecode(token); // Sử dụng jwtDecode
            console.log("decoded: ", decoded.userId);
            return decoded.userId; // Trả về user ID từ token
        } catch (error) {
            console.error("Không thể giải mã token: ", error);
        }
    }
    return null;
};
