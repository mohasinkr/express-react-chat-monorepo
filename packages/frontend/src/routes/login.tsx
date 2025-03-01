import { Button } from "@/components/button";
import { useLogin } from "@/features/auth/services/login";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, KeyRound, MessageCircle, UserCircle2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  component: LoginScreen,
});

function LoginScreen() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState<"email" | "password" | null>(
    null
  );

  const { mutate: login, isPending } = useLogin(handleSuccess, handleError);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const credentials = {
      email,
      password,
    };
    login(credentials);
  };

  function handleSuccess() {
    toast.success("Login successful");
  }

  function handleError() {
    toast.error("Invalid credentials");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 register-pattern">
      <div className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-indigo-100 rounded-xl">
              <MessageCircle className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Login to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join thousands of users in our chat community
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <UserCircle2
                  className={`h-5 w-5 transition-colors duration-200 ${
                    focusedInput === "email"
                      ? "text-indigo-500"
                      : "text-gray-400"
                  }`}
                />
              </div>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                placeholder="Email"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <KeyRound
                  className={`h-5 w-5 transition-colors duration-200 ${
                    focusedInput === "password"
                      ? "text-indigo-500"
                      : "text-gray-400"
                  }`}
                />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedInput("password")}
                onBlur={() => setFocusedInput(null)}
                className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <Button
              disabled={isPending}
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:shadow-lg"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <ArrowRight className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
              </span>
              {isPending ? "Loading..." : "Login"}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white/80 text-sm text-gray-500">
                Already have an account?
              </span>
            </div>
          </div>

          <Link
            to="/register"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
