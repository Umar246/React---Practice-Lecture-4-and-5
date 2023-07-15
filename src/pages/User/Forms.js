import React, {useState} from 'react'


const initialState = {fullName:"", email:"", phone :"",city:"",message:""}


export default function Forms() {
// JS Code Is Here 
const [state, setState]= useState(initialState)

const handleChange =e=>{
setState ({...state,[e.target.name]: e.target.value})
}

const handleSubmit =(e)=>{
e.preventDefault();
let {fullName,email,phone,city,message}=state
fullName=fullName.trim();email=email.trim();phone=phone.trim();city=city.trim();message=message.trim()

if (fullName.length<3 ){return alert( 'Enter Name Correctly' )};


let data ={
    fullName,email,phone,city,message,
    status:"active",
    dateCreated : new Date().getTime(),
    id: Math.random().toString(36).slice(2)
}
console.log('Data =', data)

}

//JSX (HTML)
    return (
        <>
            <div className="form p-2 p-md-3 p-lg-5">
                <div className="container">
                    <form onSubmit={handleSubmit} >
                        <div className="row mb-3">
                            <div className="col col-md-6 ">
                                <input name='fullName'  type="text" placeholder='Full Name' className='form-control' onChange={handleChange}/>
                            </div>
                            <div className="col col-md-6 ">
                                <input name='email' type="email" placeholder='Email' className='form-control '  onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col col-md-6 ">
                                <input type="number" placeholder='Phone' className='form-control' name='phone' onChange={handleChange} />
                            </div>
                            <div className="col col-md-6 ">
                                <input type="text" name='city' placeholder='City' className='form-control '  onChange={handleChange} />
                            </div>
                        </div>


                        <div className="row mb-3">
                            <div className="col ">
                                <textarea name="message" id="message" placeholder='Your Message / Question / Querry' rows="4" className='form-control '  onChange={handleChange}></textarea>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col text-center">
                                <button className='btn btn-warning w-50'>Send Message</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

            {/* Map Showing */}

            <div className="container-fluid">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0911265568448!2d73.0887841!3d31.411615299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a79fdf865b%3A0x192e1cf2bfa21cd1!2sSaylani%20House%20Faisalabad!5e0!3m2!1sen!2s!4v1685229533372!5m2!1sen!2s" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100 mb-0'></iframe>
            </div>

        </>

    )
}
