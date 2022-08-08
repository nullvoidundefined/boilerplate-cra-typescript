import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { LoadingCard, MessageCard } from "../component";
import { getItemList } from "../service";
import { Item } from "../../type";

const ItemListPage = () => {
  const [itemList, setItemList] = useState<Item[] | undefined>();

  const navigate = useNavigate();

  const handleGetItemListError = (error: string) => {
    console.log(error);
  };

  const navigateToItemDetailPage = (itemId: string) => {
    navigate(`/item-detail?itemId=${itemId}`);
  };

  const updateItemList = (newItemList: Item[]) => {
    setItemList(newItemList);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const item = searchParams.get("item");
    if (item) {
      const { search: searchParams } = window.location;
      getItemList(searchParams, updateItemList, handleGetItemListError);
    } else {
      navigate("/home");
    }
  }, [navigate]);

  if (!itemList) {
    return <LoadingCard />;
  } else if (!itemList.length) {
    return (
      <MessageCard
        icon="error"
        text="Try searching again"
        title="No items match your search"
      />
    );
  } else {
    return (
      <>
        <h3>Item List</h3>
        <ListGroup className="mb-3">
          {itemList
            ? itemList.map((item: Item, index: number) => {
                const key = `itemList-item-${index}`;
                const { name, id: itemId } = item;
                return (
                  <ListGroup.Item
                    action
                    key={key}
                    onClick={() => navigateToItemDetailPage(itemId)}
                  >
                    <span className="mr-3">{name}</span>
                  </ListGroup.Item>
                );
              })
            : null}
        </ListGroup>
      </>
    );
  }
};

export { ItemListPage };
