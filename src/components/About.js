import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "ECENTRA",
    text:
      "Jai Ballayaa",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Mullangi Akhil" },
    { id: 2, title: "Email:", text: "mullangiakhil@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9553545638" },
    { id: 4, title: "Linkedin", text: "akhil_1531" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
               Welcome to JNTGV Gurajada University,\
               ECE Department Technical College Fest organisation conducted on 22,23 April 2022.
              </div>
              <div className="about__info-p2">
                Accommidation also avaliable in our campus and come and enhoy in my campus.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
