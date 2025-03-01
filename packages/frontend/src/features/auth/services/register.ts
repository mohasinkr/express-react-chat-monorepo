import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const signIn = async (credentials: { username: string, password: string }) => {
    const response = await api.post("/auth/login", credentials);
    if (response.data) {
        return response.data;
    }
};

export const useLogin = (credentials: { username: string, password: string }) => {
    return useQuery({
        queryKey: ["login"],
        queryFn: async () => {
            const token = await signIn(credentials);
            return token;
        },
    })
}