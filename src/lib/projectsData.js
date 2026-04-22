// Central source of all project data
// Add new projects here — homepage shows first 3, all-projects page shows everything.

const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const allProjects = [
  {
    title: "Vehicle Record System",
    description: "Computer vision-based smart access control. Implemented license plate detection using Python, OpenCV, and optimized ML character segmentation.",
    tags: ["Python", "OpenCV", "Machine Learning"],
    img: `${prefix}/assets/project_img/dummy_project.jpg`,
    demo: "https://github.com/MrSubham08",
    github: "https://github.com/MrSubham08",
  },
  {
    title: "FaceAttend — Face Recognition Attendance",
    description: "AI-powered smart attendance system using real-time face recognition. Features live webcam enrollment, face-matching attendance, admin analytics dashboard, and face-based credential recovery with 128-dimensional encoding and configurable tolerance matching.",
    tags: ["Python", "Flask", "OpenCV", "face_recognition", "SQLite", "JavaScript"],
    img: `${prefix}/assets/project_img/dummy_project.jpg`,
    demo: "https://github.com/MrSubham08/Face-Recognition-Attendance-System",
    github: "https://github.com/MrSubham08/Face-Recognition-Attendance-System",
    note: "Local only — requires webcam & Python backend",
  },
  {
    title: "Adaptive Notch Filtering",
    description: "Designed and implemented an adaptive differential filtering technique simulated in MATLAB to dynamically suppress interference in cognitive radio networks.",
    tags: ["MATLAB", "Signal Processing", "Cognitive Radio"],
    img: `${prefix}/assets/project_img/dummy_project.jpg`,
    demo: "https://github.com/MrSubham08",
    github: "https://github.com/MrSubham08",
  },
  // ➕ Add more projects below — they will ONLY show on the All Projects page
  {
    title: "Autonomous MiniDrone",
    description: "Built an autonomous drone using MATLAB & Simulink for precise navigation and landing. Competed in the MathWorks MiniDrone Competition at IISc Bangalore (Top 10 Finalist).",
    tags: ["MATLAB", "Simulink", "Control Systems", "Drone"],
    img: `${prefix}/assets/project_img/dummy_project.jpg`,
    demo: "https://github.com/MrSubham08",
    github: "https://github.com/MrSubham08",
  },
];

export default allProjects;
