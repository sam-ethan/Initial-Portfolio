import style from "../styles/Footer.module.css";
function Footer() {
    return(
        <>
        <div id="Footer" className={style.footerMain}>
            <div className={style.footerContainer}>
                <div className={style.left}>
                    <h1> <span style={{color:"white"}}>Get In</span><span style={{color:"#E8631A"}}>Touch   </span></h1>
                    <p><span style={{color:"#918F9F"}}>Looking for a MERN Stack / Node.js Backend / Full Stack Developer role?<br /> I'd love to hear from you.</span> </p>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <h3>email</h3>
                            <h5>sankar16104@gmail.com</h5>
                        </div>
                        <div className={style.card}>
                             <h3>phone</h3>
                            <h5>6383106300</h5>
                        </div>
                        <div className={style.card}>
                             <h3>gitHub</h3>
                            <h5> <a href="https://github.com/sam-ethan"target="_blank" >gitHub Profile</a></h5>
                        </div>
                        <div className={style.card}>
                             <h3>LinkedIn</h3>
                            <h5><a href="https://www.linkedin.com/in/sangarapandian/" target="_blank">LinkedIn Profile</a></h5>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <form action="">
                        <input type="text"placeholder="your name"/><br />
                        <input type="text"placeholder="your email "/><br />
                        <textarea placeholder="your message" rows={5}/><br />
                        <button type="submit">send message</button>
                    </form>
                </div>
               
            </div>
            <hr style={{color:"white"}}/>     
            <div className={style.copyrights}>
                <div ><h1><span style={{color:"white"}}>SP <span style={{color:"#E8631A"}}>.</span></span></h1></div>
                <div><p style={{color:"#A9A693"}}>© 2026 Sangara Pandian. All Rights Reserved.</p></div>
                
            </div>
        </div>
        </>
    )
}
export default Footer;