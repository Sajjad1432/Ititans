import React from "react";
import { Collapse, Button } from "antd";
const { Panel } = Collapse;
const FaqApp = () => {
  return (
    <div id="faq" className="block faqBlock ">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions!</h2>
          <p>Hidden Questions can fulfil your All Queries</p>
        </div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="This is panel header 1" key="1">
            <p>collapse content for practice </p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>collapse content for practice </p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>collapse content for practice </p>
          </Panel>
          <Panel header="This is panel header 1" key="4">
            <p>collapse content for practice </p>
          </Panel>
          <Panel header="This is panel header 2" key="5">
            <p>collapse content for practice </p>
          </Panel>
          <Panel header="This is panel header 3" key="6">
            <p>collapse content for practice </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>What Quick Support</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i>Email Your Questions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaqApp;
