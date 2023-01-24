import categories from "./categories.module.scss";
import React, { useEffect, useState } from "react";
import { GET } from "../libs/HTTPS";

function Categories() {
  const listObject = {
    categories: [],
    loading: false,
  };

  const [list, setList] = useState(listObject);

  useEffect(() => {
    GET("categories").then((data) => setList({ ...list, categories: data }));
  }, []);

  return (
    <div className={categories.main}>
      <h1>CATEGORIES</h1>
      {/* DA COMPLETARE */}
      {/* {list.categories.map((item) => (
        <div>{item}</div>
      ))} */}
    </div>
  );
}

export default Categories;
