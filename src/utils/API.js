import profilePicture from "../../public/images/profile-picture.PNG";
import resume from "../../public/images/Zan Hong Mok - Resume.pdf"

const aboutPage = {
  name: "Zan Hong Mok",
  image: profilePicture,
  occupation: "Soon-to-be Full Stack Developer",
  age: parseInt(new Date().getFullYear()) - 1992,
  address: "Unit 205, 1 Post Parade, St Clair, SA 5011",
  POB: "Kuala Lumpur, Malaysia",
  education: "Bachelor of Engineering (Mechanical and Sustainable Energy)",
  phone: "+61 411 857 714",
  email: "mokzanhong92@hotmail.com",
  resume: resume
}

export default {
  aboutPage
}