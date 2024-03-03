import React from 'react';
import Slider1 from "../images/slider1.jpg"
import Slider2 from "../images/slider2.jpg"
import Slider3 from "../images/slider3.jpg"

export default function Slider() {
  return (
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active text-center">
      <img src="https://source.unsplash.com/1550x600/?it,laptop" class=" rounded mx-auto d-block" width="1350px" height="500px" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item text-center">
      <img src="https://source.unsplash.com/1550x600/?seo,social media" class="rounded mx-auto d-block" width="1350px" height="500px" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item text-center">
      <img src="https://source.unsplash.com/1550x600/?table,laptop" class=" rounded mx-auto d-block" width="1350px" height="500px" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
