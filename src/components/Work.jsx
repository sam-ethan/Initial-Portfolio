import style from "../styles/Work.module.css";
function Work() {
    return(
        <>
            <div  id="Experience"className={style.experience}>
                <h1><span style={{color:"white"}}>Work </span><span style={{color:"#E8631A"}}>Experience</span></h1>
                <h4 style={{color:"#7397B8"}}>Where I've worked and what I've learned</h4>
                <div className={style.timeline}>
                    <div className={style.left}>
                        <div className={style.line}></div>    
                        <div className={style.dot}></div>  
                        
                    </div>
                   
                    <div className={style.right}>
                        <div className={style.work}>
                            <h3 style={{color:"white"}}>Tehcnical Trainer</h3>
                            <p style={{color:"#FF7A29"}}>TechyAsylum • Sep 2024 – Oct 2025</p>
                                <h4 style={{ color: "#C084FC" }}>Technical Trainer</h4>
                                <ul style={{ color: "white" }}>
                                    <li>Designed course documentation, practical programs, assignments, and coding exercises for students.</li>
                                    <li>Delivered hands-on training in Core Java, Node.js, MySQL, MongoDB, HTML, CSS, JavaScript, and React.js.</li>
                                    <li>Mentored students, resolved technical doubts, and strengthened programming fundamentals.</li>
                                </ul>

                                <h4 style={{ color: "#C084FC" }}>Seminars & Presentations</h4>
                                <ul style={{ color: "white" }}>
                                    <li>Prepared professional PowerPoint presentations and technical seminar materials.</li>
                                    <li>Conducted seminars and workshops at colleges to introduce students to industry technologies.</li>
                                </ul>

                                <h4 style={{ color: "#C084FC" }}>Business Development</h4>
                                <ul style={{ color: "white" }}>
                                    <li>Personally visited colleges to promote training programs and build institutional partnerships.</li>
                                    <li>Presented courses to students and faculty, increasing awareness and enrollments.</li>
                                </ul>

                                <h4 style={{ color: "#C084FC" }}>HR & Recruitment</h4>
                                <ul style={{ color: "white" }}>
                                    <li>Sourced and contacted candidates through LinkedIn and Naukri.</li>
                                    <li>Coordinated interview scheduling and recruitment activities.</li>
                                </ul>

                                <h4 style={{ color: "#C084FC" }}>Digital Marketing</h4>
                                <ul style={{ color: "white" }}>
                                    <li>Created educational and promotional content for Instagram and other social platforms.</li>
                                    <li>Managed content publishing to improve engagement and brand visibility.</li>
                                </ul>

                                <h4 style={{ color: "#C084FC" }}>Full-Stack Development</h4>
                                <ul style={{ color: "white" }}>
                                    <li>Contributed to full-stack web application development using React.js, Node.js, Express.js, and MongoDB.</li>
                                    <li>Collaborated with developers, discussed requirements, and coordinated project execution.</li>
                                </ul>
                          </div>
                        
                    </div>
                       
                </div>
            </div>
        </>
    )
}
export default Work;