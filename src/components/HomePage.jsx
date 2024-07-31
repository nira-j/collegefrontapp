import react from 'react'
import college1 from '../images/university3.jpg'
import college2 from '../images/university6.jpg'
import college3 from '../images/university5.jpg'
import logo from '../images/univlogo.jpg'

export default function HomePage(props) {

    const img_dim = {
        'heigth': '100%',
        'heigth': '80%',
    }

    return (
        <>
            <nav style={{ 'height': '120px' }} className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <img src={logo} alt="" style={{ 'height': '100px' }} />
                            <span><h4>XYZ college, place</h4></span>
                        </div>
                    </div>
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item lh-1 me-3">
                            <span><button type="button" class="btn btn-sm rounded-pill btn-success" onClick={props.openSigninModal}>Signin</button></span>
                        </li>
                        <li className="nav-item lh-1 me-3">
                            <span><button type="button" class="btn btn-sm rounded-pill btn-primary" onClick={props.openSignupModal}>Signup</button></span>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='row mx-2'>
                <div className='col-md-9'>
                    <div className="col-md" style={{ 'width': '95%', 'heigth': '600px', 'margin': 'auto', 'object-fit': 'cover' }}>

                        <div id="carouselExample" className="carousel slide mt-3" data-bs-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carouselExample" data-bs-slide-to="0" className=""></li>
                                <li data-bs-target="#carouselExample" data-bs-slide-to="1" className=""></li>
                                <li data-bs-target="#carouselExample" data-bs-slide-to="2" className="active" aria-current="true"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img style={img_dim} className="d-block w-100" src={college1} alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>First slide</h3>
                                        <p>Eos mutat malis maluisset et, agam ancillae quo te, in vim congue pertinacia.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img style={img_dim} className="d-block w-100" src={college2} alt="Second slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Second slide</h3>
                                        <p>In numquam omittam sea.</p>
                                    </div>
                                </div>
                                <div className="carousel-item active">
                                    <img style={img_dim} className="d-block w-100" src={college3} alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Third slide</h3>
                                        <p>Lorem ipsum dolor sit amet, virtute consequat ea qui, minim graeco mel no.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                
                  <h6 class="mt-2 text-muted">Notifications >>>>>></h6>
                  <div class="card mb-4">
                    <ul class="list-group list-group-flush"> 
                      <li class="list-group-item">Cras justo odio Cras justo odio Cras justo odio Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in Cras justo odio Cras justo odio Cras justo odio Cras just</li>
                      <li class="list-group-item">Vestibulum at eros Cras justo odio Cras justo odio Cras justo odio Cras just</li>
                    </ul>
                  </div>
                
                </div>
            </div>

            <div className='mb-5 mt-5' style={{ 'text-align': 'center' }}>
                <h1>Explore our programs</h1>
            </div>
            <div className="row mb-5 mx-3">
                <div className="col-md-6 col-lg-3 mb-3">
                    <div className="card h-100">
                        <img className="card-img-top" src={college3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="javascript:void(0)" class="btn btn-outline-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                    <div className="card h-100">
                        <img className="card-img-top" src={college3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="javascript:void(0)" class="btn btn-outline-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                    <div className="card h-100">
                        <img className="card-img-top" src={college3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="javascript:void(0)" class="btn btn-outline-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                    <div className="card h-100">
                        <img className="card-img-top" src={college3} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="javascript:void(0)" class="btn btn-outline-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}