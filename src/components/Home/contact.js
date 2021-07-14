import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const ContactApp = () => {
  return (
    <div id="contact" className="block conactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Headings must have content and the content</p>
        </div>
        <div className="container">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="fullname"
              rules={[
                { required: true, message: "Please input your fullname!" },
              ]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please input your Phone Number!" },
              ]}
            >
              <Input placeholder="Telephone" />
            </Form.Item>
            <Form.Item
              name="subject"
              rules={[
                { required: true, message: "Please input your subject!" },
              ]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <Input.TextArea type="text" placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>I Agree with terms and conditions</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ContactApp;
