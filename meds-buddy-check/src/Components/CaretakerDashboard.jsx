import Card from "./cards/Card";
import "./CaretakerDashboard.css";
import { Users, Calendar as CalendarIcon } from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import PatientDashboard from "./PatientDashboard";
import { OnBording } from "./Onboarding";
import Notifications from "./routes/Notifications";
import Calenderview from "./routes/CalenderView";
import RecentActivity from "./routes/RecentActivity";
import Overview from "./routes/Overview";

const CaretakerDashboard = () => {
  //mock data
  const patientName = "Eleanor Thompson";
  const adherenceRate = 85;
  const currentStreak = 5;
  const missedDoses = 3;
  return (
    <div className="caretaker-container">
      <div className="dashboard-header-caretaker">
        <div>
          <Users className="user-caretaker" />
          <span>
            <h2>Caretaker Dashboard</h2>
            <p>Monitoring Eleanor Thompson's medication adherence</p>
          </span>
        </div>

        <div className="patient-card">
          <Card
            value={`${adherenceRate}%`}
            text={"Adherence Rate"}
            color={"linear-gradient(90deg,rgb(50, 199, 137),#32bea6 )"}
          />
          <Card
            value={currentStreak}
            text={"Current Streak"}
            color={"linear-gradient(90deg,#32bea6, rgb(92, 182, 218))"}
          />
          <Card
            value={missedDoses}
            text={"Missed This Month"}
            color={
              "linear-gradient(90deg, rgb(92, 182, 218), rgb(106, 154, 224))"
            }
          />
          <Card
            value={4}
            text={"Taken This Week"}
            color={
              "linear-gradient(90deg,rgb(106, 154, 224) ,rgb(91, 143, 221))"
            }
          />
        </div>
      </div>

      <Router>
        <navbar className="routes-navbar-caretaker">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Overview
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Recent Activity
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Caender View
          </NavLink>
          <NavLink
            to="/logins"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Notifications
          </NavLink>
        </navbar>
        <Routes>
          <Route
            path="/"
            element={
              <Overview name={patientName} adherenceRate={adherenceRate} />
            }
          />
          <Route path="/about" element={<RecentActivity />} />
          <Route path="/login" element={<Calenderview />} />
          <Route path="/logins" element={<Notifications />} />
        </Routes>
      </Router>
    </div>
  );
};

export default CaretakerDashboard;
