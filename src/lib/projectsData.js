// Central source of all project data
// Add new projects here — homepage shows first 3, all-projects page shows everything.

const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const allProjects = [
  {
    title: "Vehicle Record System",
    subtitle: "Smart access control using computer vision.",
    description: "Built real-time vehicle detection and License Plate Recognition (LPR) with YOLOv8 and OpenCV, featuring a live Flask dashboard for automated entry/exit tracking.",
    tags: ["Python", "YOLOv8", "OpenCV", "Flask", "SQLite"],
    img: `${prefix}/assets/project_img/vehicle_record.png`,
    demo: "https://github.com/MrSubham08/vehicle-records-system",
    github: "https://github.com/MrSubham08/vehicle-records-system",
  },
  {
    title: "FaceAttend — Face Recognition Attendance",
    subtitle: "AI-powered smart attendance system using real-time face recognition.",
    description: "AI-powered smart attendance system with real-time face recognition. Built webcam-based enrollment, face-matching attendance marking, admin analytics dashboard, and face-based credential recovery using 128-d facial encodings.",
    tags: ["Python", "Flask", "OpenCV", "face_recognition", "SQLite", "JavaScript"],
    img: `${prefix}/assets/project_img/faceattend.mp4`,
    demo: "https://face-recognition-attendance-system-xr13.onrender.com",
    github: "https://github.com/MrSubham08/Face-Recognition-Attendance-System",
  },
  {
    title: "Scientific Calculator (Java Swing)",
    subtitle: "Modern desktop scientific calculator with advanced math operations.",
    description: "A desktop scientific calculator using Java Swing. Features basic and advanced math operations (√, x², power), a dark UI, keyboard input, expression display, and history tracking. Packaged as a .exe.",
    tags: ["Java", "Swing", "Desktop App"],
    img: `${prefix}/assets/project_img/scientific_calc.png`,
    demo: "https://github.com/MrSubham08/Scientific-Calculator-Java/releases",
    github: "https://github.com/MrSubham08/Scientific-Calculator-Java",
  },
  {
    title: "Adaptive Notch Filtering",
    subtitle: "Dynamic interference suppression for cognitive radio networks.",
    description: "Designed and implemented an adaptive differential filtering technique simulated in MATLAB to dynamically suppress interference in cognitive radio networks.",
    tags: ["MATLAB", "Signal Processing", "Cognitive Radio"],
    img: `${prefix}/assets/project_img/dummy_project.jpg`,
    demo: "https://github.com/MrSubham08",
    github: "https://github.com/MrSubham08",
  }
];

export default allProjects;
