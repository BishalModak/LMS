import { useEffect, useState } from "react";
import { getInstructorDashboard } from "../../services/dashboardService";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const result = await getInstructorDashboard();
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
      <h2>Instructor Dashboard</h2>

      <div className="row">
        <DashboardCard title="My Courses" value={data.my_courses} />

        <DashboardCard title="Total Students" value={data.total_students} />
      </div>
    </div>
  );
};

export default Dashboard;
