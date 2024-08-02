import { useState } from "react";
import styles from "./Form.module.css";
import { Input, Button } from "@chakra-ui/react";
import axiosInstance from "../../axiosInstance";

const { VITE_API } = import.meta.env;

export default function Form({ setEntries }) {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    date: "",
    price: "",
  });

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axiosInstance.post(`${VITE_API}/events`, inputs);
    if (res.status === 200) {
      setEntries((prev) => [...prev, res.data]);
      setInputs({ title: "", description: "", date: "", price: "" });
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.wrapper}>
      <h3 className={styles.head}>Добавь своё событие:</h3>
      <div className={styles.inputs}>
                <Input
          onChange={changeHandler}
          borderColor="#3f3e3e"
          name="title"
          value={inputs.title}
          placeholder="Название события"
        />
        <Input
          onChange={changeHandler}
          borderColor="#3f3e3e"
          name="description"
          value={inputs.description}
          placeholder="Описание"
        />
        <Input
          onChange={changeHandler}
          borderColor="#3f3e3e"
          name="date"
          value={inputs.date}
          placeholder="Дата проведения события"
        />
        <Input
          onChange={changeHandler}
          borderColor="#3f3e3e"
          name="price"
          value={inputs.price}
          placeholder="Цена билета"
        />
      </div>
      <div className={styles.btns}>
        <Button type="submit" colorScheme="blue">
          Создать
        </Button>
      </div>
    </form>
  );
}
