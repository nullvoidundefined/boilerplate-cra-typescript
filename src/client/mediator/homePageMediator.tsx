import React from "react";
import { useNavigate } from "react-router-dom";

import { HomePage } from "../page";

const HomePageMediator = () => {
  const navigate = useNavigate();

  const navigateToItemList = (item: string) => {
    if (item.length) {
      const encodedItem = encodeURIComponent(item);
      let query: string = `?item=${encodedItem}`;
      navigate(`/item-list${query}`);
    }
  };

  return <HomePage onButtonClick={navigateToItemList} />;
};

export { HomePageMediator };
