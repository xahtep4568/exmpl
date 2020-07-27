import React from "react"
import { Col, Descriptions, Input, Row, Typography } from "antd"

export default ({ order }) => {
  return (
    <>
    <Row>
      <Col>
        <Descriptions title={"Заказ #" + order.id} column={1} style={{textAlign: "left", margin: "5px"}}>
          <Descriptions.Item label="Тип">{order.type}</Descriptions.Item>
          <Descriptions.Item label="Продавец">{order.seller}</Descriptions.Item>
          <Descriptions.Item label="Адрес">{order.address}</Descriptions.Item>
          <Descriptions.Item label="Цена">{order.price}</Descriptions.Item>
          <Descriptions.Item label="Дата доставки">{order.delivery_date}</Descriptions.Item>
          <Descriptions.Item label="Статус">{order.status}</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
    <Row>
      <Col>
        <Typography.Text style={{margin: "5px"}}>Сообщение продавцу</Typography.Text>
      </Col>
    </Row>
    <Row>
      <Col>
        <Input.TextArea rows={4} cols={100} style={{margin: "5px"}} />
      </Col>
    </Row>
    </>
  );
}