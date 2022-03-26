import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "WORKSHOPS",
    subHeading: "My Workshops",
    text:
      "A technical workshop is defined as a session where,\
       next to the trainer discussing specific technical concepts.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Argumented Reality",
      text:
        "We provide cutting edge VR Training and Simulations for Defence\
          is leading Virtual Reality (VR), \
         Augmented Reality (AR) company. ",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "PCB Designing",
      text:
        "Boost your productivity, easy to use, make schematic designs for PCB board.\
         Affordable and scalable, built to grow with your business",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "5G Technology",
      text:
        "5G wireless technology is meant to deliver higher multi-Gbps peak data speeds, \
        ultra low latency,\
         more reliability, massive network capacity, increased",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "Aurdino",
      text:
        "Arduino is an open-source electronics platform based on easy-to-use hardware and software. \
        Arduino boards are able to read inputs  ",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "Illumination",
      text:
        "illumination is the act or process of making something clearer or brighter or a\
         device for doing so.\
         An example of an illumination is an explanation.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
