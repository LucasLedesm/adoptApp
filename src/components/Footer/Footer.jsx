import React from 'react'
import { Icon } from '@iconify/react';


const Footer = () => {
  return (
    <div>
      {/* -- Remove the container if you want to extend the Footer to full width. -- */}
      <div className="container my-5 ">

        <footer className="containerF text-center text-lg-start text-white">
          <div className="container p-4">
            <div className="row my-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "150px", height: "150px;" }}>
                  <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt=""
                    loading="lazy" />
                </div>

                <p className="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <Icon icon="dashicons:pets" />
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <Icon icon="dashicons:pets" />
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>

              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ulF">
                <h5 className="text-uppercase mb-4 titleF">Animals</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      When your pet is missing</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      Recently found</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      How to adopt?</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      Pets for adoption</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      Material gifts</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      Help with walks</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      Volunteer activities</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ulF">
                <h5 className="text-uppercase mb-4 titleF">Info</h5>

                <ul className="list-unstyled ">
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      General information</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      About the shelter</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      Statistic data</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      Job</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      Tenders</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white"><Icon icon="dashicons:pets" />
                      Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 ulF mb-md-0">
                <h5 className="text-uppercase mb-4 titleF">Contact</h5>

                <ul className="list-unstyled">
                  <li>
                    <p><Icon icon="bx:map" />
                      Warsaw, 57 Street, Poland</p>
                  </li>
                  <li>
                    <p><Icon icon="fa-brands:whatsapp" />
                      + 01 234 567 89</p>
                  </li>
                  <li>
                    <p><Icon icon="mdi:gmail" />contact@example.com</p>
                  </li>
                </ul>
              </div>

            </div>

          </div>


          <div className="text-center p-3" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default Footer