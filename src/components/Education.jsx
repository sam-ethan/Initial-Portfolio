import style from "../styles/Education.module.css";
function Education() {
    return(
        <>
            <div className={style.experience}>
                <h1><span style={{color:"#E8631A"}}>Education</span></h1>
                <h4 style={{color:"#7397B8"}}></h4>
                <div className={style.timeline}>
                    <div className={style.left}>
                        <div className={style.line}></div>    
                        <div className={style.dot}></div>  
                        
                    </div>
                   
                    <div className={style.right}>
                        <div className={style.work}>
                            <h3 style={{color:"white"}}>Bsc Computer Science</h3>
                            <p style={{color:"#FF7A29"}}>Madurai Institue Of Social Sciences   2021 – 2024</p>
                                <h4 style={{ color: "#C084FC" }}>CGPA : 8.15</h4>
                                
                          </div>
                        
                    </div>
                       
                </div>
            </div>
        </>
    )
}
export default Education;