import React from "react";
import { Button, Card, Descriptions } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
// import "./CardArticle.css";
import { Link } from 'react-router-dom';

export default ({ item }) => {
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
        <Link to={`/product/${itemId}`} >
          <Button type="primary" icon={<ShoppingCartOutlined />} size="large">
            Заказать
          </Button>
        </Link>
      </div>
    </Card>
  );
};
