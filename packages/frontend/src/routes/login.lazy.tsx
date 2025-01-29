import { createLazyFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import {
  KeyRound,
  UserCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const Route = createLazyFileRoute("/login")({
  component: LoginScreen,
});

interface RegisterScreenProps {
  onRegister: (username: string, password: string) => void;
  onSignInClick: () => void;
}

function LoginScreen({ onRegister, onSignInClick }: RegisterScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState<
    "username" | "password" | null
  >(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(username, password);
  };

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
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join thousands of users in our chat community
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserCircle2
                  className={`h-5 w-5 transition-colors duration-200 ${
                    focusedInput === "username"
                      ? "text-indigo-500"
                      : "text-gray-400"
                  }`}
                />
              </div>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocusedInput("username")}
                onBlur={() => setFocusedInput(null)}
                className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                placeholder="Username"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:shadow-lg"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <ArrowRight className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
              </span>
              Create Account
            </button>
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

          <button
            onClick={onSignInClick}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors hover:underline"
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}
