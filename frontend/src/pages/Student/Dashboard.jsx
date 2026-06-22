import { useEffect, useState } from "react";
import { getStudentDashboard } from "../../services/dashboardService";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const result = await getStudentDashboard();
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
      <h2>Student Dashboard</h2>

      <div className="row">
        <DashboardCard title="Enrolled Courses" value={data.enrolled_courses} />
      </div>
    </div>
  );
};

export default Dashboard;
