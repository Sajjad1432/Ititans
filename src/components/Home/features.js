import React from "react";
import { Row, Col } from "antd";
import img1 from "../../assets/images/advanced-option.jpg";
import img2 from "../../assets/images/clean-design.jpg";
import img3 from "../../assets/images/easy-customise.jpg";
import img4 from "../../assets/images/great-support.jpg";
import img5 from "../../assets/images/great-support.jpg";
import img6 from "../../assets/images/unlimited-features.jpg";

import { Card } from "antd";

const { Meta } = Card;
function AppFeature() {
  return (
    <div id="features" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h3>Key Features and Benefits</h3>
          <p>You can now view ititans in the browser.</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="example" src={img1} />}>
              <Meta title="Europe Street beat" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="example" src={img2} />}>
              <Meta title="Europe Street beat" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="example" src={img3} />}>
              <Meta title="Europe Street beat" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="example" src={img4} />}>
              <Meta title="Europe Street beat" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="example" src={img5} />}>
              <Meta title="Europe Street beat" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="example" src={img6} />}>
              <Meta title="Europe Street beat" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
