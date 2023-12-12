import Image from "next/image";
import star2 from "../assets/images/v1/star2.png";
import thumb1 from "../assets/images/v1/t_thumb1.png";
import thumb2 from "../assets/images/v1/t_thumb2.png";
import thumb3 from "../assets/images/v1/t_thumb3.png";
import thumb4 from "../assets/images/v1/t_thumb4.png";

const Client = () => {
  const testimonials = [
    {
      image: thumb1,
      title: "Super customer service!",
      name: "William Jack",
      designation: "Founder@XYZ",
      text: "Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.",
    },
    {
      image: thumb2,
      title: "Exceptional creativity and vision",
      name: "Smith Align",
      designation: "Businessman",
      text: "Working Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!",
    },
    {
      image: thumb3,
      title: "Innovative and professional",
      name: "Milano Joe",
      designation: "Creative Director",
      text: "I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.",
    },
    {
      image: thumb4,
      title: "Transformed our brand",
      name: "Danial Mark",
      designation: "Marketing Director",
      text: "Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.",
    },
  ];

  return (
    <div className="section aximo-section-padding3" id="client">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            Clients are always
            <span className="aximo-title-animation">
              satisfied with us
              <span className="aximo-title-icon">
                <Image src={star2} alt="" className="w-[58px] h-14" />
              </span>
            </span>
          </h2>
        </div>
        <div className="row">
          {testimonials.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div
                className="aximo-testimonial-wrap wow fadeInUpX"
                data-wow-delay="0.1s"
              >
                <div className="aximo-testimonial-rating">
                  <ul>
                    <li>
                      <i className="icon-star"></i>
                    </li>
                    <li>
                      <i className="icon-star"></i>
                    </li>
                    <li>
                      <i className="icon-star"></i>
                    </li>
                    <li>
                      <i className="icon-star"></i>
                    </li>
                    <li>
                      <i className="icon-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="aximo-testimonial-data">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="aximo-testimonial-author">
                  <div className="aximo-testimonial-author-thumb">
                    <Image
                      src={item.image}
                      alt=""
                      className="w-[65px] h-[65px]"
                    />
                  </div>
                  <div className="aximo-testimonial-author-data">
                    <p>
                      {item.name}
                      <span>{item.designation}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
