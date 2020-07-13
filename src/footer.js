import React from 'react'
//import heart from '../../assets/heart.svg'
import footerLogo from './assets/KimberylyLogo.png'

//import './footer.css';

const Footer = () => {
    return (
        <footer class="page-footer pt-4"  style={{marginBottom:0}}>
            <div class="text-center  p-3 pr-4" style={{backgroundColor: '#00A85A'}}>
                <div class="row pt-4">
                    <div class="col-md-3 mt-md-0 mt-3 " style={{textAlign: 'center'}}>
                        <div style={{
                            backgroundImage: `url(${footerLogo})`,
                            height: 80,
                            backgroundPosition: 'center center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }} className=''>
                        </div>
                    </div>


                    <hr class=" w-100 d-md-none pb-3" />
                    <div class="col-md-3 mb-md-0 mb-3">
                        <ul class="list-unstyled">
                            <li>
                              <p style={{color: 'white'}}><small>Terms of use</small></p>
                            </li>
                            <li>
                            <p style={{color: 'white'}}><small>Privacy and Security</small></p>
                            </li>
                            <li>
                            <p style={{color: 'white'}}><small>Feedback</small></p>
                            </li>
                        </ul>

                    </div>

                    <div class="col-md-6 mb-md-0 mb-3 px-4 text-md-right" >

                        <ul class="list-unstyled ">
                            <li>
                            <p style={{color: 'white'}}><small>Privacy and Security</small></p>                            </li>
                            <li>
                                <p className='text-white pt-4' style={{fontSize: 14}}>CONNECT WITH US ON <span><i class="fab fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-instagram icon-large"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-twitter icon-large"></i></span></p>
                            </li>
                         
                        </ul>

                    </div>

                </div>



            </div>
            <div class="footer-copyright text-center " style={{backgroundColor: '#A9D047' }}><p className="p-1" style={{fontSize: 12}}><small>Made by Babatunde Adenrele</small></p>
            </div>


        </footer>
    )
}

export default Footer
