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
            <header style={{ 'height': '120px' }} className="layout-navbar align-items-center bg-navbar-theme" id="layout-navbar">
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center mx-5">
                            <img src={logo} alt="" style={{ 'height': '100px' }} />
                            <span><h4><u>XYZ college, place</u></h4></span>
                        </div>
                    </div>
                    <svg height="100" width="100">
                        <line x1="50" y1="0" x2="50" y2="100" style={{'stroke':'lightgray','stroke-width':'2'}} />
                    </svg>
                    <ul className="navbar-nav flex-row align-items-center ms-auto">

                    </ul>
                </div>
            </header>


            <nav className="navbar navbar-example navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbar-ex-3">
                        <div className="navbar-nav me-auto">
                            <a className="nav-item nav-link mx-4 active" href="javascript:void(0)">Home</a>
                            <a className="nav-item nav-link mx-4" href="#about">About</a>
                            <a className="nav-item nav-link mx-4" href="javascript:void(0)">Acedemics</a>
                            <a className="nav-item nav-link mx-4" href="javascript:void(0)">Admission</a>
                            <a className="nav-item nav-link mx-4" href="javascript:void(0)">Examination</a>
                            <a className="nav-item nav-link mx-4" href="javascript:void(0)">News & Events</a>
                            <a className="nav-item nav-link mx-4" href="#contact">Contact</a>
                            <a className="nav-item nav-link mx-4" onClick={props.openSigninModal}>Signin</a>
                            <a className="nav-item nav-link mx-4" onClick={props.openSignupModal} >Signup</a>
                        </div>
                    </div>
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







            <section id="about">

                <div className="col-lg-12 col-md-6 mx-3">
                    <h3 className="text-light fw-semibold">About Us</h3>
                    <div className="demo-inline-spacing mt-3">
                        <div className="list-group list-group-horizontal-md text-md-center">
                            <a className="list-group-item list-group-item-action active" id="home-list-item" data-bs-toggle="list" href="#history">History</a>
                            <a className="list-group-item list-group-item-action" id="profile-list-item" data-bs-toggle="list" href="#vision">Vision</a>
                            <a className="list-group-item list-group-item-action" id="messages-list-item" data-bs-toggle="list" href="#management">Management</a>
                            <a className="list-group-item list-group-item-action" id="messages-list-item" data-bs-toggle="list" href="#affiliation">Affiliation</a>
                            <a className="list-group-item list-group-item-action" id="settings-list-item" data-bs-toggle="list" href="#crest">Crest of the College</a>
                        </div>
                        <div className="tab-content px-0 mt-0">
                            <div className="tab-pane fade" id="history">
                                Donut sugar plum sweet roll biscuit. Cake oat cake gummi bears. Tart wafer wafer halvah
                                gummi bears cheesecake. Topping croissant cake sweet roll. Dessert fruitcake gingerbread
                                halvah marshmallow pudding bear claw cheesecake. Bonbon dragée cookie gummies. Pudding
                                marzipan liquorice. Sugar plum dragée cupcake cupcake cake dessert chocolate bar. Pastry
                                lollipop lemon drops lollipop halvah croissant. Pastry sweet gingerbread lemon drops topping
                                ice cream.
                                <a className="read-more" href="History">Read more<i className="fa fa-chevron-right"></i></a>
                            </div>
                            <div className="tab-pane fade" id="vision">
                                Muffin lemon drops chocolate chupa chups jelly beans dessert jelly-o. Soufflé gummies
                                gummies. Ice cream powder marshmallow cotton candy oat cake wafer. Marshmallow gingerbread
                                tootsie roll. Chocolate cake bonbon jelly beans lollipop jelly beans halvah marzipan danish
                                pie. Oat cake chocolate cake pudding bear claw liquorice gingerbread icing sugar plum
                                brownie. Toffee cookie apple pie cheesecake bear claw sugar plum wafer gummi bears
                                fruitcake.
                                <a className="read-more" href="History">Read more<i className="fa fa-chevron-right"></i></a>
                            </div>
                            <div className="tab-pane fade" id="management">
                                Ice cream dessert candy sugar plum croissant cupcake tart pie apple pie. Pastry chocolate
                                chupa chups tiramisu. Tiramisu cookie oat cake. Pudding brownie bonbon. Pie carrot cake
                                chocolate macaroon. Halvah jelly jelly beans cake macaroon jelly-o. Danish pastry dessert
                                gingerbread powder halvah. Muffin bonbon fruitcake dragée sweet sesame snaps oat cake
                                marshmallow cheesecake. Cupcake donut sweet bonbon cheesecake soufflé chocolate bar.
                                <a className="read-more" href="History">Read more<i className="fa fa-chevron-right"></i></a>
                            </div>
                            <div className="tab-pane fade active show" id="affiliation">
                                Marzipan cake oat cake. Marshmallow pie chocolate. Liquorice oat cake donut halvah jelly-o.
                                Jelly-o muffin macaroon cake gingerbread candy cupcake. Cake lollipop lollipop jelly brownie
                                cake topping chocolate. Pie oat cake jelly. Lemon drops halvah jelly cookie bonbon cake
                                cupcake ice cream. Donut tart bonbon sweet roll soufflé gummies biscuit. Wafer toffee
                                topping jelly beans icing pie apple pie toffee pudding. Tiramisu powder macaroon tiramisu
                                cake halvah.
                                <a className="read-more" href="History">Read more<i className="fa fa-chevron-right"></i></a>
                            </div>
                            <div className="tab-pane fade" id="crest">
                                Marzipan cake oat cake. Marshmallow pie chocolate. Liquorice oat cake donut halvah jelly-o.
                                Jelly-o muffin macaroon cake gingerbread candy cupcake. Cake lollipop lollipop jelly brownie
                                cake topping chocolate. Pie oat cake jelly. Lemon drops halvah jelly cookie bonbon cake
                                cupcake ice cream. Donut tart bonbon sweet roll soufflé gummies biscuit. Wafer toffee
                                topping jelly beans icing pie apple pie toffee pudding. Tiramisu powder macaroon tiramisu
                                cake halvah.
                                <a className="read-more" href="History">Read more<i className="fa fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="section-content clearfix">
                    <div id="news-carousel" className="news-carousel carousel slide">
                        <div className="carousel-inner">
                            <div className="item active" style={{ 'text-align': 'justify' }}>
                                <div className="col-md-4 news-item">
                                    <h2 className="title"><a href="news-single.html">History</a></h2>
                                    {/* <img className="thumb" src="assets/images/news/news-thumb-1.jpg" alt="" /> */}
                                    <p>St. Xavier's College, Ranchi, was started by the Ranchi Jesuit Society, on July 3,
                                        1944. Ever since 1889 and pre-independence era, when a number of secondary schools
                                        came into existence in Ranchi, the Society felt the need of starting a College.
                                    </p>
                                    <a className="read-more" href="History">Read more<i className="fa fa-chevron-right"></i></a>
                                </div>

                                <div className="col-md-4 news-item">
                                    <h2 className="title"><a href="news-single.html">Vision</a></h2>
                                    <p>St. Xavier College, Ranchi was started by the Ranchi Jesuits Society called (Society
                                        of Jesus) a Christian Religious Order founded by St. Ignatius Loyola in 1540. Since
                                        its foundation, the Jesuits have contributed in the field of education throughout
                                        the world. </p>
                                    <a className="read-more" href="VisionMission">Read more<i className="fa fa-chevron-right"></i></a>
                                    <img className="thumb" src="assets/images/news/news-thumb-2.jpg" alt="" />
                                </div>

                                <div className="col-md-4 news-item">
                                    <h2 className="title"><a href="news-single.html">Crest of the College</a></h2>
                                    <p>The crest of the college consists of three parts. IHS, the initial letters of the
                                        Greek words, Jesu, Huios, Soter – Jesus, Son, and Redeemer is the motto of the Society
                                        of Jesus. The little flower shows our aim to illumine the world and society.
                                    </p>

                                    <img className="thumb" src="assets/images/news/news-thumb-3.jpg" alt="" />
                                </div>

                            </div>

                            <div className="item" style={{ 'text-align': 'justify' }}>


                                <div className="col-md-4 news-item">
                                    <h2 className="title"><a href="news-single.html">Management</a></h2>
                                    <p>The Ranchi Jesuit Provience administers St. Xavier's College through a Governing
                                        Body whose Chairman is the Provincial, Vice Chairman is the Rector of the College
                                        and Secretary is the Principal who is also the Chief Executive of the Governing
                                        Body. </p>
                                    <a className="read-more" href="Administration">Read more<i className="fa fa-chevron-right"></i></a>
                                    <img className="thumb" src="assets/images/news/news-thumb-2.jpg" alt="" />
                                </div>

                                <div className="col-md-4 news-item">
                                    <h2 className="title"><a href="news-single.html">Affiliation</a></h2>
                                    <p>The College is affiliated to Ranchi University, Ranchi. It offers I.A.I.Sc./I.Com.
                                        courses under the Jharkhand Academic Council, B.A./B.Sc./B.Com./Vocational Degree
                                        Courses, Post Graduate courses and B.Ed. affiliation by Ranchi University Ranchi.</p>
                                    <a className="read-more" href="VisionMission">Read more<i className="fa fa-chevron-right"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="card-body" id="contact">
                <h3 className="card-title">Contact us</h3>
                <div className="card-subtitle text-muted mb-3"><hr /></div>
                <p className="card-text" style={{ 'float': 'right', 'margin-right': '200px' }}>
                    <b>
                        XYZ College, Place <br />
                        Post Box No-7, <br />
                        Dr. Camil Bulcke Path <br />
                        Ranchi, Jharkhand-834001 <br />
                        Mobile : 7667441898 <br />
                        Phone : 0651-2214231,2674935<br />
                        Email: info@xyz.org.in <br />
                        WebSite:- www.xyz.org <br />
                    </b>
                </p>
            </div>
           

            <div class="container-fluid d-flex flex-md-row flex-column justify-content-between align-items-md-center gap-1 container-p-x py-3">
                <div>
                    <h6>Copyright @ 2024 XYZ College, Place</h6>
                </div>
            </div>

           

        </>
    );
}