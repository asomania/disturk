import React from "react";

interface Channel {
  id: string;
  name: string;
  type: "text" | "voice";
}

const dummyChannels: Channel[] = [
  { id: "1", name: "general", type: "text" },
  { id: "2", name: "random", type: "text" },
  { id: "4", name: "announcements", type: "text" },
  { id: "3", name: "Voice Chat 1", type: "voice" },
  { id: "5", name: "Voice Chat 2", type: "voice" },
];

const Channel: React.FC = () => {
  return (
    <div className="w-60 bg-gray-900 h-screen flex flex-col justify-between">
      <div className="py-5 px-2">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16  flex items-center justify-center text-white text-3xl font-bold cursor-pointer ">
            Channel
          </div>
        </div>
        <div>
          <h2 className="text-gray-400 text-xs uppercase mb-2 px-2">
            Text Channels
          </h2>
          {dummyChannels.map(
            (channel) =>
              channel.type === "text" && (
                <div
                  key={channel.id}
                  className="flex items-center text-gray-400 px-2 py-1 hover:bg-gray-700 hover:text-white rounded cursor-pointer transition-colors"
                >
                  <span className="mr-2 text-lg">#</span>
                  <span>{channel.name}</span>
                </div>
              )
          )}
        </div>
        <div className="mt-6">
          <h2 className="text-gray-400 text-xs uppercase mb-2 px-2">
            Voice Channels
          </h2>
          {dummyChannels.map(
            (channel) =>
              channel.type === "voice" && (
                <div
                  key={channel.id}
                  className="flex items-center text-gray-400 px-2 py-1 hover:bg-gray-700 hover:text-white rounded cursor-pointer transition-colors"
                >
                  <span className="mr-2 text-lg">🔊</span>
                  <span>{channel.name}</span>
                </div>
              )
          )}
        </div>
      </div>
      <div className="bg-gray-800 p-4 flex items-center">
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
        <div className="ml-3">
          <h4 className="text-white text-sm font-semibold">Username</h4>
          <span className="text-gray-400 text-xs">#1234</span>
        </div>
      </div>
    </div>
  );
};

export default Channel;
