import { useState, useRef } from "react";

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
      <div>
        <div>
          <h3>Medication Completed!</h3>
          <p>
            Great job! You've taken your medication for{" "}
            {new Date(date).toLocaleDateString()}.
          </p>
        </div>
        <div>
          <h4>{dailyMedication.name}</h4>
          <p>{dailyMedication.description}</p>
          <span>{dailyMedication.time}</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h4>{dailyMedication.name}</h4>
        <p>{dailyMedication.description}</p>
        <span>{dailyMedication.time}</span>
      </div>

      <div>
        <h3>Add Proof Photo (Optional)</h3>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          ref={fileInputRef}
        />
        <button onClick={() => fileInputRef.current?.click()}>
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

      <button onClick={handleMarkTaken} disabled={!isToday}>
        {isToday ? "Mark as Taken" : "Cannot mark future dates"}
      </button>

      {!isToday && <p>You can only mark today's medication as taken</p>}
    </div>
  );
};

export default MedicationTracker;
