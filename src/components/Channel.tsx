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
    <div className="w-60 bg-gray-700 h-screen ">
      <div className="flex flex-col justify-between h-full py-20">
        <div className="flex flex-col items-center ">
          <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-600 transition-colors">
            🌐
          </div>
          <h2 className="text-white text-xl font-bold mb-4">Server name</h2>
          <h2 className="text-white text-xl font-bold mb-4">Channels</h2>
        </div>

        <div className="pb-80">
          <h2 className="text-white text-xl font-bold mb-4  bg-gray-600 p-2">
            Text Channels
          </h2>
          {dummyChannels.map(
            (channel) =>
              channel.type === "text" && (
                <div
                  key={channel.id}
                  className="flex items-center text-gray-300 hover:text-white cursor-pointer"
                >
                  <span className="mr-2">
                    {channel.type === "text" ? "#" : "🔊"}
                  </span>
                  <span>{channel.name}</span>
                </div>
              )
          )}

          <h2 className="text-white text-xl font-bold mb-4"> Voice Channels</h2>
          {dummyChannels.map(
            (channel) =>
              channel.type === "voice" && (
                <div
                  key={channel.id}
                  className="flex items-center text-gray-300 hover:text-white cursor-pointer"
                >
                  <span className="mr-2">🔊</span>
                  <span>{channel.name}</span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Channel;
