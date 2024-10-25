// import React, { useState, useEffect } from 'react';
// import { ReactMic } from 'react-mic';
// import './Babble.css';  // Import custom CSS for styling

// const Babble = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [permissionGranted, setPermissionGranted] = useState(false);
//   const [countdown, setCountdown] = useState(3);
//   const [showWaveform, setShowWaveform] = useState(false);

//   // Function to request microphone permission
//   const getMicrophonePermission = async () => {
//     try {
//       await navigator.mediaDevices.getUserMedia({ audio: true });
//       setPermissionGranted(true);
//     } catch (error) {
//       alert('Microphone permission is required.');
//     }
//   };

//   // Countdown logic before recording starts
//   useEffect(() => {
//     if (permissionGranted && countdown > 0) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (countdown === 0) {
//       setIsRecording(true);
//       setShowWaveform(true);
//     }
//   }, [permissionGranted, countdown]);

//   // Start recording after permission is granted
//   const startRecording = () => {
//     getMicrophonePermission();
//     setCountdown(3);
//     setShowWaveform(false);
//   };

//   // Stop recording
//   const stopRecording = () => {
//     setIsRecording(false);
//     setShowWaveform(false);
//     setCountdown(3);
//     setPermissionGranted(false);
//   };
//   return (
//     <div className="babble-container">
//       <button
//         className={`babble-button ${isRecording ? 'recording' : ''}`}
//         onClick={startRecording}
//         disabled={isRecording || countdown < 3}
//       >
//         Babble
//       </button>

//       {countdown > 0 && permissionGranted && (
//         <h3 className="countdown-text">Recording starts in: {countdown}</h3>
//       )}

//       {showWaveform && (
//         <div className="waveform-container">
//           <ReactMic
//             record={isRecording}
//             className="custom-waveform"
//             onStop={stopRecording}
//             strokeColor="#00CCFF"
//             backgroundColor="transparent"
//           />
//           <button
//             className="stop-button"
//             onClick={stopRecording}
//             disabled={!isRecording}
//           >
//             Stop
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Babble;
import React, { useState, useEffect } from "react";
import { ReactMic } from "react-mic";
import "./Babble.css";

const Babble = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [showWaveform, setShowWaveform] = useState(false);

  // Function to request microphone permission
  const getMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setPermissionGranted(true);
    } catch (error) {
      alert("Microphone permission is required.");
    }
  };

  // Countdown logic before recording starts
  useEffect(() => {
    if (permissionGranted && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsRecording(true);
      setShowWaveform(true);
    }
  }, [permissionGranted, countdown]);

  // Start recording after permission is granted
  const startRecording = () => {
    getMicrophonePermission();
    setCountdown(3);
    setShowWaveform(false);
  };

  // Stop recording
  const stopRecording = () => {
    setIsRecording(false);
    setShowWaveform(false);
    setCountdown(3);
    setPermissionGranted(false);
  };

  return (
    <div className="babble-container">
      <header className="babble-header">
        <h1>babble</h1>
      </header>

      <div className="babble-content">
        {!isRecording && (
          <div className="babble-circle" onClick={startRecording}>
            <span>Babble</span>
            {countdown > 0 && permissionGranted && (
              <h3 className="countdown-text">
                Recording starts in: {countdown}
              </h3>
            )}
          </div>
        )}

        {showWaveform && (
          <div className="waveform-container">
            <ReactMic
              record={isRecording}
              className="custom-waveform"
              onStop={stopRecording}
              strokeColor="#00CCFF"
              backgroundColor="transparent"
              visualSetting="sinewave"
              height={200} 
              width={500} 
            />
            <button
              className="stop-button"
              onClick={stopRecording}
              disabled={!isRecording}
            >
              Stop
            </button>
          </div>
        )}

        <div className="babble-footer">
          <div className="icon-circle">
            <span className="icon">&#x1F3E0;</span>
          </div>
          <div className="icon-circle">
            <span className="icon">&#x1F508;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Babble;
