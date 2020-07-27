import React from "react"
import { Col, Descriptions, Input, Row, Typography } from "antd"

export default ({ product }) => {
  return (
    <>
    <Row>
      <Col>
        <Descriptions title={"Заказ #" + product.id} column={1} style={{textAlign: "left", margin: "5px"}}>
        <Descriptions.Item><img alt="example" style={{ height: "200px" }} src={product.picUrl} /></Descriptions.Item>
          <Descriptions.Item label="Название товара">{product.title}</Descriptions.Item>
          <Descriptions.Item label="Цена за ед.">{product.price} {product.curreny}</Descriptions.Item>
          <Descriptions.Item label="Местоположение">{product.location}</Descriptions.Item>
          <Descriptions.Item label="Описание">{product.description}</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
    </>
  );
}