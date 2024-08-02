import styles from './DetailedPage.module.css';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from '../../axiosInstance';
import {
    Card,
    Heading,
    Text,
    Image,
    Button,
  } from '@chakra-ui/react';

function DetailedPage () {
  const [card, setCard] = useState({});
  const { id } = useParams();


useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/events/${id}`)
      .then((res) => {
        setCard(res.data);
        console.log(setCard)
      })
      .catch((err) => console.error(err));
  }, [id]);

  const back = useNavigate();

  return (
    <Card style={{ width: "18rem" }}>
    <Image src={card.image} alt={card.title} />
    <Heading>{card.title}</Heading>
    <Text>{card.description}</Text>
    <Text>Дата проведения: {card.date}</Text>
    <Text>Цена билета: {card.price}</Text>
    <Button onClick={() => back('/')}>Назад</Button>
  </Card>
  );
}

export default DetailedPage;

      {/* <div>Просмотр карточек колоды: {theme.id}</div>
      <div>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              marginBottom: "10px",
              border: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <h3>{card.question}</h3>
            <p>{card.answer}</p>
          </div>
        ))}
      </div>
      <div>
        <Link to="/decklist">
          <button>Вернуться к списку колод</button>
        </Link>
      </div> */}

      //   useEffect(() => {
//     (async function () {
//       const response = await fetch(`/api/v1.0/entries/${id}`);
//       const data = await response.json();
//       setCard(() => data);
//       console.log("data:", data);
//     })();
//   }, []);