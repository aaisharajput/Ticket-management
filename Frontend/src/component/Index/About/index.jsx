import { Link } from "react-router-dom"
import getRoute from "../../../server"
import styles from './style.module.css'

export default function About(){
    return(

            <div className="row">
                <div className="col-12 col-md-12 text-center">
                    <h2>About Us</h2>    
                </div>
                <div className="col-12 col-md-6 text-md-center">
                    <img src={getRoute('/track.jpg')} className={styles.img}/>
                </div>
                <div className="col-12 col-md-6 pt-5">
                    <h4>Ticket Service</h4>
                    <p>A Ticket Sercice is a software used to create, organize, prioritize, and resolve customer support tickets. 
                        These tickets can be complaints or requests raised by your employees or your customers. 
                        Once a Ticket Sercice system receives an issue, it automatically converts it into a unique ticket and notifies your agents. 
                        They can either manually pick tickets or automate the entire ticket assignment process.</p>
                    <Link to="/about"><button className="btn btn-primary">Read more</button></Link>
                </div>
            </div>
 
    )
}

