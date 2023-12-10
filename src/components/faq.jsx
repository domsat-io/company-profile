import Image from "next/image";
import { useEffect, useState } from 'react';
import star2 from '../assets/images/v1/star2.png';
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    console.log(index);
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      title: '01/ Project idea',
      description: 'The process starts with a detailed discussion with the client to understand their idea & goals.',
    },
    {
      title: '02/ Brainstorming',
      description: 'Brainstorming is a group creativity technique in which members attempt to find a conclusion.',
    },
    {
      title: '03/ Launch',
      description: 'The completed design assets or final product are delivered with necessary documentation.',
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="aximo-faq-wrap">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    Our high-quality
                    <span className="aximo-title-icon">
                      <Image src={star2} alt="" className="w-[58px] h-14" />
                    </span>
                  </span>
                  working processes
                </h2>
                <p>We focus at every stage on effective communication and collaboration between the client and ensuring that the final design meets the client's objectives and expectations.</p>
                <p>It is important to note that these are simplified steps, and the actual work process may vary depending on the complexity of the project.</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="aximo-accordion-wrap wow fadeInUpX" data-wow-delay="0s" id="aximo-accordion">
                {accordionItems.map((item, index) => (
                  <div key={index} className={`aximo-accordion-item ${openIndex === index ? 'open' : ''}`}>
                    <div className="aximo-accordion-header" onClick={() =>handleAccordionClick(index)}><h3>{item.title}</h3></div>
                    <div className="aximo-accordion-body"><p>{item.description}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Faq;



