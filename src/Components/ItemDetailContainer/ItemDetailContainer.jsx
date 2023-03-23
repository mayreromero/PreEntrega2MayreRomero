import React from "react";
import { useParams } from "react-router-dom";

import { alimentos } from "../alimentosMock";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const alimento = alimentos.find((element) => element.id === Number(id));
  console.log(alimento);
  return (
    <div>
      <h1>{alimento.title}</h1>
      <img src={alimento.img} alt="" />
    </div>
  );
};

export default ItemDetailContainer;
