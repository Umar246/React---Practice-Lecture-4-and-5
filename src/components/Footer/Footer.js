import React from 'react'

export default function Footer() {

    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer>
    <div className="container">
        <div className="row">
            <div className="col">
                <p className="text-center text-white mb-0 p-1"> &copy; {year}. All Rights Reserved </p>
            </div>
        </div>
    </div>
    </footer>
  )
}
