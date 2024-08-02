import Form from "../../components/Form/Form";
import styles from "./ProfilePage.module.css";
import { useState, useEffect } from "react";
import axiosInstance from "../../axiosInstance";

export default function ProfilePage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/events`)
      .then((res) => {
        setEntries(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={styles.wrapper}>
      <Form setEntries={setEntries} />
    </div>
  );
}
