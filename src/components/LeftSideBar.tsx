import React from "react";

interface Server {
  id: string;
  name: string;
  icon: string;
}

const dummyServers: Server[] = [
  { id: "1", name: "General", icon: "🌐" },
  { id: "2", name: "Gaming", icon: "🎮" },
  { id: "3", name: "Music", icon: "🎵" },
  { id: "4", name: "Art", icon: "🎨" },
  { id: "5", name: "Tech", icon: "💻" },
];

const LeftSidebar: React.FC = () => {
  return (
    <div className="w-30 bg-gray-800 h-screen flex flex-col items-center py-4 space-y-4">
      {dummyServers.map((server) => (
        <div
          key={server.id}
          className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gray-600 transition-colors"
          title={server.name}
        >
          {server.icon}
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
