import categories from "./categories.module.scss";
import React, { useEffect, useState } from "react";
import { GET } from "../libs/HTTPS";

function Categories() {
  const listObject = {
    categories: [],
    loading: true,
  };

  const [list, setList] = useState(listObject);

  const getData = () => {
    GET("categories").then((data) =>
      setList({ loading: false, categories: data })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={categories.main}>
      <h1 className={categories.title}>CATEGORIES</h1>
      <form>
        <input />
        <input />
      </form>
      {list.loading ? (
        <h1>loading...</h1>
      ) : (
        <div className={categories.container}>
          {list.categories.map((item) => (
            <div className={categories.card} key={item.id}>
              <h3 className={categories.name}>{item.name}</h3>
              <img
                className={categories.image}
                src={item.image}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
