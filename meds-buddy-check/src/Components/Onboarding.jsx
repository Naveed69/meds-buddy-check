import { useState } from "react";
import "./Onboarding.css";
import { Heart, User, Users } from "lucide-react";
import PatientDashboard from "./PatientDashboard";
import CaretakerDashboard from "./CaretakerDashboard";
export const OnBording = () => {
  const [onboard, setOnboard] = useState(true);
  const [patient, setPatient] = useState(false);
  const [caretaker, setCaretaker] = useState(false);
  const patientBtn = () => {
    setOnboard(false);
    setPatient(true);
    setCaretaker(false);
  };
  const careTaker = () => {
    setOnboard(false);
    setPatient(false);
    setCaretaker(true);
  };

  return (
    <>
      {onboard ? (
        <div className="container">
          <Heart className="heart-onboard" />
          <p className="welcome-onboard">Welcome to MediCare Companion</p>
          <p className="moto-onboard">
            Your trusted partner in medication management. Choose your role to
            get started with personalized features.
          </p>

          <div className="patient-carretaker-onboard">
            <div className="patient-onboard">
              <User className="pateint-user" />
              <p className="impatient-onboard">I'm a Patient</p>
              <p className="tacker-onboard">
                Track your medication schedule and maintain your health records
              </p>
              <ul className="patient-ul">
                <li>Mark medications as taken</li>
                <li>Upload proof photos (optional)</li>
                <li>View your medication calendar</li>
                <li>Large, easy-to-use interface</li>
              </ul>
              <button
                type="button"
                onClick={() => patientBtn()}
                className="patient-bnt-onboard"
              >
                Continue as Patient
              </button>
            </div>
            <div className="caretaker-onboard">
              <Users className="caretaker-user" />
              <p className="imCaretaker-onboard">I'm a Caretaker</p>
              <p className="tacker-onboard">
                Monitor and support your loved one's medication adherence
              </p>
              <ul className="caretaker-ul">
                <li>Monitor medication compliance</li>
                <li>Set up notification preferences</li>
                <li>View detailed reports </li>
                <li>Receive email alerts</li>
              </ul>
              <button
                type="button"
                onClick={() => careTaker()}
                className="caretaker-bnt-onboard"
              >
                Continue as Caretaker
              </button>
            </div>
          </div>

          <p className="alert-onboard">
            You can switch between roles anytime after setup
          </p>
        </div>
      ) : (
        <div>
          <nav className="navbar">
            <div className="logo-div">
              <div className="logo">M</div>
              <div>
                <p className="brand-name">MediCare Companion</p>

                {patient ? (
                  <p className="p">Patient View</p>
                ) : (
                  <p className="p">CareTaker View</p>
                )}
              </div>
            </div>
            <span>
              <button
                className="toggel-btn"
                onClick={() => (patient ? careTaker() : patientBtn())}
              >
                {patient ? <Users /> : <User />}
                Switch to {patient ? "Caretaker" : "Patient"}
              </button>
            </span>
          </nav>
          {patient ? (
            <>
              <PatientDashboard />
            </>
          ) : (
            <>
              <CaretakerDashboard />
            </>
          )}
        </div>
      )}
    </>
  );
};
