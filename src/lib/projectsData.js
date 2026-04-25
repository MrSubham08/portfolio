// Central source of all project data
// Add new projects here — homepage shows first 3, all-projects page shows everything.

const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const allProjects = [
  {
    title: "Vehicle Record System",
    subtitle: "Computer vision-based smart access control.",
    description: "Computer vision-based smart access control. Implemented license plate detection using Python, OpenCV, and optimized ML character segmentation.",
    tags: ["Python", "OpenCV", "Machine Learning"],
    img: `${prefix}/assets/project_img/dummy_project.jpg`,
    demo: "https://github.com/MrSubham08",
    github: "https://github.com/MrSubham08",
  },
  {
    title: "FaceAttend — Face Recognition Attendance",
    subtitle: "AI-powered smart attendance system using real-time face recognition.",
    description: "AI-powered smart attendance system with real-time face recognition. Built webcam-based enrollment, face-matching attendance marking, admin analytics dashboard, and face-based credential recovery using 128-d facial encodings.",
    tags: ["Python", "Flask", "OpenCV", "face_recognition", "SQLite", "JavaScript"],
    img: `${prefix}/assets/project_img/dummy_project.jpg`,
    demo: "https://face-recognition-attendance-system-xr13.onrender.com",
    github: "https://github.com/MrSubham08/Face-Recognition-Attendance-System",
  },
  {
    title: "Adaptive Notch Filtering",
    subtitle: "Dynamic interference suppression for cognitive radio networks.",
    description: "Designed and implemented an adaptive differential filtering technique simulated in MATLAB to dynamically suppress interference in cognitive radio networks.",
    tags: ["MATLAB", "Signal Processing", "Cognitive Radio"],
    img: `${prefix}/assets/project_img/dummy_project.jpg`,
    demo: "https://github.com/MrSubham08",
    github: "https://github.com/MrSubham08",
  },
  // ➕ Add more projects below — they will ONLY show on the All Projects page
  {
    title: "Autonomous MiniDrone",
    subtitle: "Precision navigation and landing drone using MATLAB.",
    description: "Built an autonomous drone using MATLAB & Simulink for precise navigation and landing. Competed in the MathWorks MiniDrone Competition at IISc Bangalore (Top 10 Finalist).",
    tags: ["MATLAB", "Simulink", "Control Systems", "Drone"],
    img: `${prefix}/assets/project_img/dummy_project.jpg`,
    demo: "https://github.com/MrSubham08",
    github: "https://github.com/MrSubham08",
  },
];

export default allProjects;
