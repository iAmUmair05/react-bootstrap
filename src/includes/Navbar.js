import React from 'react';
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">My Website</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
           <Link to="/" class="nav-link active hover-link px-4">Home</Link>
        </li>
                <li class="nav-item">
           <Link to="/contact" class="nav-link active hover-link px-4">Contact Us</Link>
        </li>
                <li class="nav-item">
           <Link to="/about" class="nav-link active hover-link px-4">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}