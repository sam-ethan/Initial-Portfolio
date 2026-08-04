import { Link } from "react-router-dom";
import styles from '../styles/About.module.css'

function About() {

    const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Shankar_Resume.pdf"; // Name after download
  link.click();
};


return(
    <>
    <div  id="About" className={styles.about_Main}>
        <div className={styles.image}>
               <img src="/profile.png" alt="profilePicture" />
        </div>
        <div className={styles.content}>
            <h4>Mern Stack Developer</h4>
            <h1>Hi, I'm Sangara Pandian</h1>
            <p>After completing my B.Sc. in Computer Science, I started as a Backend Trainer, 
                <br />teaching programming and database fundamentals. Along the way I built hands-on experience 
                <br/>through backend projects covering authentication, real-time systems, and microservices — plus a React.js 
                <br/>project that introduced me to frontend development. Now I'm growing as a MERN Stack Developer,
                <br/>buildin scalable and user-friendly web applications.</p>
            <div className={styles.card}>
                <div><p><span style={{color:"white",fontWeight:"bolder"}}>Email : </span><span style={{color:"#A9A6B8"}}>sankar@gmail.com</span></p></div>
                <div><p><span style={{color:"white",fontWeight:"bolder"}}>GitHub : </span><span style={{color:"#A9A6B8"}}>sangara pandian</span></p></div>
                <div><p><span style={{color:"white",fontWeight:"bolder"}}>Contact : </span><span style={{color:"#A9A6B8"}}>6383106300</span></p></div>
                <div><p><span style={{color:"white",fontWeight:"bolder"}}>Linkedin : </span><span style={{color:"#A9A6B8"}}><a href="https://www.linkedin.com/in/sangarapandian/    ">sangara pandian</a></span></p></div>
            </div>
              <div className={styles.Btn}>
                    <div  className={styles.Btn1}> <button onClick={() =>
                                document.getElementById("Footer").scrollIntoView({
                                behavior: "smooth",
                                })
                            } >Contact</button></div>
                    <div className={styles.Btn2}><button  onClick={downloadResume} >Resume Download</button></div>
              </div>
            </div>
    </div>
    </>
)
}
export default About;
