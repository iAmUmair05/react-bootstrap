import React from 'react'
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <section className="section footer bg-warning text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h5>About our Company</h5>
                    <hr/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vero distinctio quisquam, nihil doloribus, assumenda autem enim tempora pariatur quos eius minima! Ad excepturi consequuntur nobis ea repudiandae expedita quo molestiae optio? Dicta, excepturi!</p>
                </div>
                <div className="col-md-4">
                    <h6>Links</h6>
                    <hr/>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/">About</Link></div>
                    <div><Link to="/">Contact</Link></div>
                    <div><Link to="/">Blog</Link></div>
                </div>
                <div className="col-md-4">
                    <h5>Contact information</h5>
                    <hr/>
                    <div><p className='text-white mb-1'>Faisal Town, Lahore</p></div>
                    <div><p className='text-white mb-1'>03124652096</p></div>
                    <div><p className='text-white mb-1'>Hamadumair33@gmail.com</p></div>
                </div>
            </div>
        </div>
    </section>
  )
}
