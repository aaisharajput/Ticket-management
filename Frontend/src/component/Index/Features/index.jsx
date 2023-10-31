import getRoute from "../../../server"
import styles from './style.module.css'

export default function Feature(){
    return(
        <>
            <div className="row text-center">
                <div className="col-12 col-md-12">
                    <h2>Features</h2>    
                </div>
            </div>
            
            <div className="row p-2">
                <div className="col-12 col-md-6">
                    <h4>A Shared Inbox </h4>
                    <p className="pt-3">Customers can have a variety of queries that can be put into various categories like support, help, billing, etc.
                    An ideal ticketing inbox comes with an email-like interface. <br/>
                    This can further reduce the overall time taken to understand the tool and solve tickets, thereby increasing the efficiency of the whole process.
                    </p>
                    
                </div>
                <div className="col-12 col-md-6">
                    <img src={getRoute('/track.jpg')} className={styles.img}/>
                </div>
            </div>

            <div className="row p-2 flex-column-reverse flex-md-row">
                <div className="col-12 col-md-6 text-md-center">
                    <img src={getRoute('/track.jpg')} className={styles.img}/>
                </div>
                <div className="col-12 col-md-6">
                    <h4>Encourage Self-Service With a Knowledge Base</h4>
                    <p className="pt-3">According to a Microsoft study, 90% of respondents said they expect online businesses to offer dedicated self-service portals.
                    A support ticket management system allows you to create an online knowledge base to promote self-service. 
                    Having user guides, product manuals, and FAQs enable customers to find answers instantly, making them less dependent on your customer support agents. 
                    This reduces your ticket volume by a significant amount and helps you cut down on your support costs. 
                    </p>
                    
                </div>
            </div>

            <div className="row p-2">
                <div className="col-12 col-md-6">
                    <h4>Integrate Live Chat for Real-Time Assistance</h4>
                    <p className="pt-3">Modern customers demand instant assistance and faster responses from your team. 
                        But, email might not come in handy in this situation. <br/>
                        As an alternative, you can easily integrate your ticketing system with a live chat solution to enable real-time interactions with website visitors and customers. </p>
                    
                </div>
                <div className="col-12 col-md-6">
                    <img src={getRoute('/track.jpg')} className={styles.img}/>
                </div>
            </div>

            <div className="row p-2 flex-column-reverse flex-md-row">
                <div className="col-12 col-md-6 text-md-center">
                    <img src={getRoute('/track.jpg')} className={styles.img}/>
                </div>
                <div className="col-12 col-md-6">
                    <h4>Ticket Prioritization</h4>
                    <p className="pt-3">The ticketing system is designed to assign tickets to the most appropriate agents or departments based on predefined rules or manual selection. <br/>
                        Prioritization features enable categorizing tickets based on urgency or impact, ensuring prompt attention to critical issues.
                    </p>
                    
                </div>
            </div>

        </>
    )
}
