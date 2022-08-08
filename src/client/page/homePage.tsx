import React, { ChangeEvent, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { SelectOption } from "../../type";
import { ITEM } from "../constant";

type HomePageProps = {
  onButtonClick: (item: string, keyword: string) => void;
};

const HomePage = ({ onButtonClick }: HomePageProps) => {
  const [keyword, setKeyword] = useState("");
  const [item, setItem] = useState("");

  const updateKeyword = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setKeyword(value);
  };

  const updateItem = (itemOption: string) => {
    setItem(itemOption);
  };

  return (
    <>
      <h3>Select A Item</h3>
      <div className="mb-2">Keyword (Optional)</div>
      <input
        className="form-control mb-3"
        onChange={updateKeyword}
        placeholder="Ex: Restaurant, Grocery Store, Camping..."
        value={keyword}
      />
      <div className="mb-2">Item (Required)</div>
      <ListGroup className="mb-3">
        {ITEM.ITEM_OPTIONS.map(
          (itemOption: SelectOption, index: number) => {
            const key = `item-options-item-option-${index}`;
            const { label, value } = itemOption;
            return (
              <ListGroup.Item
                action
                active={item === value}
                key={key}
                onClick={() => updateItem(value)}
              >
                {label}
              </ListGroup.Item>
            );
          }
        )}
      </ListGroup>
      <Button
        disabled={!item}
        onClick={() => onButtonClick(item, keyword)}
      >
        Submit
      </Button>
    </>
  );
};

export { HomePage };
