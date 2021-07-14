import React from "react";
import { Carousel, Button } from "antd";
const Items = [
  {
    key: 1,
    title: "Champion we Innovative",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    key: 2,
    title: "Champion we Innovative",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    key: 3,
    title: "Champion we Innovative",
    content:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];
function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {Items.map((item) => {
          return (
            <div className="container-fluid" key={item.key}>
              <div className="content">
                <h3>{item.title}</h3>
                <p className="text-center">{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Read More
                  </Button>
                  <Button size="large">
                    <i className="fas fa-desktop"></i>Watch a Demo
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
