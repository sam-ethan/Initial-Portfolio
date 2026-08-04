import design from "../styles/Project.module.css"
function Project() {
    return(
        <>
        <div  id="Project"className={design.container}>
            <div className={design.title}>
                    <h1 ><span style={{color:"white"}}>My</span> <span style={{color:"#FF7A29"}}>Projects</span></h1>
                    <p ><span style={{color:"#7397B8"}}>Things I've built while learning and working</span></p>
            </div>
                      <div className={design.cards}>
                        

                <div className={design.cardsDesign}>
                      <a href="https://github.com/sam-ethan/EcomMicro-Microservices-Ecommerice-Apis-" target="_blank" style={{ textDecoration: "none",color: "white"}}>
                    <h2>EcomMicro</h2>
                    <p ><span style={{color:"#7397B8"}}>Microservices-based e-commerce backend using Node.js, Express.js and MongoDB, with separate Register, Login and Order services behind an API Gateway. JWT authentication and bcrypt password hashing for secure access.</span></p>
                    <div className={design.button}>
                    <p>Microservices</p>
                    <p>proxy-middleware</p>
                    <p>jwt</p>
                    <p>bcrypt</p>
                    </div>
                    </a>
                </div>
                
                <div className={design.cardsDesign}>
                     <a href="https://github.com/sam-ethan/Chat-Application" target="_blank" style={{ textDecoration: "none",color: "white"}}>
                    <h2>Real-Time Chat Application</h2>
                    <p ><span style={{color:"#7397B8"}}>Real-time chat app built with Socket.IO for instant messaging and media sharing — hands-on practice with event-driven architecture and backend development in Node.js.</span></p>
                    <div className={design.button}>
                    <p>Node.js</p>
                    <p>Socket.io</p>
                    <p>Mongodb</p>
                    </div>
                    </a>
                    
                </div>
                <div className={design.cardsDesign}>
                     <a href="https://github.com/sam-ethan/UserAuthMongoDB" target="_blank"  style={{ textDecoration: "none",color: "white"}}>
                    <h2>UserAuthMongoDB</h2>
                    <p ><span style={{color:"#7397B8"}}>Secure user authentication system using Node.js and MongoDB covering registration, login, authorization and database integration.</span></p>
                    <div className={design.button}>
                    <p>Node.js</p>
                    <p>Mongodb</p>
                    <p>Auth</p>
                    <p>Jwt</p>
                    <p>Bcrypt</p>
                    </div>
                    </a>
                </div>
                <div className={design.cardsDesign}>
                    <h2>Full Stack(Ai Focused Projects)</h2>
                    <p ><span style={{color:"#7397B8"}}>Developed and deployed AI-powered productivity tools: Job Application Tracker, Expense Tracker, Mock Interview Q&A, and Logical Programming Practice. All are live and built for my personal daily use.</span></p>
                    <div className={design.button}>
                    <p ><a href="https://sam-ethan.github.io/Claude-Job-Application-Content-Template/" target="_blank" style={{ textDecoration: "none",color: "white"}}>Job Apply Content</a> </p>
                    <p><a href=" https://sam-ethan.github.io/Claude-Built-Expense-Tracker-Personal-Use-/" target="_blank"  style={{ textDecoration: "none",color: "white"}}>Expense Tracker</a> </p>
                    <p><a href=" https://sam-ethan.github.io/Claude-Logical-Programs-Collection-Part-1/" target="_blank"  style={{ textDecoration: "none",color: "white"}}>Logical Program Practice</a> </p>
                    <p><a href="  https://sam-ethan.github.io/Backend-Interview-Preparation-Q-A-Curated-with-Claude-AI-/" target="_blank"  style={{ textDecoration: "none",color: "white"}}>Q and A Practice</a> </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Project;