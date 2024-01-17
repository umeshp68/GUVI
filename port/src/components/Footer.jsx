import "./Footer.css"


import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"



const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">

                <div className="location">
                    <FaHome size ={20} style={{ color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p> 9/1, Kumarasamy Layout, 1st Street,</p>
                        <p> Managalam Road, Parapalayam, Tirupur - 641604</p>

                    </div>

                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size ={20} style={{ color: "#fff", marginRight: "2rem"}} />
                            9944442304

                   </h4>
                
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size ={20} style={{ color: "#fff", marginRight: "2rem"}} />
umeshkec364@gmail.com
                   </h4>
                
                </div>


                <div className="right">
                    <h4>About Me</h4>
                    <p>Hi I'm Umesh learning full stack development in Guvi. 
                        And this is my portfolio, currently you are in.</p>

                    </div>
                    <div className="social">
                    <FaLinkedin size ={20} style={{ color: "#fff", marginRight: "2rem"}} />

                        
                    </div>
            </div>
<div className="right">
    </div>            
        </div>
    </div>
  )
}

export default footer