import ReacentactivityCards from "../Reacent-activity-Cards/Reacent-activity-Cards";
import "./RecentActivity.css";
const RecentActivity = () => {
  const recentActivity = [
    { date: "2024-06-10", taken: true, time: "8:30 AM", hasPhoto: true },
    { date: "2024-06-09", taken: true, time: "8:15 AM", hasPhoto: false },
    { date: "2024-06-08", taken: false, time: null, hasPhoto: false },
    { date: "2024-06-07", taken: true, time: "8:45 AM", hasPhoto: true },
    { date: "2024-06-06", taken: true, time: "8:20 AM", hasPhoto: false },
  ];
  return (
    <>
      <div className="recent-container">
        <p style={{ fontSize: "24px", fontWeight: "500" }}>
          Recent Medication Activity
        </p>
        {recentActivity.map((item) => {
          return (
            <ReacentactivityCards
              date={item.date}
              taken={item.taken}
              time={item.time}
              hasPhoto={item.hasPhoto}
            />
          );
        })}
      </div>
    </>
  );
};
export default RecentActivity;
