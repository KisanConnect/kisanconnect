import React from 'react';

function Team() {
  return (
    <section className="team_members mt-20" id="team">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full section-title">
                  <h2 className="details_on_top">TEAM</h2>
                  <h1 className="text-4xl font-medium title-font mb-4 text-gray-900" style={{fontSize: '45px'}}>Our Hardworking <span style={{color: '#5656c3'}}>Team</span></h1>
                  <hr style={{width: '150px', height: '3px', margin: 'auto', color: 'blue', opacity: '30%', boxShadow: '0 0 10px 1px rgb(24, 24, 230)',}}/>
                </div>
                
                <div className="members_section">
                  
                  <div className="member">
                    <div className="member-img">
                      <img src="img\ganesh_prasannan.jfif" alt="Ganesh Prasannan" className="rounded-img member_pic"/>
                    </div>
                    <div className="member-info">
                      <h2>Ganesh Prasannan</h2>
                      <span className="designation">Front-End Developer</span>
                    </div>
                    <div className="members_social">
                      <a href="https://www.youtube.com/indiantechnopath" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a>
                      <a href="members/ganeshprasannan.html"><i className="fas fa-globe" aria-hidden="true"></i></a>
                      <a href="https://github.com/IndianTechnopath" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>
                      <a href="mailto:techtigertham@gmail.com"><i className="fas fa-envelope" aria-hidden="true"></i></a>
                    </div>
                  </div>
                  <div className="member">
                    <div className="member-img">
                      <img src="img\ansh_sharma.jpg" alt="Ansh Sharma" className="rounded-img member_pic"/>
                    </div>
                    <div className="member-info">
                      <h2>Ansh Sharma</h2>
                      <span className="designation">Back-End Developer</span>
                    </div>
                    <div className="members_social">
                      <a href="https://www.youtube.com/AnshSharma" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a>
                      <a href="anshsharma.html"><i className="fas fa-globe" aria-hidden="true"></i></a>
                      <a href="https://github.com/Ansh-code398" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>
                      <a href="mailto:anshsharma.code@gmail.com"><i className="fas fa-envelope" aria-hidden="true"></i></a>
                    </div>
                  </div>


                  <div className="member">
                    <div className="member-img">
                      <img src="img\fauzan_sarwer.jfif" alt="Fauzan Sawrwer" className="rounded-img member_pic"/>
                    </div>
                    <div className="member-info">
                      <h2>Fauzan Sarwer</h2>
                      <span className="designation">Web Designer</span>
                    </div>
                    <div className="members_social">
                      <a href="https://www.youtube.com/channel/UCHnYXPF2_xapHi9o3ZUYSDg" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a>
                      <a href="fauzansarwer.html"><i className="fas fa-globe" aria-hidden="true"></i></a>
                      <a href="https://github.com/NotFauzan" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>
                      <a href="mailto:fsarwer777@gmail.com"><i className="fas fa-envelope" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
        </section>
  );
}

export default Team;