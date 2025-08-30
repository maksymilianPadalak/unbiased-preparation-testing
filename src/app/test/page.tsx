"use client";

import { useState } from "react";

const Test = () => {
  const [response, setResponse] = useState<string>(
    "Pass the prompt to get a response",
  );
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState<string>("");

  const getResponse = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/open-ai-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });

    const parsedResponse = await response.json();

    setResponse(parsedResponse.response);
    setIsLoading(false);
    setInput("");
  };

  return (
    <div
      className={"h-screen w-screen flex flex-col justify-center items-center"}
    >
      <div className={"flex items-center gap-6 mb-6"}>
        <textarea
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none"
          placeholder={"Type your prompt"}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              await getResponse();
            }
          }}
          rows={10}
        />
        <button
          className={`disabled:opacity-15 disabled:cursor-not-allowed hover:cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1`}
          disabled={isLoading}
          onClick={async () => await getResponse()}
        >
          Submit prompt
        </button>
      </div>

      <p className={"text-black font-black text-2xl text-center px-48"}>
        {isLoading ? "Loading..." : response}
      </p>
    </div>
  );
};

export default Test;
