import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button ,Col, Row } from "antd";
import OrderComponent from "../../components/OrderComponent"
import OrdersTableComponent from "../../components/OrdersTableComponent"

export default () => {

  const orders = 
  [
    {
      id: 1111,
      type: "Молоко",
      seller: "ООО Рога и копыта",
      address: "г. Тамбов, ул. Киквидзе, д. 101",
      price: "10510 руб.",
      delivery_date: "27.10.2020",
      status: "Доставлен"
    },
    {
      id: 2222,
      type: "Пшеница",
      seller: "ООО CCX",
      address: "г. Тамбов, ул. Агапкина, д. 521",
      price: "2010 руб.",
      delivery_date: "1.1.2020",
      status: "Собирается"
    },
    {
      id: 3333,
      type: "Свинина",
      seller: "ИП И.И.И",
      address: "г. Тамбов, ул. Глазковва, д. 11",
      price: "35510 руб.",
      delivery_date: "31.11.2019",
      status: "Доставлен"
    },
  ];

  const { orderId } = useParams();
  let navigate  = useNavigate(); 
  let location  = useLocation(); 
  
  function findOrderById(ordersList, idOrder)
  {
    for (let order of ordersList) {
      if (order.id === Number(idOrder)) 
      {
        return order;
      }
    }
  }

  function visitHome() 
  {
    navigate('/')
  }

  function visitOrders() 
  {
    navigate('/orders')
  }

  return (
    <>
      {orderId && <OrderComponent order={findOrderById(orders, orderId)}></OrderComponent>}
      <Row>
        <Col>
          {orderId && <Button onClick={() => visitOrders()} style={{ margin: "5px" }}>В заказы</Button>}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => visitHome()} style={{ margin: "5px" }}>На главную</Button>
        </Col>
      </Row>
    </>
  );
};
