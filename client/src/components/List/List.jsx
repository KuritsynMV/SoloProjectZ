import MainCard from '../Card/MainCard';
import styles from './List.module.css';

export default function List({ data, setEntries }) {
  console.log(data);
  return (
    <div className={styles.wrapper}>
      {data.length
        ? data?.map((el) => (
            <MainCard key={el.id} entry={el} setEntries={setEntries} />
          ))
        : null}
    </div>
  );
}
