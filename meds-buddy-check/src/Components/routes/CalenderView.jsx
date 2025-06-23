import { Clock } from "lucide-react";
import Calendar from "react-calendar";
import "./CalenderView.css";
import { format, isToday, isBefore, startOfDay } from "date-fns";
const Calenderview = () => {
  return (
    <>
      <div className="calender-container-patient">
        <span>
          <h3>Medication Calendar Overview</h3>
          <div className="calender">
            <Calendar className="react-calendar" />
            <ul className="legend-list">
              <li>
                <span className="dot green"></span>Medication taken
              </li>
              <li>
                <span className="dot red"></span>Missed medication
              </li>
              <li>
                <span className="dot blue"></span>Today
              </li>
            </ul>
          </div>
        </span>
        <div className="details">
          <p>Details for June 23, 2025</p>
          <div>
            <span>
              <Clock style={{ marginRight: "10px" }} /> Today
            </span>
            <p>Monitor Eleanor Thompson's medication status for today.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calenderview;
