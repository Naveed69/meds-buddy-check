import { useState } from "react";
import MedicationTracker from "./MedicationTracker";
import { format, isToday, isBefore, startOfDay } from "date-fns";
import "./PatientDashboard.css";

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
      <div>
        <h2>
          Good
          {" " + new Date().getHours() < 12
            ? "Morning"
            : new Date().getHours() < 18
            ? "Afternoon"
            : "Evening"}
          !
        </h2>
        <p>Ready to stay on track with your medication?</p>
        <div>
          <div>Day Streak: {getStreakCount()}</div>
          <div>Today's Status: {takenDates.has(todayStr) ? "✓" : "o"}</div>
          <div>Monthly Rate: {Math.round((takenDates.size / 30) * 100)}%</div>
        </div>
      </div>

      <div>
        <div>
          <h3>
            {isTodaySelected
              ? "Today's Medication"
              : `Medication for ${format(selectedDate, "MMMM d, yyyy")}`}
          </h3>
          <MedicationTracker
            date={selectedDateStr}
            isTaken={isSelectedDateTaken}
            onMarkTaken={handleMarkTaken}
            isToday={isTodaySelected}
          />
        </div>

        <div>
          <h3>Medication Calendar</h3>
          {/* Calendar UI to be implemented with a third-party or custom calendar */}
          <p>Calendar placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
