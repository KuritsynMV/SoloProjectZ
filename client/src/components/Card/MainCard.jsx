import styles from './MainCard.module.css';
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; 
// import axiosInstance from '../../axiosInstance';

export default function MainCard({ entry, setEntries }) {
  // const deleteHandler = async () => {
  //   const res = await axiosInstance.delete(
  //     `${import.meta.env.VITE_API}/tasks/${entry.id}`
  //   );

  //   // entry.userId === user.id

  //   if (res.status === 200) {
  //     setEntries((prev) => prev.filter((el) => el.id !== entry.id));
  //   }
  // };

  return (
    <div className={styles.wrapper}>

      <Card bgColor='#313133' className={styles.container} maxW='sm'>
  <CardBody>
    <Image
      style={{ width: "420px", height: "240px" }}
      src={entry?.image}
      alt='image'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color='green.300'>{entry?.title}</Heading>
      <Text>
      {entry?.description}
      </Text>
      <Text color='green.600' fontSize='2xl'>
      {entry?.date}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      {entry?.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      
    <Link as={RouterLink} to={`/detailed/${entry.id}`}>
              <Button variant='solid' colorScheme='blue'>Подробнее</Button>
            </Link>
      
      <Button variant='ghost' colorScheme='blue'>
        В избранное
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  );
}

      {/* <Card bgColor='#313133' className={styles.container} maxW='sm'>
        <CardBody className={styles.body}>
          <Stack mt='3' spacing='3'>
            <Heading size='md'>{entry?.title}</Heading>
            <Text>{entry?.description}</Text>
            <Text>{entry?.date}</Text>
            <Text>{entry?.price}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Подробнее
            </Button>
            <Popover placement='top' className={styles.popover}>
              <PopoverTrigger>
                <Button 
                // onClick={deleteHandler}
                variant='ghost' 
                colorScheme='blue' >
                  В избранное
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                  Вы действительно хотите удалить запись?
                </PopoverHeader>
                <PopoverBody>
                  <Button
                    // onClick={deleteHandler}
                    variant='ghost'
                    colorScheme='blue'
                  >
                    Удалить
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </ButtonGroup>
        </CardFooter>
      </Card> */}