import { Chat } from "@/components/chat/Chat";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <div className="flex-shrink-0 text-center pt-12 pb-8">
        <h1 className="text-6xl md:text-8xl font-black text-black mb-4 uppercase tracking-wider">
          UNBIASED
        </h1>
        <p className="text-lg md:text-xl text-black font-normal">
          Make your own fuc*ing decision.
        </p>
      </div>

      {/* Chat Section with Fixed Height */}
      <div className="flex-1 flex justify-center px-4 pb-4">
        <Chat />
      </div>
    </div>
  );
}
