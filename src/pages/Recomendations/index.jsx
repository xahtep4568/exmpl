import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button } from "antd";
import { Card } from "antd";
import RecomendListBlock from "../../components/RecomendListBlock";

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
          itemTitle: "Гусь1",
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
          itemTitle: "Арабский кролик",
          itemPrice: "1500",
          itemCurreny: "₽",
          itemLocation: "Рассказово",
          itemPicUrl: "http://localhost:3000/uploaded/pork.png",
        },
        {
            itemId: 4112,
            itemType: "Мясо",
            itemTitle: "Арабская свинина",
            itemPrice: "1500",
            itemCurreny: "₽",
            itemLocation: "Рассказово",
            itemPicUrl: "http://localhost:3000/uploaded/pork.png",
          },
      ];
      
  const { recomendId } = useParams();
  let navigate  = useNavigate(); 
  let location  = useLocation(); 
  
  function visitOrders() {
    navigate('/recomendations')
  }

  return (
    <div className="site-card-border-less-wrapper">
    <Card>
      <RecomendListBlock
        mainTitle="Рекомендованные товары в вашем регионе"
        itemsToBuy={itemsToBuy}
      />
    </Card>
  </div>
       );
};
