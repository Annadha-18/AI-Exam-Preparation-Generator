import Sidebar from "../components/dashboard/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 transition-all duration-300">

        <div className="min-h-screen p-6 lg:p-8">

          {children}

        </div>

      </main>

    </div>
  );
}

export default DashboardLayout;