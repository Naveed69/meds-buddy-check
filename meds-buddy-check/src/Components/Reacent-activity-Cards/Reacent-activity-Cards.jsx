import "./Reacent-activity-Cards.css";
import { format } from "date-fns";
import { Check, TriangleAlert, Camera } from "lucide-react";
const ReacentactivityCards = ({ date, taken, time, hasPhoto }) => {
  return (
    <div className="reacent-card-container">
      <div>
        {taken ? (
          <Check className="taken" />
        ) : (
          <TriangleAlert className="not-taken" />
        )}
        <span className="date-time">
          {format(new Date(date), "EEEE, MMMM d")}
          <br />
          {time ? <>Taken at {time}</> : <>Medication missed</>}
        </span>
      </div>
      <div>
        <div className="hasphoto-completed">
          {hasPhoto ? (
            <div className="has-photo">
              <Camera style={{ height: "14px", width: "14px" }} /> photo
            </div>
          ) : (
            <></>
          )}
          <p className={taken ? "completed" : "missed"}>
            {taken ? "Completed" : "Missed"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReacentactivityCards;
