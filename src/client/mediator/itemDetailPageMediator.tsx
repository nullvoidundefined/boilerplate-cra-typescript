import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingCard } from "../component";
import { ItemDetailPage } from "../page";
import { Item } from "../../type";

import { getItemDetail } from "../service";

const ItemDetailPageMediator = () => {
  const [itemDetail, setItemDetail] = useState<Item | undefined>();

  const navigate = useNavigate();

  const handleGetItemDetailError = (error: string) => {
    console.log(error);
  };

  const updateItemDetail = (newItemDetail: Item) => {
    setItemDetail(newItemDetail);
  };

  useEffect(() => {
    const placeId = new URLSearchParams(window.location.search).get("placeId");
    if (placeId) {
      getItemDetail(
        window.location.search,
        updateItemDetail,
        handleGetItemDetailError
      );
    } else {
      navigate("/home");
    }
  }, [navigate]);

  if (!itemDetail) {
    return <LoadingCard />;
  } else {
    const {
      name,
    } = itemDetail;
    return (
      <ItemDetailPage
        name={name}
      />
    );
  }
};

export { ItemDetailPageMediator };
