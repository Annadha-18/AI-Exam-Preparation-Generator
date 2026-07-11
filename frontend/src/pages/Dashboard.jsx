import DashboardLayout from "../layouts/DashboardLayout";

import Topbar from "../components/dashboard/Topbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatsCard from "../components/dashboard/StatsCard";
import QuickActions from "../components/dashboard/QuickActions";
import AIAssistant from "../components/dashboard/AIAssistant";
import RecentActivity from "../components/dashboard/RecentActivity";

import {
  FaBook,
  FaQuestionCircle,
  FaCheckCircle,
  FaFire,
} from "react-icons/fa";

function Dashboard() {
  return (
    <DashboardLayout>
      {/* Top Navigation */}
      <Topbar />

      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        <StatsCard
          title="Uploaded Notes"
          value={12}
          icon={<FaBook />}
          color="bg-gradient-to-r from-blue-500 to-blue-700"
        />

        <StatsCard
          title="Generated Quizzes"
          value={18}
          icon={<FaQuestionCircle />}
          color="bg-gradient-to-r from-purple-500 to-violet-700"
        />

        <StatsCard
          title="Questions Solved"
          value={450}
          icon={<FaCheckCircle />}
          color="bg-gradient-to-r from-green-500 to-emerald-700"
        />

        <StatsCard
          title="Study Streak"
          value={15}
          icon={<FaFire />}
          color="bg-gradient-to-r from-orange-500 to-red-600"
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* AI Assistant */}
      <AIAssistant />

      {/* Recent Activity */}
      <div className="mt-8">
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;