import categories from "./categories.module.scss";
import React, { useEffect, useState } from "react";
import { GET } from "../libs/HTTPS";

// DA AGGIUNGERE POST/DELETE

function Categories() {
  const listObject = {
    categories: [],
    loading: true,
  };

  const [list, setList] = useState(listObject);
  const [showModal, setShowModal] = useState(false);

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
      <button
        className={categories.openBtn}
        disabled={showModal ? true : false}
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      {showModal && (
        <div className={categories.overlay}>
          <form className={categories.modalForm}>
            <input
              className={categories.formInput}
              type="text"
              placeholder="Category"
            />
            <input
              className={categories.formInput}
              type="text"
              placeholder="Image Url"
            />
            <button
              className={categories.closeBtn}
              onClick={() => setShowModal(false)}
            >
              Close Modal
            </button>
          </form>
        </div>
      )}

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
