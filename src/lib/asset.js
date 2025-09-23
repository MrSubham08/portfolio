// src/lib/images.js
const prefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const images = {
  avatar: `${prefix}/assets/avatar.png`,
  dummyCert: `${prefix}/assets/certificate/dummy_cert.png`,
  dummyProject: `${prefix}/assets/project_img/dummy_project.jpg`,
};

export default images;