import Body from "../Body"
import MenuBar from "../MenuBar"

export default function Home(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <MenuBar/>
                <Body/>
            </div>
        </div>
        </>
    )
}