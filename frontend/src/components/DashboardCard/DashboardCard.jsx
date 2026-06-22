const DashboardCard = ({ title, value }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h5>{title}</h5>
          <h2>{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
