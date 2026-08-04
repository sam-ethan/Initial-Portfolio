import styles from "../styles/Navbar.module.css"
function App() {
   return(
    <>
    <nav className={styles.navBar}>
        <div className="styles.logo">
            <h1>Shankar<span style={{color:"orange"}}>.</span></h1>
        </div>
            <ul className={styles.navLinks}>
                   <li>
                    <button
                            onClick={() =>
                                document.getElementById("About").scrollIntoView({
                                behavior: "smooth",
                                })
                            }
                            >
                            Home
                            </button>
                    </li> 
                    <li>
                     <button
                            onClick={() =>
                                document.getElementById("About").scrollIntoView({
                                behavior: "smooth",
                                })
                            }
                            >
                            About
                            </button>
                    </li> 
                    <li>
                    <button
                            onClick={() =>
                                document.getElementById("Skills").scrollIntoView({
                                behavior: "smooth",
                                })
                            }
                            >
                            Skills
                            </button>
                    </li> 
                    <li>
                    <button
                            onClick={() =>
                                document.getElementById("Project").scrollIntoView({
                                behavior: "smooth",
                                })
                            }
                            >
                            Project
                            </button>
                    </li> 
                    <li>
                     <button
                            onClick={() =>
                                document.getElementById("Experience").scrollIntoView({
                                behavior: "smooth",
                                })
                            }
                            >
                            Experience
                            </button>
                    </li> 
                    <li>
                    <button
                            onClick={() =>
                                document.getElementById("Footer").scrollIntoView({
                                behavior: "smooth",
                                })
                            }
                            >
                            Footer
                            </button>
                    </li> 
            </ul>
            <button onClick={() =>
                                document.getElementById("Footer").scrollIntoView({
                                behavior: "smooth",
                                })
                            } className={styles.Btn}>Hire Me</button>
        
    </nav>
    </>
   )

}

export default App;