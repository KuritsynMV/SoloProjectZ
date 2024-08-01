import './App.css';
import Root from './Root';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import axiosInstance, { setAccessToken } from './axiosInstance';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosInstance.get(`api/v1/tokens/refresh`).then((res) => {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root user={user} setUser={setUser} />,
      children: [
        {
          path: '/',
          element: user.username ? (
            <HomePage />
          ) : (
            <p>Зарегистрируйтесь или войдите</p>
          ),
        },
        {
          path: '/signin',
          element: <SigninPage setUser={setUser} />,
        },
        {
          path: '/signup',
          element: <SignupPage setUser={setUser} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

//? fetch('http://localhost:3100/api/v1/tasks', {
//?   method: 'POST',
//?   headers: {
//?     'Content-Type': 'application/json',
//?     'Authorization': accessToken,
//?   },
//?   credentials: 'include',
//?   body: JSON.stringify(obj)
//? });

//* axios.post('http://localhost:3100/api/v1/tasks', obj, {
//*   withCredentials: true,
//* });
