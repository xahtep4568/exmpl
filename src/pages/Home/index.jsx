import React from "react";

import { Card } from "antd";
// import { ShoppingCartOutlined } from "@ant-design/icons";
// import CardArticle from "./components/CardArticle";
import "./style.css";
// import SomeCard from "./components/SomeCard";
import HomeItemsListBlock from "../../components/HomeItemsListBlock";


export default () => {
    const itemsToBuy = [
        {
          itemId: 1111,
          itemType: "Мясо",
          itemTitle: "Говядина",
          itemPrice: "1000",
          itemCurreny: "₽",
          itemLocation: "Тамбов",
          itemPicUrl: "http://localhost:3000/uploaded/beef.jpeg",
        },
        {
          itemId: 2222,
          itemType: "Мясо",
          itemTitle: "Курица",
          itemPrice: "1000",
          itemCurreny: "₽",
          itemLocation: "Тамбов",
          itemPicUrl: "http://localhost:3000/uploaded/chicken.jpeg",
        },
        {
          itemId: 3333,
          itemType: "Мясо",
          itemTitle: "Гусь",
          itemPrice: "1500",
          itemCurreny: "₽",
          itemLocation: "Котовск",
          itemPicUrl: "http://localhost:3000/uploaded/chicken.jpeg",
        },
        {
          itemId: 4712,
          itemType: "Мясо",
          itemTitle: "Свинина",
          itemPrice: "1500",
          itemCurreny: "₽",
          itemLocation: "Котовск",
          itemPicUrl: "http://localhost:3000/uploaded/pork.png",
        },
        {
          itemId: 4712,
          itemType: "Мясо",
          itemTitle: "Кролик",
          itemPrice: "1500",
          itemCurreny: "₽",
          itemLocation: "Рассказово",
          itemPicUrl: "http://localhost:3000/uploaded/pork.png",
        },
      ];
    
    
      const itemsRecentlyBought = [
        {
          itemId: 4711,
          itemType: "Мясо",
          itemTitle: "Говядина",
          itemPrice: "1000",
          itemCurreny: "₽",
          itemLocation: "Тамбов",
          itemPicUrl: "http://localhost:3000/uploaded/beef.jpeg",
        },
        {
          itemId: 4712,
          itemType: "Мясо",
          itemTitle: "Курица",
          itemPrice: "1000",
          itemCurreny: "₽",
          itemLocation: "Тамбов",
          itemPicUrl: "http://localhost:3000/uploaded/chicken.jpeg",
        },
        {
          itemId: 4712,
          itemType: "Мясо",
          itemTitle: "Гусь",
          itemPrice: "1500",
          itemCurreny: "₽",
          itemLocation: "Котовск",
          itemPicUrl: "http://localhost:3000/uploaded/chicken.jpeg",
        },
      ];
    
    
      const itemsRecommended = [
        {
          itemId: 4711,
          itemType: "Мясо",
          itemTitle: "Говядина",
          itemPrice: "1000",
          itemCurreny: "₽",
          itemLocation: "Тамбов",
          itemPicUrl: "http://localhost:3000/uploaded/beef.jpeg",
        },
        {
          itemId: 4712,
          itemType: "Мясо",
          itemTitle: "Курица",
          itemPrice: "1000",
          itemCurreny: "₽",
          itemLocation: "Тамбов",
          itemPicUrl: "http://localhost:3000/uploaded/chicken.jpeg",
        },
        {
          itemId: 4712,
          itemType: "Мясо",
          itemTitle: "Гусь",
          itemPrice: "1500",
          itemCurreny: "₽",
          itemLocation: "Котовск",
          itemPicUrl: "http://localhost:3000/uploaded/chicken.jpeg",
        },
      ];
      
    return (
    <div className="site-card-border-less-wrapper">
      <Card title="Домашная Страница">
        <HomeItemsListBlock
          mainTitle="Купить вокруг Вас"
          itemsToBuy={itemsToBuy}
        />
        <HomeItemsListBlock
          mainTitle="Купили недавно вокруг Вас"
          itemsToBuy={itemsRecentlyBought}
        />
        <HomeItemsListBlock
          mainTitle="Рекомендованные товары"
          itemsToBuy={itemsRecommended}
        />
      </Card>
    </div>
    ); 
}