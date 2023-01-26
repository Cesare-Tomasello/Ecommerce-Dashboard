import categories from "./categories.module.scss";
import React, { useEffect, useState } from "react";
import { GET, POST, DELETE } from "../libs/HTTPS";
import { ImBin } from "react-icons/im";

// DA AGGIUNGERE LA PUT

function Categories() {
  const listObject = {
    categories: [],
    loading: true,
  };

  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  const [list, setList] = useState(listObject);
  const [showModal, setShowModal] = useState(false);

  const getData = () => {
    GET("categories").then((data) =>
      setList({ loading: false, categories: data })
    );
  };

  const submitForm = (e) => {
    e.preventDefault();
    POST("categories", form).then((data) => {
      console.log(data);
      if (data.status === 201) {
        setShowModal(false);
        getData();
      }
    });
  };

  const deleteElement = (id) => {
    DELETE("categories", +id).then((data) => {
      console.log(data);
      getData();
    });
  };

  const handleForm = (input, e) => {
    setForm({
      ...form,
      [input]: e.target.value,
    });
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
          <form
            onSubmit={(e) => submitForm(e)}
            className={categories.modalForm}
          >
            <input
              onChange={(e) => handleForm("name", e)}
              className={categories.formInput}
              type="text"
              placeholder="Category"
            />
            <input
              onChange={(e) => handleForm("image", e)}
              className={categories.formInput}
              type="text"
              placeholder="Image Url"
            />
            <button className={categories.addBtn}>Add</button>
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
              <button
                className={categories.deleteBtn}
                onClick={() => deleteElement(item.id)}
              >
                <ImBin />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
