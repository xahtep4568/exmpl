import React from "react";
import { Button, Card, Col, Descriptions, Divider, Row } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CardArticle from "../CardArticle";


export default ({mainTitle, itemsToBuy}) => {

    const colLayout = {
        xs: "24",
        sm: "24",
        md: "12",
        lg: "6",
        xl: "6",
        xxl: "6",
      };
      
    return (
        <>
        <Row>
        <Col>
          <Row>
            <Col>
            <h1>{mainTitle}</h1>
            </Col>
          </Row>
          <Row>
            {itemsToBuy.map((el) => (
              <Col className="article-item" {...colLayout}>
                <CardArticle item={el} />
              </Col>
            ))}
          </Row>
          <Row>
            <a href="https://www.yandex.ru">смотреть ещё...</a>
          </Row>
        </Col>
      </Row>
      <Divider plain></Divider>
      </>
    );    
}