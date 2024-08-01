// import { useState, useEffect } from 'react';
// import Form from '../../components/Form/Form';
// import List from '../../components/List/List';
import styles from './HomePage.module.css';
// import axiosInstance from '../../axiosInstance';

export default function HomePage() {
  // const [entries, setEntries] = useState([]);

  // useEffect(() => {
  //   axiosInstance
  //     .get(`${import.meta.env.VITE_API}/tasks`)
  //     .then((res) => {
  //       setEntries(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div className={styles.wrapper}>
      {/* <img src='https://kartinki.pics/pics/uploads/posts/2022-07/1658453487_3-kartinkin-net-p-samaya-malenkaya-sobachka-zhivotnie-krasiv-3.jpg' /> */}
      {/* <Form setEntries={setEntries} />
      <List data={entries} setEntries={setEntries} /> */}
    </div>
  );
}

