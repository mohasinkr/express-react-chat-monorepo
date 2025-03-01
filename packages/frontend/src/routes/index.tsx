import { useState } from "react";
import { authCheck } from "@/lib/authCheck";
import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/")({
  // beforeLoad: authCheck,
  component: RouteComponent,
});

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

export default function ChatDashboard() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "bot", text: "Hello! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: input.trim(),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 border-r p-4">
        <h2 className="text-lg font-semibold">Chats</h2>
        <ScrollArea className="h-[80vh]">
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/40" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span>User 1</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/40" />
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <span>Bot Chat</span>
            </div>
          </div>
        </ScrollArea>
      </aside>

      {/* Chat Window */}
      <main className="flex-1 flex flex-col">
        <Card className="flex-1 flex flex-col">
          <CardContent className="flex-1 p-4">
            <ScrollArea className="h-[70vh]">
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Message Input */}
        <div className="border-t p-4 flex gap-2">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </main>
    </div>
  );
}
