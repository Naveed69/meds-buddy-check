import { useState } from "react";
import MedicationTracker from "./MedicationTracker";
import { format, isToday, isBefore, startOfDay } from "date-fns";
import { User, Calendar as CalendarIcon } from "lucide-react";
import Calendar from "react-calendar";
import "./PatientDashboard.css";
import Card from "./cards/Card";

const PatientDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [takenDates, setTakenDates] = useState(new Set());

  const today = new Date();
  const todayStr = format(today, "yyyy-MM-dd");
  const selectedDateStr = format(selectedDate, "yyyy-MM-dd");
  const isTodaySelected = isToday(selectedDate);
  const isSelectedDateTaken = takenDates.has(selectedDateStr);

  const handleMarkTaken = (date, imageFile) => {
    setTakenDates((prev) => new Set(prev).add(date));
    console.log("Medication marked as taken for:", date);
    if (imageFile) {
      console.log("Proof image uploaded:", imageFile.name);
    }
  };

  const getStreakCount = () => {
    let streak = 0;
    let currentDate = new Date(today);
    while (takenDates.has(format(currentDate, "yyyy-MM-dd")) && streak < 30) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    }
    return streak;
  };

  return (
    <div className="container-patient">
      <div className="dashboard-header">
        <div>
          <User className="user-patient" />
          <span>
            <h2>
              Good
              {new Date().getHours() < 12
                ? " Morning"
                : new Date().getHours() < 18
                ? " Afternoon"
                : " Evening"}
              !
            </h2>
            <p>Ready to stay on track with your medication?</p>
          </span>
        </div>

        <div className="patient-card">
          <Card
            value={getStreakCount()}
            text={"Day Streak"}
            color={
              "linear-gradient(90deg,rgb(86, 138, 216),rgb(106, 154, 224))"
            }
          />
          <Card
            value={takenDates.has(todayStr) ? "✓" : "O"}
            text={"Today's Status"}
            color={
              "linear-gradient(90deg, rgb(106, 154, 224),rgb(53, 182, 171))"
            }
          />
          <Card
            value={`${Math.round((takenDates.size / 30) * 100)}%`}
            text={"Monthly Rate"}
            color={"linear-gradient(90deg, #32bea6,rgb(50, 199, 137))"}
          />
        </div>
      </div>

      <div className="medication-container-patient">
        <div className="medication-tracker-patient">
          <div style={{ fontSize: "24px" }}>
            <CalendarIcon className="calender-patient" />
            {isTodaySelected
              ? "Today's Medication"
              : `Medication for ${format(selectedDate, "MMMM d, yyyy")}`}
          </div>
          <MedicationTracker
            date={selectedDateStr}
            isTaken={isSelectedDateTaken}
            onMarkTaken={handleMarkTaken}
            isToday={isTodaySelected}
          />
        </div>

        <div className="calender-container-patient">
          <h3>Medication Calendar</h3>
          <Calendar
            className="react-calendar"
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date }) => {
              const dateStr = format(date, "yyyy-MM-dd");
              const isTaken = takenDates.has(dateStr);
              const isPast = isBefore(date, startOfDay(today));
              const isCurrent = isToday(date);

              if (isTaken) return "taken-day";
              if (!isTaken && isPast && !isCurrent) return "missed-day";
              if (isCurrent) return "today-day";
              return null;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
