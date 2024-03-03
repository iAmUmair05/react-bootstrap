import React from 'react';
import Slider from '../includes/Slider';

export default function Contacts() {
  return (
    <div>
      {/* <section className="p-4 bg-warning">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact Us</h4>
            </div>
            <div className="col-md-8 my-auto">

            </div>
          </div>
        </div>
      </section> */}

      <section className="section">
        <div className="container mx-auto">
          <div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />

                  <div className="form-group">
                    <label className='mb-1'>Name</label>
                    <input type="text" className='form-control' name="" placeholder='Enter your name' />
                  </div>
                  <div className="form-group">
                    <label className='mb-1'>Email</label>
                    <input type="text" className='form-control' name="email" placeholder='Enter your email' />
                  </div>
                  <div className="form-group">
                    <label className='mb-1'>Phone No</label>
                    <input type="text" className='form-control' name="" placeholder='Enter your Phone No' />
                  </div>
                  <div className="form-group">
                    <label className='mb-1'>Message</label>
                    <textarea rows="3" className='form-control' placeholder='Write your concern'></textarea>
                  </div>

                  <div className="form-group py-3">
                    <button type="button" className='btn btn-info shadow w-100'>Submit</button>
                  </div>

                </div>
                <div className="col-md-6">

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


    </div>
  )
}