import React, { useState } from "react";
import { Modal, Button } from "antd";

const AppWorks = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="howitworks" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How It Works!</h2>
          <p>Headings must have content and the content must</p>
        </div>
      </div>
      <div className="contentHolder">
        <Button onClick={showModal}>
          <i className="fas fa-play"></i>
        </Button>
      </div>
      <Modal
        title="UE-IT-SOCIETY"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <iframe
          src="https://www.youtube.com/embed ?v=DxNu1tVksqM"
          title="Champion We Innovative"
          width="100%"
          height="350"
        ></iframe>
      </Modal>
    </div>
  );
};

export default AppWorks;
