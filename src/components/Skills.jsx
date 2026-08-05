import style from "../styles/Skills.module.css";

function Skills() {
    return (
        <>
            <div id="Skills" className={style.container}>
                <div>
                    <h1>
                        <span style={{ color: "white" }}>My</span>{" "}
                        <span style={{ color: "#FF7A29" }}>Skills</span>
                    </h1>
                </div>

                <div className={style.frontend}>
                    <h1>Frontend Skills :</h1>
                    <div className={style.frontendCards}>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}html5.svg`} alt="html" />
                            <h3>Html</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}css3.svg`} alt="css" />
                            <h3>Css</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}javascript.svg`} alt="javascript" />
                            <h3>Js</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}bootstrap.svg`} alt="bootstrap" />
                            <h3>Bootstrap</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}reactjs.svg`} alt="react" />
                            <h3>ReactJs</h3>
                        </div>
                    </div>
                </div>

                <div className={style.frontend}>
                    <h1>Backend Skills :</h1>
                    <div className={style.frontendCards}>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}nodejs.svg`} alt="nodejs" />
                            <h3>NodeJs</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}expressjs.svg`} alt="expressjs" />
                            <h3>ExpressJs</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}mongodb.svg`} alt="mongodb" />
                            <h3>MongoDB</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}restapi.svg`} alt="restapi" width="80px" />
                            <h3>RestApi</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}microservices.svg`} alt="microservices" width="80px" />
                            <h3>Microservices</h3>
                        </div>
                    </div>
                </div>

                <div className={style.frontend}>
                    <h1>Tools:</h1>
                    <div className={style.frontendCards}>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}git.svg`} alt="git" />
                            <h3>Git</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}github.svg`} alt="github" />
                            <h3>Github</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}postman.svg`} alt="postman" />
                            <h3>Postman</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}vs.svg`} alt="vscode" width="80px" />
                            <h3>Vscode</h3>
                        </div>
                    </div>
                </div>

                <div className={style.frontend}>
                    <h1>AI Tools:</h1>
                    <div className={style.frontendCards}>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}chatgpt.svg`} alt="chatgpt" width="80px" />
                            <h3>Chatgpt</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}gemini.svg`} alt="gemini" width="80px" />
                            <h3 style={{ marginTop: "60px" }}>Gemini</h3>
                        </div>
                        <div className={style.cards}>
                            <img src={`${import.meta.env.BASE_URL}claude.svg`} alt="claude" width="80px" />
                            <h3 style={{ marginTop: "10px" }}>Claude</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;