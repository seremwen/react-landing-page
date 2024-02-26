import React from 'react'

const Header = () => {
  return (
    <section class="hero-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-5">
                <div class="mt-md-4">
                    <div>
                        <span class="badge badge-danger badge-pill">New</span>
                        <span class="text-white-50 ml-1">Welcome to new react landing page</span>
                    </div>
                    <h2 class="text-white font-weight-normal mb-4 mt-3 hero-title">
                        Responsive React Landing Page Template
                    </h2>

                    <p class="mb-4 font-16 text-white-50">Designed this landing page as part of learning react.</p>

                    <a href="#nhasi" target="_blank" class="btn btn-success">Preview <i
                            class="mdi mdi-arrow-right ml-1"></i></a>
                </div>
            </div>
            <div class="col-md-5 offset-md-2">
                <div class="text-md-right mt-3 mt-md-0">
                    <img src="assets/images/startup.svg" alt="" class="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Header
