import LeftSidebar from "../components/LeftSideBar";
import Channel from "../components/Channel";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-900">
      <LeftSidebar />
      <Channel />
    </div>
  );
};

export default Dashboard;
