import CreateAccountBtn from "./CreateAccountBtn";
import { AtSign, KeyRound, UserCircle2 } from "lucide-react";
import { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [focusedInput, setFocusedInput] = useState<
    "username" | "password" | "email" | null
  >(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
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
            className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
            placeholder="Username"
          />
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
            <AtSign
              className={`h-5 w-5 transition-colors duration-200 ${
                focusedInput === "email" ? "text-indigo-500" : "text-gray-400"
              }`}
            />
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
            placeholder="Email address"
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

      <CreateAccountBtn />
    </form>
  );
};

export default RegisterForm;
