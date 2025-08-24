"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  return (
    <div className="flex flex-col w-full max-w-2xl h-[50vh]">
      {/* Messages Container with Fixed Height and Scroll */}
      <div className="flex-1 overflow-y-scroll mb-4 p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
        {messages.length === 0 ? (
          <div className="text-center text-zinc-500 dark:text-zinc-400 mt-8">
            <p>Start a conversation...</p>
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="mb-4 last:mb-0">
              <div
                className={`font-bold text-sm mb-1 ${
                  message.role === "user"
                    ? "text-black dark:text-white"
                    : "text-zinc-600 dark:text-zinc-300"
                }`}
              >
                {message.role === "user" ? "User:" : "AI:"}
              </div>
              <div className="whitespace-pre-wrap text-black dark:text-white">
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case "text":
                      return <div key={`${message.id}-${i}`}>{part.text}</div>;
                  }
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input Form - Fixed at Bottom */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
        className="flex-shrink-0"
      >
        <input
          className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
