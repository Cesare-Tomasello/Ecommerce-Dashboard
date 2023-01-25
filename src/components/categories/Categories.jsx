import categories from "./categories.module.scss";
import React, { useEffect, useState } from "react";
import { GET } from "../libs/HTTPS";

function Categories() {
  const listObject = {
    categories: [],
    loading: true,
  };

  const [list, setList] = useState(listObject);

  useEffect(() => {
    GET("categories").then((data) =>
      setList({ loading: false, categories: data })
    );
  }, []);

  return (
    <div className={categories.main}>
      <h1 className={categories.title}>CATEGORIES</h1>
      {/* {listObject.loading ? "loading..." : "caricato"} */}
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
    </div>
  );
}

export default Categories;
