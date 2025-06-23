import Card from "./cards/Card";
import "./CaretakerDashboard.css";
import { Users, Calendar as CalendarIcon } from "lucide-react";

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
            text={"Missed Doses"}
            color={
              "linear-gradient(90deg, rgb(92, 182, 218), rgb(106, 154, 224))"
            }
          />
          <Card
            value={missedDoses}
            text={"Missed Doses"}
            color={
              "linear-gradient(90deg,rgb(106, 154, 224) ,rgb(91, 143, 221))"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CaretakerDashboard;
