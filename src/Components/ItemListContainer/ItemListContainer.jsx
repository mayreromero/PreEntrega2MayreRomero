import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { alimentos } from "../alimentosMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  console.log(categoryId);

  const [items, setItems] = useState([]);

  const alimentosFiltrados = alimentos.filter(
    (elemento) => elemento.category === categoryId
  );

  useEffect(() => {
    const alimentosList = new Promise((resolve, reject) => {
      resolve(categoryId ? alimentosFiltrados : alimentos);
    });

    alimentosList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
