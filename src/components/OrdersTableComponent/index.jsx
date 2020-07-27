import React from "react";
import { Col, Row, Table } from "antd";
import { Link, useLocation } from "react-router-dom"


export default ({ ordersList }) => {
  let location = useLocation();

  const columns = [
      {
        title: 'Номер заказа',
        dataIndex: 'id',
        key: 'id',
        render: text => <Link to={`/orders/${text}`}>{"#" + text}</Link>
      },
      {
        title: 'Тип товара',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Продавец',
        dataIndex: 'seller',
        key: 'seller',
        render: text => <Link to={`${location.pathname}/`}>{text}</Link>
      },
      {
        title: 'Адрес',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Цена',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Дата доставки',
        dataIndex: 'delivery_date',
        key: 'delivery_date',
      },
      {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
      }
    ];
  return (
    <Row>
      <Col span={24}>
        <Table dataSource={ordersList} columns={columns}></Table>
      </Col>
    </Row>
  );
};