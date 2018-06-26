import React, { Component } from 'react';
// import 'font-awesome/css/font-awesome.min.css';

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small mdb-color pt-4 mt-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left mt-3 pb-3">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
              <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <hr class="w-100 clearfix d-md-none"/>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p><a href="#!">MDBootstrap</a></p>
              <p><a href="#!">MDWordPress</a></p>
              <p><a href="#!">BrandFlow</a></p>
              <p><a href="#!">Bootstrap Angular</a></p>
            </div>

            <hr class="w-100 clearfix d-md-none"/>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p><a href="#!">Your Account</a></p>
              <p><a href="#!">Become an Affiliate</a></p>
              <p><a href="#!">Shipping Rates</a></p>
              <p><a href="#!">Help</a></p>
            </div>

            <hr class="w-100 clearfix d-md-none"/>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i class="fa fa-home mr-3"></i> New York, NY 10012, US</p>
              <p><i class="fa fa-envelope mr-3"></i> info@gmail.com</p>
              <p><i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fa fa-print mr-3"></i> + 01 234 567 89</p>
            </div>


          </div>

          <hr/>

          <div class="row d-flex align-items-center">

            <div class="col-md-8 col-lg-8">

              <p class="text-center text-md-left">© 2018 Copyright: <a href="https://mdbootstrap.com/bootstrap-tutorial/"><strong> MDBootstrap.com</strong></a></p>

            </div>

            <div class="col-md-4 col-lg-4 ml-lg-0">

              <div class="text-center text-md-right">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fa fa-facebook"></i></a></li>
                  <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fa fa-twitter"></i></a></li>
                  <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fa fa-google-plus"></i></a></li>
                  <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;
