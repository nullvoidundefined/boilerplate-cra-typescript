import React from "react";

type ItemDetailPageProps = {
  name: string;
};

const ItemDetailPage = ({ name }: ItemDetailPageProps) => {
  return (
    <>
      <h3>Item Details</h3>
      <b>{name}</b>
    </>
  );
};

export { ItemDetailPage };
