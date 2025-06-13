import "./Onboarding.css";
import { Heart, User, Users } from "lucide-react";
export const OnBording = () => {
  return (
    <div className="container">
      <Heart className="heart-onboard" />
      <p className="welcome-onboard">Welcome to MediCare Companion</p>
      <p className="moto-onboard">
        Your trusted partner in medication management. Choose your role to get
        started with personalized features.
      </p>

      <div className="patient-carretaker-onboard">
        <div className="patient-onboard">
          <User className="pateint-user" />
          <p className="impatient-onboard">I'm a Patient</p>
          <p className="tacker-onboard">
            Track your medication schedule and maintain your health records
          </p>
        </div>
        <div className="caretaker-onboard">
          <Users className="caretaker-user" />
          <p className="imCaretaker-onboard">I'm a Caretaker</p>
          <p className="tacker-onboard">
            Monitor and support your loved one's medication adherence
          </p>
        </div>
      </div>

      <p className="alert-onboard">
        You can switch between roles anytime after setup
      </p>
    </div>
  );
};
