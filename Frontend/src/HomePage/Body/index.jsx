import styles from './style.module.css'
export default function Body(){
    return(
        <>
        <div className={`${styles.body} col-10 col-md-10`}>
            <div className='row sticky-top bg-light p-3'>
                <div className='col-3 col-md-3 text-primary'> <h6>Customer</h6></div>
                <div className='col-3 col-md-3 text-primary'> <h6>Message</h6></div>
                <div className='col-3 col-md-3 text-primary'> <h6>Assign To</h6></div>
                <div className='col-3 col-md-3 text-primary'> <h6>Priority</h6></div>
                <div className='col-12 col-md-12'><hr/></div>
            </div>
            <div className='row p-3'>
                <div className='col-3 col-md-3'> <h6>user1</h6></div>
                <div className='col-3 col-md-3'> <h6>Message1</h6></div>
                <div className='col-3 col-md-3'> <h6>department1</h6></div>
                <div className='col-3 col-md-3'> <button className='btn btn-warning'>low</button></div>
                <div className='col-12 col-md-12'><hr/></div>
            </div>
            <div className='row p-3'>
                <div className='col-3 col-md-3'> <h6>user2</h6></div>
                <div className='col-3 col-md-3'> <h6>Message2</h6></div>
                <div className='col-3 col-md-3'> <h6>department2</h6></div>
                <div className='col-3 col-md-3'> <button className='btn btn-primary'>high</button></div>
                <div className='col-12 col-md-12'><hr/></div>
            </div>
            <div className='row p-3'>
                <div className='col-3 col-md-3'> <h6>user3</h6></div>
                <div className='col-3 col-md-3'> <h6>Message3</h6></div>
                <div className='col-3 col-md-3'> <h6>department3</h6></div>
                <div className='col-3 col-md-3'> <button className='btn btn-primary'>high</button></div>
                <div className='col-12 col-md-12'><hr/></div>
            </div>
            <div className='row p-3'>
                <div className='col-3 col-md-3'> <h6>user4</h6></div>
                <div className='col-3 col-md-3'> <h6>Message4</h6></div>
                <div className='col-3 col-md-3'> <h6>department4</h6></div>
                <div className='col-3 col-md-3'> <button className='btn btn-success'>medium</button></div>
                <div className='col-12 col-md-12'><hr/></div>
            </div>
            <div className='row p-3'>
                <div className='col-3 col-md-3'> <h6>user5</h6></div>
                <div className='col-3 col-md-3'> <h6>Message5</h6></div>
                <div className='col-3 col-md-3'> <h6>department5</h6></div>
                <div className='col-3 col-md-3'> <button className='btn btn-primary'>high</button></div>
                <div className='col-12 col-md-12'><hr/></div>
            </div>
            <div className='row p-3'>
                <div className='col-3 col-md-3'> <h6>user6</h6></div>
                <div className='col-3 col-md-3'> <h6>Message6</h6></div>
                <div className='col-3 col-md-3'> <h6>department6</h6></div>
                <div className='col-3 col-md-3'> <button className='btn btn-primary'>high</button></div>
                <div className='col-12 col-md-12'><hr/></div>
            </div>
            <div className='row p-3'>
                <div className='col-3 col-md-3'> <h6>user7</h6></div>
                <div className='col-3 col-md-3'> <h6>Message7</h6></div>
                <div className='col-3 col-md-3'> <h6>department7</h6></div>
                <div className='col-3 col-md-3'> <button className='btn btn-primary'>high</button></div>
                <div className='col-12 col-md-12'><hr/></div>
            </div>
            <div className='row p-3'>
                <div className='col-3 col-md-3'> <h6>user8</h6></div>
                <div className='col-3 col-md-3'> <h6>Message8</h6></div>
                <div className='col-3 col-md-3'> <h6>department8</h6></div>
                <div className='col-3 col-md-3'> <button className='btn btn-primary'>high</button></div>
                <div className='col-12 col-md-12'><hr/></div>
            </div>
        </div>
        </>
    )
}