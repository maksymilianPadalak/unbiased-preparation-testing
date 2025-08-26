"use client";

import { FC, useState } from "react";
import { OpenAiResponse } from "@/types";

export const Chat: FC<{
  setLoading: (isLoading: boolean) => void;
  setMessage: (message: OpenAiResponse) => void;
}> = ({ setLoading, setMessage }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const currentInput = input;
    setInput("");

    try {
      const response = await fetch("/api/open-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: currentInput }),
      });

      const parsedResponse: { response: string } = await response.json();
      const message: OpenAiResponse = JSON.parse(parsedResponse.response);
      
      setMessage(message);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-black bg-white">
          <input
            className="w-full p-6 text-lg font-medium bg-transparent border-none outline-none placeholder-gray-500"
            value={input}
            placeholder="Enter company name..."
            onChange={(e) => setInput(e.currentTarget.value)}
            disabled={false}
          />
        </div>
        
        <button
          type="submit"
          disabled={!input.trim()}
          className="w-full bg-black text-white p-4 text-lg font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          ANALYZE BIAS
        </button>
      </form>
    </div>
  );
};
