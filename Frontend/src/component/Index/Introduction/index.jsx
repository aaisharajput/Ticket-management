import styles from './style.module.css'
import getRoute from "../../../server"
import { Link } from 'react-router-dom'
export default function Intro(){
    return(
        <div className="container-fluid pl-5">
            <div className={`row ${styles.intro} flex-column-reverse flex-md-row`}>
                <div className={`col-12 col-md-6 ${styles.div}`}>
                    <p className={styles.p}>
                    <h1>Welcome <span className={styles.span}>To <br/></span></h1><h3>TicketService</h3><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    A rem enim iusto impedit vitae aspernatur perferendis ad, incidunt magnam consequuntur culpa omnis molestias.
                    Dolor obcaecati praesentium harum impedit sit fugit.<br/><br/>
                    <Link to="/signup"><button className='btn btn-primary'>Register Now</button></Link>
                    <br/><br/>
                    <i className={`${styles.i} ${styles.facebook} fa-brands fa-facebook`}></i><i className={`${styles.i} ${styles.youtube} fa-brands fa-square-youtube`}></i>
                    <i className={`${styles.i} ${styles.linkedin} fa-brands fa-linkedin`}></i><i className={`${styles.i} ${styles.instagram} fa-brands fa-instagram`}></i><i className={`${styles.i} ${styles.twitter} fa-brands fa-twitter`}></i>
      
                    </p>
                   
                </div>
                <div className="col-12 col-md-6">
                    <img src={getRoute("/background.png")} className={styles.img}></img>
                </div>
            </div>
    </div>
    )
}