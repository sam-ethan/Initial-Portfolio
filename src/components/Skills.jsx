import style from "../styles/Skills.module.css";

function Skills() {
    return (
        <>
            <div id="Skills" className={style.container}>
                <div><h1><span style={{color:"white"}}>My</span> <span style={{color:"#FF7A29"}}>Skills</span></h1></div>   
                <div className={style.frontend}>
                     <h1>Frontend Skills :</h1>
                    <div className={style.frontendCards}>
                        <div className={style.cards}>
                            <img src="/public/html5.svg" alt="html" />
                            <h3>Html</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/css3.svg" alt="html" />
                            <h3>Css</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/javascript.svg" alt="html" />
                            <h3>Js</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/bootstrap.svg" alt="html" />
                            <h3>Bootstrap</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/reactjs.svg" alt="html" />
                            <h3>ReactJs</h3>
                        </div>
                        
                    </div>
                </div>
                  <div className={style.frontend}>
                     <h1>Backend Skills :</h1>
                    <div className={style.frontendCards}>
                        <div className={style.cards}>
                            <img src="/public/nodejs.svg" alt="html" />
                            <h3>NodeJs</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/expressjs.svg" alt="html" />
                            <h3>ExpressJs</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/mongodb.svg" alt="html" />
                            <h3>mongodb</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/restapi.svg" alt="html" width="80px" />
                            <h3>RestApi</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/microservices.svg" alt="html"  width="80px"/>
                            <h3>microservices</h3>
                        </div>
                        
                    </div>  
                </div>
                <div className={style.frontend}>
                     <h1>Tools:</h1>
                    <div className={style.frontendCards}>
                        <div className={style.cards}>
                            <img src="/public/git.svg" alt="html" />
                            <h3>Git</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/github.svg" alt="html" />
                            <h3>Github</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/postman.svg" alt="html" />
                            <h3>Postman</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/vs.svg" alt="html" width="80px" />
                            <h3>Vscode</h3>
                        </div>
                       
                        
                    </div>  
                </div>
                <div className={style.frontend}>
                     <h1>AI Tools:</h1>
                    <div className={style.frontendCards}>
                        <div className={style.cards}>
                            <img src="/public/chatgpt.svg" alt="html" width="80px"/>
                            <h3>Chatgpt</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/gemini.svg" alt="html" width="80px"/>
                            <h3 style={{marginTop:"60px"}}>gemini</h3>
                        </div>
                        <div className={style.cards}>
                            <img src="/public/claude.svg" alt="html" width="80px" />
                            <h3 style={{marginTop:"10px"}}>Claude</h3>
                        </div>
                        
                       
                        
                    </div>  
                </div>
            </div>
        </>
    );
}

export default Skills;

