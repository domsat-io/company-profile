import Image from "next/image";
import star2 from '../assets/images/v1/star2.png';
import team1 from '../assets/images/team/team1.png';
import team2 from '../assets/images/team/team2.png';
import team3 from '../assets/images/team/team3.png';
import team4 from '../assets/images/team/team4.png';
const Team = ()=>{
  const data_team = [
    {img: team1, twiter: 'https://twitter.com/', facebook: 'https://facebook.com/', instagram: 'https://www.instagram.com/', linkedin:'https://www.linkedin.com/', name: 'Andrew Mark', position: 'Creative Director'},
    {img: team2, twiter: 'https://twitter.com/', facebook: 'https://facebook.com/', instagram: 'https://www.instagram.com/', linkedin:'https://www.linkedin.com/', name: 'Jack Taylor', position: 'Senior Designer'},
    {img: team3, twiter: 'https://twitter.com/', facebook: 'https://facebook.com/', instagram: 'https://www.instagram.com/', linkedin:'https://www.linkedin.com/', name: 'Martine Joy', position: 'Project Manager'},
    {img: team4, twiter: 'https://twitter.com/', facebook: 'https://facebook.com/', instagram: 'https://www.instagram.com/', linkedin:'https://www.linkedin.com/', name: 'Adam Straw', position: 'Web Developer'},
  ]
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
        {data_team.map((item, index) => (
        <div className="col-xl-3 col-md-6" key={index}>
          <div className="aximo-team-wrap wow fadeInUpX" data-wow-delay="0.1s">
            <div className="aximo-team-thumb">
              <Image src={team1} alt="" className='w-full h-[254px]' />
              <div className="aximo-social-icon team-social">
                <ul>
                  <li>
                    <a href={item.twiter} target="_blank">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={item.facebook} target="_blank">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={item.instagram} target="_blank">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={item.linkedin} target="_blank">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aximo-team-data">
              <a href="single-team.html">
                <h3>{item.name}</h3>
              </a>
              <p>{item.position}</p>
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
  </div>
  )
}

export default Team;