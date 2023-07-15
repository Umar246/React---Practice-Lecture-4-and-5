import React, { useState } from 'react'

export default function Login() {

    
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');


  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('userName is : ', userName)
        console.log('userPassword is : ', userPassword)

        if (userName.length < 3) {
            alert('Enter Your Name Correctly')
            return
        }
        if (userPassword.length < 6) {
            alert('At Least 6 Character Password')
            return
        }

      
    }

   
 
    return (
      
        <div className="py-5">
        <div className="container ">
            <div className="row">
                <div className="col col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                    <div className="card p-2 p-md-3 p-lg-4">
                        <div className="h2 text-center text-primary mb-4">Login Page</div>


                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="text" placeholder='Enter Your Name' className='form-control' onChange={(e) => {
                                        setUserName(e.target.value)
                                    }} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="password" placeholder='Enter Your Password' className='form-control ' onChange={(e) => {
                                        setUserPassword(e.target.value)
                                    }} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col text-center">
                                    <button className='btn btn-primary w-100'>Login</button>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>


   
    )
}
