import React from "react";
import { Button, Card, Descriptions } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import SomeComponent from "../SomeComponent";
// import "./CardArticle.css";

export default ({ item, message }) => {
  const {
    itemId,
    itemType,
    itemTitle,
    itemPrice,
    itemCurrency,
    itemLocation,
    itemPicUrl,
  } = item;
  

  return (
    <Card
      key={itemId}
      hoverable
      cover={<img alt="example" style={{ height: "200px" }} src={itemPicUrl} />}
    >
      <SomeComponent msg={message} />
      <Descriptions title={itemTitle} column={1} layout="horizontal">
        <Descriptions.Item label="Цена">
          {itemPrice} {itemCurrency}
        </Descriptions.Item>
        <Descriptions.Item label="Тип">{itemType}</Descriptions.Item>
        <Descriptions.Item label="Местоположение">
          {itemLocation}
        </Descriptions.Item>
      </Descriptions>
      <div style={{ float: "right" }}>
        <Button type="primary" icon={<ShoppingCartOutlined />} size="large">
          Купить {itemId}
        </Button>
      </div>
    </Card>
  );
};
