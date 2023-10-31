import styles from './style.module.css'
import getRoute from '../../server';

export default function Signup(props){

    const {msg,cnf,disabled,email,value,pswd,last,onChangeRole,onChangeLast,onChangeUser,onChangeEmail,onChangeCnf,onChangePswd,onClick}=props;
    return(
        <>
             <div>
            <section className={`${styles.section} pl-5`}>
                <div className="row">
                    <div className="col-12">
                        <div className={`${styles.card} card`} >
                            <div className="p-md-4">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 pl-5 order-2 order-lg-1">
                                        <h1 className={`${styles.h1} text-center mb-5 mt-4`}>Sign up</h1>
                                        <form >
                                            <div className="row">
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label">
                                                        First Name
                                                    </label>
                                                    <input name="first" value={value} onChange={onChangeUser} className="form-control" />

                                                </div>
                                                <div className="col text-left">
                                                    <label htmlFor="last`"  className="form-label">
                                                        Last Name
                                                    </label>
                                                    <input value={last} onChange={onChangeLast} name="last" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="email" className="form-label">
                                                        Email
                                                    </label>
                                                    <input  value={email} onChange={onChangeEmail} name="email" className="form-control" />

                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="role" className="form-label">
                                                        Department
                                                    </label>
                                                   
                                                    <select name="role" onChange={onChangeRole} className="form-control">
                                                        <option defaultValue disabled>Select Department</option>
                                                        <option value="Intern">Intern</option>
                                                        <option value="Operations management">Operations management</option>
                                                        <option value="Marketing management">Marketing management</option>
                                                        <option value="Human Resources">Human Resources</option>
                                                        <option value="Software Engineer">Software Engineer</option>
                                                        <option value="Account Manager">Account Manager</option>
                                                        <option value="Project manager">Project manager</option>
                                                        <option value="Management">Management</option>
                                                        <option value="Account Executive">Account Executive</option>
                                                        <option value="Marketing">Marketing</option>
                                                        <option value="Sales Management">Sales Management</option>
                                                        <option value="Information technology management">Information technology management</option>
                                                        <option value="Sales">Sales</option>
                                                        <option value="Accountant">Accountant</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="password" className="form-label">
                                                        Password
                                                    </label>
                                                    <input
                                                       value={pswd} onChange={onChangePswd}
                                                        name="password"
                                                        className="form-control"

                                                        type="password"
                                                    />

                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="repassword" className="form-label">
                                                        Confirm Password
                                                    </label>
                                                    <input
                                                       value={cnf} onChange={onChangeCnf}
                                                        name="repassword"
                                                        className="form-control"

                                                        type="password"
                                                    />

                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                            <div className='col-6 d-flex justify-content-center'><p className={`${styles.msg}`} id="wrong">{(msg!="")?msg:'' }</p></div>

                                                <div className="col-6 text-right actionButtons">
                                                    <input type='button' onClick={onClick} className={`${styles.register} btn`} value='Register' disabled={disabled} />
                                                </div>
                                                
                                            </div>
                                            <div className="row mt-3">
                                                <br />
                                                <div className="col text-right">
                                                    Already have an account? <a href="/login">Sign in</a>
                                                </div>
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src={getRoute('/secure.jpg')}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            
        </div>
        </>
    )
}
