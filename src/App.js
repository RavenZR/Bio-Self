import React from 'react';

class App extends React.Component{
  constructor(props){
  super(props);
  }
  render(){
    return(
      <>
        <div class="preloader">
          <div class="loader_34">
            <div class="ytp-spinner">
              <div class="ytp-spinner-container">
                <div class="ytp-spinner-rotator">
                    <div class="ytp-spinner-left">                         
                     <div class="ytp-spinner-circle"></div>
                      </div>
                      <div class="ytp-spinner-right">
                          <div class="ytp-spinner-circle"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <header id="home" class="header-area">
        <div class="navigation fixed-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/images/logo.png" alt="Logo"/>
                            </a> {/* Logo */}
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active"><a class="page-scroll" href="#home">Home</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#about">About</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#hobies">Hobies</a></li>
                                    <li class="nav-item"><a class="page-scroll" href="#contact">Contact</a></li>
                                </ul>
                            </div> {/* navbar collapse */}
                        </nav> {/* navbar */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div> {/* navigation */}

        <div id="parallax" class="header-content d-flex align-items-center">
            <div class="header-shape shape-one layer" data-depth="0.10">
                <img src="/assets/images/banner/shape/shape-1.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="header-shape shape-tow layer" data-depth="0.30">
                <img src="/assets/images/banner/shape/shape-2.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="header-shape shape-three layer" data-depth="0.40">
                <img src="/assets/images/banner/shape/shape-3.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="header-shape shape-fore layer" data-depth="0.60">
                <img src="/assets/images/banner/shape/shape-2.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="header-shape shape-five layer" data-depth="0.20">
                <img src="/assets/images/banner/shape/shape-1.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="header-shape shape-six layer" data-depth="0.15">
                <img src="/assets/images/banner/shape/shape-4.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="header-shape shape-seven layer" data-depth="0.50">
                <img src="/assets/images/banner/shape/shape-5.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="header-shape shape-eight layer" data-depth="0.40">
                <img src="/assets/images/banner/shape/shape-3.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="header-shape shape-nine layer" data-depth="0.20">
                <img src="/assets/images/banner/shape/shape-6.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="header-shape shape-ten layer" data-depth="0.30">
                <img src="/assets/images/banner/shape/shape-3.png" alt="Shape"/>
            </div> {/* header shape */}
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-5 col-lg-6">
                        <div class="header-content-right">
                            <h4 class="sub-title">Hi, Saya</h4>
                            <h1 class="title">Anisa Septiani</h1>
                            <a class="main-btn" href="#about">About Me</a>
                        </div> {/* header content right */}
                    </div>
                    <div class="col-lg-6 offset-xl-1">
                        <div class="header-image d-none d-lg-block">
                            <img src="/assets/images/banner/hero.png" alt="hero"/>
                        </div> {/* header image */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
            <div class="header-social">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header-social-icon">
                                <ul>
                                    <li><a href="https://web.facebook.com/profile.php?id=100013437467524"><i class="lni-facebook-filled"></i></a></li>
                                    <li><a href="https://twitter.com/RvenZero"><i class="lni-twitter-original"></i></a></li>
                                    <li><a href="https://www.instagram.com/izm_an/"><i class="lni-instagram-original"></i></a></li>
                                    <li><a href="https://soundcloud.com/raven-z-560919640"><i class="lni-soundcloud"></i></a></li>
                                </ul>
                            </div> {/* header social */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </div> {/* header social */}
        </div> {/* header content */}
    </header>

    {/*====== HEADER PART ENDS ======*/}

    {/*====== ABOUT PART START ======*/}

    <section id="about" class="about-area pt-125 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center">
                        <h2 class="title">About Me</h2>
                    </div> {/* section title */}
                </div>
            </div> {/* row */}
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-content mt-50">
                        <h5 class="about-title">Hai! Saya Anisa Septiani</h5>
                        <p>Saya adalah anggota dari ekskul NKJUKU angkatan '12. Salam kenal</p>
                        <ul class="clearfix">
                            <li>
                                <div class="single-info d-flex align-items-center">
                                    <div class="info-icon">
                                        <i class="lni-calendar"></i>
                                    </div>
                                    <div class="info-text">
                                        <p><span>Tanggal Lahir:</span> 27 September 2003</p>
                                    </div>
                                </div> {/* single info */}
                            </li>
                            <li>
                                <div class="single-info d-flex align-items-center">
                                    <div class="info-icon">
                                        <i class="lni-envelope"></i>
                                    </div>
                                    <div class="info-text">
                                        <p><span>Email:</span> nisa.tiani2328@gmail.com</p>
                                    </div>
                                </div> {/* single info */}
                            </li>
                            <li>
                                <div class="single-info d-flex align-items-center">
                                    <div class="info-icon">
                                        <i class="lni-phone-handset"></i>
                                    </div>
                                    <div class="info-text">
                                        <p><span>No. tlp:</span> +62 8783 2871 901</p>
                                    </div>
                                </div> {/* single info */}
                            </li>
                            <li>
                                <div class="single-info d-flex align-items-center">
                                    <div class="info-icon">
                                        <i class="lni-map-marker"></i>
                                    </div>
                                    <div class="info-text">
                                        <p><span>Lokasi:</span> jl. Teluk Buyung Kidul</p>
                                    </div>
                                </div> {/* single info */}
                            </li>
                        </ul>
                    </div> {/* about content */}
                </div>
                <div class="col-xl-5 offset-xl-1 col-lg-6">
                    <div class="about-skills pt-25">
                        <div class="skill-item mt-25">
                            <div class="skill-header">
                                <h6 class="skill-title">HTML</h6>
                                <div class="skill-percentage">
                                    <div class="count-box counted">
                                        <span class="counter">70</span>
                                    </div>
                                    %
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner">
                                    <div class="bar progress-line" data-width="70"></div>
                                </div>
                            </div>
                        </div> {/* skill item */}
                        <div class="skill-item mt-25">
                            <div class="skill-header">
                                <h6 class="skill-title">CSS</h6>
                                <div class="skill-percentage">
                                    <div class="count-box counted">
                                        <span class="counter">60</span>
                                    </div>
                                    %
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner">
                                    <div class="bar progress-line" data-width="60"></div>
                                </div>
                            </div>
                        </div> {/* skill item */}
                        <div class="skill-item mt-25">
                            <div class="skill-header">
                                <h6 class="skill-title">Photoshop</h6>
                                <div class="skill-percentage">
                                    <div class="count-box counted">
                                        <span class="counter">30</span>
                                    </div>
                                    %
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner">
                                    <div class="bar progress-line" data-width="30"></div>
                                </div>
                            </div>
                        </div> {/* skill item */}
                        <div class="skill-item mt-25">
                            <div class="skill-header">
                                <h6 class="skill-title">JS</h6>
                                <div class="skill-percentage">
                                    <div class="count-box counted">
                                        <span class="counter">60</span>
                                    </div>
                                    %
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner">
                                    <div class="bar progress-line" data-width="60"></div>
                                </div>
                            </div>
                        </div> {/* skill item */}
                    </div> {/* about skills */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>

    {/*====== ABOUT PART ENDS ======*/}

    {/*====== HOBIES PART START ======*/}

    <section id="hobies" class="services-area gray-bg pt-125 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center pb-30">
                        <h2 class="title">My Hobies</h2>
                    </div> {/* section title */}
                </div>
            </div> {/* row */}
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="single-service text-center mt-30">
                        <div class="service-icon">
                            <i class="lni-color-pallet"></i>
                        </div>
                        <div class="service-content">
                            <h4 class="service-title"><a href="#contact">Gambar</a></h4>
                            <p>Kalo lagi luang seneng gambar-gambar karakter tapi gak terlalu bagus juga</p>
                        </div>
                    </div> {/* single service */}
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="single-service text-center mt-30">
                        <div class="service-icon">
                            <i class="lni-game"></i>
                        </div>
                        <div class="service-content">
                            <h4 class="service-title"><a href="#">Game</a></h4>
                            <p>Seneng main game-game RPG atau rythm, tapi gak begitu jago wkwk soalnya cuma buat ngisi waktu luang aja. Kalo mau main bareng bisa di ajak wkwk.</p>
                        </div>
                    </div> {/* single service */}
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="single-service text-center mt-30">
                        <div class="service-icon">
                            <i class="lni-music"></i>
                        </div>
                        <div class="service-content">
                            <h4 class="service-title"><a href="#">Musik</a></h4>
                            <p>Suka dengerin lagu-lagu atau cover-cover lagu rock, tapi lagu-lagu genre lain juga ada beberapa yang di suka</p>
                        </div>
                    </div> {/* single service */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>

    {/*====== HOBIES PART ENDS ======*/}

    {/*====== CONTACT PART START ======*/}

    <section id="contact" class="contact-area pt-125 pb-130 gray-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center pb-25">
                        <h2 class="title">Get In Touch</h2>
                    </div> {/* section title */}
                </div>
            </div> {/* row */}
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-7">
                    <div class="contact-box text-center mt-30">
                        <div class="contact-icon">
                            <i class="lni-map-marker"></i>
                        </div>
                        <div class="contact-content">
                            <h6 class="contact-title">Alamat</h6>
                            <p>Bandung, Jl. Teluk Buuyung Kidul</p>
                        </div>
                    </div> {/* contact box */}
                </div>
                <div class="col-lg-4 col-md-6 col-sm-7">
                    <div class="contact-box text-center mt-30">
                        <div class="contact-icon">
                            <i class="lni-phone"></i>
                        </div>
                        <div class="contact-content">
                            <h6 class="contact-title">No tlp.</h6>
                            <p>+62 8783 2871 901</p>
                        </div>
                    </div> {/* contact box */}
                </div>
                <div class="col-lg-4 col-md-6 col-sm-7">
                    <div class="contact-box text-center mt-30">
                        <div class="contact-icon">
                            <i class="lni-envelope"></i>
                        </div>
                        <div class="contact-content">
                            <h6 class="contact-title">Email</h6>
                            <p>nisa.tiani2328@gmail.com</p>
                        </div>
                    </div> {/* contact box */}
                </div>
            </div> {/* row */}
        </div> {/* container */}
    </section>

    {/*====== CONTACT PART ENDS ======*/}

    {/*====== FOOTER PART START ======*/}

    <footer id="footer" class="footer-area">
        <div class="footer-widget pt-130 pb-130">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="footer-content text-center">
                            <a href="index.html">
                                <img src="/assets/images/logo-2.png" alt="Logo"/>
                            </a>
                        </div> {/* footer content */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div> {/* footer widget */}
        <div class="footer-copyright pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-text text-center pt-20">
                            <p>Copyright © 2022. Template Crafted by <a href="https://uideck.com" rel="nofollow">UIdeck</a></p>
                        </div> {/* copyright text */}
                    </div>
                </div> {/* row */}
            </div> {/* container */}
        </div> {/* footer widget */}
    </footer>
    <a href="#" class="back-to-top"><i class="lni-chevron-up"></i></a>
    </>
    )
  }
}
export default App;
