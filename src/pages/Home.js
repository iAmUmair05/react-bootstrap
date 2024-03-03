import React from 'react';
import Slider from '../includes/Slider';
import {Link} from "react-router-dom";
import Vmc from './include/Vmc';
import Service1 from "../images/slider1.jpg"
import Service2 from "../images/slider2.jpg"
import Service3 from "../images/slider3.jpg"
import Contacts from './Contacts';

export default function Home() {
  return (
    <div>
    <section className='section'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className='main-heading'>IT Company</h3>
            <div className="underline mx-auto"></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ducimus nobis officiis illum eveniet alias, eaque tempore enim fuga praesentium magni officia sequi hic? Illum impedit, facere cum libero ipsum nesciunt cumque nihil non magni, commodi unde, error exercitationem vitae!
            </p>
            <Link to="/about" className="btn btn-warning shadow"> Read more</Link>
          </div>

        </div>
      </div>
        
    </section>

    {/* our mission vision */}

    <Vmc/>
{/* our services */}
<section className='section border-top p-4'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h3 className='main-heading'>Our Services</h3>
            <div className="underline mx-auto"></div>

          </div>
          <div className="col-md-4">
            <div className='card shadow p-3'>

              <img src="https://source.unsplash.com/380x260/?it,headphone" className="w-100 rounded border-bottom" />
            <div className='card-body'>
            </div>
            <h5>Service 1</h5>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi non ab, rem mollitia consectetur laudantium, debitis eligendi quos laborum labore consequatur quo excepturi, fugit doloremque illo tempore quae ipsum animi velit nulla minima!</p>
            <Link to="#" className="btn btn-info shadow"> Read more</Link>
            </div>
            

        </div>

        <div className="col-md-4">
            <div className='card shadow p-3'>

              <img src="https://source.unsplash.com/380x260/?it,keyboard" className="w-100 rounded border-bottom" />
            <div className='card-body'>
            </div>
            <h5>Service 2</h5>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi non ab, rem mollitia consectetur laudantium, debitis eligendi quos laborum labore consequatur quo excepturi, fugit doloremque illo tempore quae ipsum animi velit nulla minima!</p>
            <Link to="#" className="btn btn-info shadow"> Read more</Link>
            </div>
            

        </div>

        <div className="col-md-4">
            <div className='card shadow p-3'>

              <img src="https://source.unsplash.com/380x260/?it,iphone" className="w-100 border-bottom rounded" />
            <div className='card-body'>
            </div>
            <h5>Service 3</h5>
            <div className="underline"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi non ab, rem mollitia consectetur laudantium, debitis eligendi quos laborum labore consequatur quo excepturi, fugit doloremque illo tempore quae ipsum animi velit nulla minima!</p>
            <Link to="#" className="btn btn-info shadow"> Read more</Link>
            </div>
            

        </div>
      </div>
 </div>       
    </section>
    <Contacts/>
    </div>
  )
}