"use client";
import { Chat } from "@/components/chat/Chat";
import { Fragment, useState } from "react";
import { OpenAiResponse } from "@/types";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<OpenAiResponse>();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 md:p-8">
        {/* Left Column - Input */}
        <div className="flex flex-col mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-4 uppercase tracking-wider">
              UNBIASED
            </h1>
            <p className="text-lg md:text-xl text-black font-normal">
              Make your own fuc*ing decision.
            </p>
          </div>

          <div className="flex justify-center">
            <Chat setLoading={setLoading} setMessage={setMessage} />
          </div>
        </div>

        <div className="flex flex-col">
          {/* Main Title */}
          <div className="w-full mb-12 border-b-4 border-black pb-6">
            <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-wider leading-none">
              {message?.name || "WAITING FOR YOUR PROMPT"}
            </h1>
            {loading && (
              <div className="mt-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-black animate-pulse"></div>
                <span className="text-lg font-bold uppercase tracking-wide">
                  ANALYZING...
                </span>
              </div>
            )}
          </div>

          {message && (
            <div className="w-full space-y-8">
              {/* Score Section */}
              <div className="bg-black text-white p-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-bold uppercase tracking-wide">
                    BIAS SCORE
                  </span>
                  <span className="text-5xl font-black">{message.score}</span>
                  <span className="text-lg font-bold">/10.0</span>
                </div>
                <div className="mt-2 h-2 bg-white">
                  <div
                    className="h-full bg-red-600"
                    style={{ width: `${message.score * 10}%` }}
                  ></div>
                </div>
              </div>

              {/* Description */}
              <div className="border-l-4 border-black pl-6">
                <h2 className="text-sm font-bold uppercase tracking-wide mb-3 text-gray-600">
                  ASSESSMENT
                </h2>
                <p className="text-xl font-medium leading-tight text-black">
                  {message.description}
                </p>
              </div>

              {/* Marketing Spend */}
              {message.moneySpentLastYearForMarketing && (
                <div className="bg-gray-100 p-6 border-2 border-black">
                  <h2 className="text-sm font-bold uppercase tracking-wide mb-2">
                    MARKETING BUDGET
                  </h2>
                  <p className="text-3xl font-black text-black">
                    ${message.moneySpentLastYearForMarketing}
                  </p>
                </div>
              )}

              {/* Claims Section */}
              {message.claims && message.claims.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-black uppercase tracking-wide border-b-2 border-black pb-2">
                    EVIDENCE
                  </h2>
                  {message.claims.map((claim, index) => (
                    <div
                      key={index}
                      className="border-2 border-black p-4 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-black text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-medium text-black mb-3 leading-snug">
                            {claim.claim}
                          </p>
                          <Link
                            href={claim.article}
                            target="_blank"
                            className="inline-block bg-black text-white px-4 py-2 text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
                          >
                            READ SOURCE →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
