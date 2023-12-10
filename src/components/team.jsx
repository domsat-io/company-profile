import Image from "next/image";
import star2 from '../assets/images/v1/star2.png';
import team1 from '../assets/images/team/team1.png';
import team2 from '../assets/images/team/team2.png';
import team3 from '../assets/images/team/team3.png';
import team4 from '../assets/images/team/team4.png';
const Team = ()=>{
    return (
    <div className="section aximo-section-padding3">
    <div className="container">
      <div className="aximo-section-title center">
        <h2>
          We have a team of
          <span className="aximo-title-animation">
            creative people
            <span className="aximo-title-icon">
              <Image src={star2} alt="" className="w-[58px] h-14" />
            </span>
          </span>
        </h2>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.1s">
            <div className="aximo-team-thumb">
              <Image src={team1} alt="" className='w-full h-[254px]' />
              <div className="aximo-social-icon team-social">
                <ul>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com/" target="_blank">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aximo-team-data">
              <a href="single-team.html">
                <h3>Andrew Mark</h3>
              </a>
              <p>Creative Director</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.2s">
            <div className="aximo-team-thumb">
              <Image src={team2} alt="" className='w-full h-[254px]' />
              <div className="aximo-social-icon team-social">
                <ul>
                  <li>
                    <a href="">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aximo-team-data">
              <a href="single-team.html">
                <h3>Jack Taylor</h3>
              </a>
              <p>Senior Designer</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.3s">
            <div className="aximo-team-thumb">
              <Image src={team3} alt="" className='w-full h-[254px]' />
              <div className="aximo-social-icon team-social">
                <ul>
                  <li>
                    <a href="">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aximo-team-data">
              <a href="single-team.html">
                <h3>Martine Joy</h3>
              </a>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.4s">
            <div className="aximo-team-thumb">
              <Image src={team4} alt="" className='w-full h-[254px]' />
              <div className="aximo-social-icon team-social">
                <ul>
                  <li>
                    <a href="">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aximo-team-data">
              <a href="single-team.html">
                <h3>Adam Straw</h3>
              </a>
              <p>Web Developer</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Team;