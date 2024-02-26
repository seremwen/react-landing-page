import React from 'react'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg py-lg-3 navbar-dark">
    <div class="container">

  
        <a href="index.html" class="navbar-brand mr-lg-5">
            <img src="assets/images/logo.png" alt="" class="logo-dark" height="18" />
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i class="mdi mdi-menu"></i>
        </button>

      
        <div class="collapse navbar-collapse" id="navbarNavDropdown">


            <ul class="navbar-nav mr-auto align-items-center">
                <li class="nav-item mx-lg-1">
                    <a className="nav-link active" href="#m">Home</a>
       
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#features">Features</a>
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#pricing">About Us</a>
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#faq">FAQs</a>
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#clients">Clients</a>
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>

            
            <ul class="navbar-nav ml-auto align-items-center">
                <li class="nav-item mr-0">
                    <a href="#https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/" target="_blank" class="nav-link d-lg-none">Purchase now</a>
                    <a href="#https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/" target="_blank" class="btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex">
                        <i class="mdi mdi-basket mr-2"></i> Buy Now
                    </a>
                </li>
            </ul>

        </div>
    </div>
</nav>
  )
}

export default NavBar
