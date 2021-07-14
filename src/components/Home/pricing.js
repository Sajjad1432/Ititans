import React from "react";
import { List, Card, Button } from "antd";

const data = [
  {
    title: "Premium",
    content: [
      {
        price: "$29",
        space: "1GB",
        user: "1",
        support: "24/7",
        backup: "sale,relaible backup",
        access: "Access from Anywhere",
      },
    ],
  },
  {
    title: "Premium",
    content: [
      {
        price: "$29",
        space: "1GB",
        user: "1",
        support: "24/7",
        backup: "sale,relaible backup",
        access: "Access from Anywhere",
      },
    ],
  },
  {
    title: "Enterprise",
    content: [
      {
        price: "$29",
        space: "1GB",
        user: "1",
        support: "24/7",
        backup: "sale,relaible backup",
        access: "Access from Anywhere",
      },
    ],
  },
];
const PricingApp = () => {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a plan that fit to your needs</h2>
          <p>
            Note that the development build is not optimized. To create a
            production build
          </p>
        </div>
        <List
          grid={{
            gutter: 16,
            column: 4,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button size="large" type="primary">
                  <i className="fab fa-telegram-plane"></i>
                  Get Started
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default PricingApp;
