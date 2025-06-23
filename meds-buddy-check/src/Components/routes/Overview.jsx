import "./Overview.css";
import { Mail, Calendar, Bell } from "lucide-react";
const Overview = ({ name, adherenceRate }) => {
  return (
    <div className="overview-contaienr">
      <div className="status-actions">
        <div className="todays-status">
          <Calendar className="calender-patient" />
          <span className="today-text">Today's Status</span>
          <div className="daily-medication-set">
            <span>
              <p>Daily Medication Set</p>
              <p>8:00 AM</p>
            </span>
            <p className="pending">pending</p>
          </div>
        </div>

        <div className="quick-actions">
          <span className="quick-text">Quick Actions</span>
          <div className="quick-links">
            <button onClick={() => alert(`Reminder email sent to ${name}`)}>
              <Mail className="ntf" />
              <span> </span> Send Reminder Mail
            </button>
            <button>
              <Bell className="ntf" />
              <span> </span>Configure Notifications
            </button>
            <button>
              <Calendar className="ntf" /> <span> </span>view Full Calender
            </button>
          </div>
        </div>
      </div>

      <div className="monthly-progress">
        <span className="Adherence-text">Monthly Adherence Progress</span>{" "}
        <br />
        <div className="Adherence-text-div">
          <label for="file" className="progress-text">
            Overall Progress
          </label>
          <span>{adherenceRate}%</span>
        </div>
        <br />
        <progress
          className="progress-bar"
          max="100"
          value={adherenceRate}
        ></progress>
        <div className="indicator-bar">
          <div>
            <p style={{ color: "green" }}>22 days</p>
            <p>Taken</p>
          </div>
          <div>
            <p style={{ color: "red" }}>3 days</p>
            <p>Missed</p>
          </div>
          <div>
            <p style={{ color: "blue" }}>5 days</p>
            <p>Remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
