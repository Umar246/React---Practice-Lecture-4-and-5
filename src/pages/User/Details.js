import React from 'react'


export default function Details() {
  return (
    <div className="container my-4 ">
        <div className="row">
            <div className="col col-md-4 ">
                <div className="card email p-3 p-md-4 mb-2 mb-md-0">
                <h3 className='mb-3'>Email</h3>
                <a href="mailto:uj2849@gmail.com" target='_blank' id='myEmail'>uj@849@gmail.com</a>
                </div>
            </div>
            <div className="col col-md-4">
                <div className="card whatsapp p-3 p-md-4  mb-2 mb-md-0">
                <h3 className='WhatsApp'>WhatsApp</h3>
            <a href="https://wa.me/923079728937" target='_blank' rel='noopener noreferrer' id='myNum'>03 123 456 789 </a>
                </div>
            </div>
            <div className="col adddress col-md-4">
                <div className="card p-3 p-md-4 mb-2 mb-md-0">
               <h3 className='mb-3'>Address</h3>
            <a href="https://goo.gl/maps/waDjH6PJhyowJAgB6" id='address' target='_blank'>Saylani House, 3rd Floor, Factory Area</a>
                </div>
            </div>
        </div>
    </div>
  )
}
