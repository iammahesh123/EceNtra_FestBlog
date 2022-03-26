import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "CHOOSE A EVENT",
    subHeading: "Event List",
    text:
      "If you want to hold an interesting virtual event for your next occasion,\
       here are some event planning tips that are sure to wow your virtual audience.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading:"Online Events",
      msg1: "Event 1",
      msg2: "Event 2",
      msg3: "Event 3",
      msg4: "Event 4",
      msg5: "Event 5",
    },
    {
      id: 2,
      heading: "Technical Events",
      msg1: "Event 1",
      msg2: "Event 2",
      msg3: "Event 3",
      msg4: "Event 4",
      msg5: "Event 5",
    },
    {
      id: 3,
      heading: "Non Technical Events",
      msg1: "Event 1",
      msg2: "Event 2",
      msg3: "Event 3",
      msg4: "Event 4",
      msg5: "Event 5",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  {prices.price}
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                  <li>{prices.msg5}</li>
                </ul>
                <div className="price__btn">
                  <a href="" className="btn btn-outline">
                    Register
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
