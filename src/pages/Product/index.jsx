import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button ,Col, Row } from "antd";
import ProductComponent from "../../components/ProductComponent";

export default () => {


  const products = 
  [
        {
          id: 1111,
          type: "Мясо",
          title: "Говядина",
          price: "1000",
          curreny: "₽",
          location: "Тамбов",
          picUrl: "http://localhost:3000/uploaded/beef.jpeg",
          description: "Обычная говядина.",
        },
        {
          id: 2222,
          type: "Мясо",
          title: "Курица",
          price: "1000",
          curreny: "₽",
          location: "Тамбов",
          picUrl: "http://localhost:3000/uploaded/chicken.jpeg",
          description: "Дохлая курица.",
        },
        {
          id: 3333,
          type: "Мясо",
          title: "Гусь",
          price: "1500",
          curreny: "₽",
          location: "Котовск",
          picUrl: "http://localhost:3000/uploaded/chicken.jpeg",
          description: "Грустный гусь.",
        },
    ];

  const { productId } = useParams();
  let navigate  = useNavigate(); 
  let location  = useLocation(); 
  
  function findProductById(productsList, idProduct)
  {
    for (let product of productsList) {
      if (product.id === Number(idProduct)) 
      {
        return product;
      }
    }
  }

  function visitHome() 
  {
    navigate('/')
  }

  function visitOrder(idProduct) 
  {
    navigate(`/orders/${idProduct}`)
  }

  return (
    <>
      {productId && <ProductComponent product = {findProductById(products, productId)}></ProductComponent>}
      <Row>
        <Col >
          <Button onClick={() => visitHome()}  style={{ margin: "5px" }}>На главную</Button>
        </Col>
        <Col>
          <Button onClick={() => visitOrder(productId)} style={{ margin: "5px" }}>Оформить заказ</Button>
        </Col>
      </Row>
      
    </>
  );
};
