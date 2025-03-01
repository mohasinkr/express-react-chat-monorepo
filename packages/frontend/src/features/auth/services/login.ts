import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface Credentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: string;
    email: string;
    username: string;
  };
  token: string;
}

const signIn = async (credentials: Credentials): Promise<LoginResponse> => {
  const response = await api.post("v1/auth/login", credentials);
  return response?.data;
};

export const useLogin = (
  handleSuccess: (data: LoginResponse) => void,
  handleError?: (error: unknown) => void
) => {
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      if (handleSuccess) {
        handleSuccess(data);
      }
    },
    onError: (error) => {
      if (handleError) {
        handleError(error);
      }
    },
  });
};
