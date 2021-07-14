import React, { useState } from "react";
import { Anchor } from "antd";
import { Drawer, Button } from "antd";

const { Link } = Anchor;
function AppHeader() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="www.ititans.com">ITITANS</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About Us" />
            <Link href="#features" title="Features" />
            <Link href="#howitworks" title="How it Works" />
            <Link href="#faq" title="FAQs" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact Us" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About Us" />
              <Link href="#features" title="Features" />
              <Link href="#howitworks" title="How it Works" />
              <Link href="#faq" title="FAQs" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact Us" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
export default AppHeader;
