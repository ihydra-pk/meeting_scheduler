import React from 'react'

export default function Footer() {
  return (
    <>
     <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="https://www.facebook.com/JSWGroupOfficial" className="me-4 text-reset">
            <i class="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com/TheJSWGroup" className="me-4 text-reset">
            <i class="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/jsw.group/" className="me-4 text-reset">
            <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/jswgroup/" className="me-4 text-reset">
            <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/c/JSWGroup" className="me-4 text-reset">
            <i class="bi bi-youtube"></i>
            </a>
            
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <img src="logo.png" alt="logo" width={70} />
                </h6>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  BUSINESSES
                </h6>
                <p>
                  <a href="https://www.jsw.in/groups/overview-steel" target="_blank" className="text-reset">Steel</a>
                </p>
                <p>
                  <a href="https://www.jsw.in/groups/overview-energy" target="_blank" className="text-reset">Energy</a>
                </p>
                <p>
                  <a href="https://www.jswcement.in/" target="_blank" className="text-reset">Paints</a>
                </p>
                <p>
                  <a href="https://www.jswpaints.in/" target="_blank" className="text-reset">Cement</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="https://www.jsw.in/groups/about-groups" target="_blank" className="text-reset">About us</a>
                </p>
                <p>
                  <a href="https://www.jsw.in/groups/contact-us" target="_blank" className="text-reset">Contact</a>
                </p>
                <p>
                  <a href="https://www.jsw.in/people/students-graduates" target="_blank"  className="text-reset">Students & Graduates</a>
                </p>
                <p>
                  <a href="https://www.jswsports.in/" target="_blank" className="text-reset">Sports </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i className="fas fa-home me-3" />Bandra Kurla Complex,
                  Mumbai 400051</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  contact@jsw.in
                </p>
                <p><i className="fas fa-phone me-3" /> 1800 225 225</p>
                <p><i className="fas fa-print me-3" /> 1800 266 266</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          <span>Made with  <i class="bi bi-heart-fill"></i>  by Pawan Ravish</span>&#160;&#160;
          
        </div>
        {/* Copyright */}
      </footer></>
  )
}

