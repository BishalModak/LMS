import { useEffect, useState } from "react";
import { getAdminDashboard } from "../../services/dashboardService";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const result = await getAdminDashboard();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  if (!data) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row">
        <DashboardCard title="Total Users" value={data.total_users} />

        <DashboardCard title="Total Courses" value={data.total_courses} />

        <DashboardCard
          title="Total Enrollments"
          value={data.total_enrollments}
        />

        <DashboardCard title="Admins" value={data.admin_count} />

        <DashboardCard title="Instructors" value={data.instructor_count} />

        <DashboardCard title="Students" value={data.student_count} />
      </div>
    </div>
  );
};

export default Dashboard;
