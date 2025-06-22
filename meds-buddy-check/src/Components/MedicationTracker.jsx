import { useState, useRef } from "react";
import "./MedicationTracker.css";
import { Clock, Check, Image, Camera } from "lucide-react";

const MedicationTracker = ({ date, isTaken, onMarkTaken, isToday }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const dailyMedication = {
    name: "Daily Medication Set",
    time: "8:00 AM",
    description: "Complete set of daily tablets",
  };

  const handleImageSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMarkTaken = () => {
    onMarkTaken(date, selectedImage || undefined);
    setSelectedImage(null);
    setImagePreview(null);
  };

  if (isTaken) {
    return (
      <div className="medication-container">
        <div className="medication-completed">
          <Check className="completed-medication-check" />
          <h3>Medication Completed!</h3>
          <p>
            Great job! You've taken your medication for{" "}
            {new Date(date).toLocaleDateString()}.
          </p>
        </div>

        <div className="medication-container-completed">
          <div className="count-name">
            <div className="count-medication-completed">
              <Check />
            </div>
            <span>
              <p className="medication-name">{dailyMedication.name}</p>
              <p className="medication-description">
                {dailyMedication.description}
              </p>
            </span>
          </div>
          <span className="medication-time">
            <Clock
              width={14}
              height={14}
              style={{ marginRight: "5px", marginLeft: "5px" }}
            />
            {dailyMedication.time}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="medication-container">
      <div className="medication-container-incompleted">
        <div className="count-name">
          <div className="count-medication">1</div>
          <span>
            <p className="medication-name">{dailyMedication.name}</p>
            <p className="medication-description">
              {dailyMedication.description}
            </p>
          </span>
        </div>
        <span className="medication-time">
          <Clock
            width={14}
            height={14}
            style={{ marginRight: "5px", marginLeft: "5px" }}
          />
          {dailyMedication.time}
        </span>
      </div>

      <div className="medication-image-container">
        <Image className="image" />
        <h3>Add Proof Photo (Optional)</h3>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <button
          className="take-photo"
          onClick={() => fileInputRef.current?.click()}
        >
          <Camera style={{ marginRight: "10px" }} />
          {selectedImage ? "Change Photo" : "Take Photo"}
        </button>

        {imagePreview && (
          <div>
            <img
              src={imagePreview}
              alt="Medication proof"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <p>Photo selected: {selectedImage?.name}</p>
          </div>
        )}
      </div>

      <button
        className="masrkastaken-medication"
        onClick={handleMarkTaken}
        disabled={!isToday}
      >
        <Check style={{ width: "16px", height: "16px", marginRight: "10px" }} />
        {isToday ? "Mark as Taken" : "Cannot mark future dates"}
      </button>

      {!isToday && <p>You can only mark today's medication as taken</p>}
    </div>
  );
};

export default MedicationTracker;
