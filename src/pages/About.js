import React from 'react';
import Vmc from './include/Vmc';
import Slider from '../includes/Slider';

export default function About() {
  return (
    <div>
      {/* <section className="p-4 bg-warning">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8 my-auto">
            </div>
          </div>
        </div>
      </section> */}
      
      <section className="section bg-c-ligt border-bottom">
        <div className="container">
          <h5 className='main-heading'>Our Company</h5>
          <div className="underline"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tenetur impedit iste quas nisi ducimus numquam non itaque odit beatae.</p>
        </div>
      </section>
      
    <Vmc/>
{/* our services */}

    </div>
  )
}