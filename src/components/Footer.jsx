import React from 'react';

function Footer() {
  return (
    <div className="footer-dark">
            <footer>
              <div id="contact_us" className="contact_us">
                <h1 id="Footer-h1">Contact Us</h1>
                <h2>Have any further unanswered questions? We would love to talk to you. Get in touch <br/>with us at <a href="mailto:kisan_connect_india@gmail.com">kisanconnectindia@gmail.com</a></h2>
                <hr id="Footer-hr"/>
              </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Links</h3>
                            <ul>
                                <li><a href="#about_us">About Us</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#contact_us">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#about_us">Company</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#features">Features</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Kisan Connect</h3>
                            <p>Kisan Connect is an initiative which helps to create a bridge between the Exporters and the Buyers. By using Kisan Connect, the farmers have the freedom to choose the value of their quality product.</p>
                        </div>
                        <div className="col item social"><a target="_blank" href="https://www.facebook.com/profile.php?id=100073396969530"><i className="icon ion-social-facebook"></i></a><a target="_blank" href="https://www.instagram.com/kisan_connect_india/"><i className="fab fa-instagram" aria-hidden="true"></i></a><a target="_blank" href="https://discord.gg/UXZRu9BV"><i className="fab fa-discord" aria-hidden="true"></i></a><a target="_blank" href="mailto:kisanconnectindia@gmail.com"><i className="fas fa-envelope" aria-hidden="true"></i></a></div>
                    </div>
                    <p className="copyright">Kisan Connect © 2021</p>
                </div>
            </footer>
        </div>
  );
}

export default Footer;