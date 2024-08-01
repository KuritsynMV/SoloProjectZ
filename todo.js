//NOTE на сервере:----------------------------------------------------------------

//* - npm i cors

//? в app.js:
const cors = require('cors');
const corsConfig = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
};
app.use(cors(corsConfig));

//NOTE на клиенте:----------------------------------------------------------------

//TODO - в vite.config.js удалить проксирование:

//! было------------
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        [process.env.VITE_API]: {
          target: process.env.VITE_TARGET,
          changeOrigin: true,
        },
      },
      port: parseInt(process.env.VITE_PORT),
    },
  });
};

//* стало------------

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
  });
};

//TODO - в .env удалить лишние переменные и оставить только путь до API:
//* VITE_API=http://localhost:3131/api

//TODO - в axiosInstance поменять baseUrl до API и добавить креды в перехватчике:
//* baseURL: import.meta.env.VITE_API

//* axiosInstance.interceptors.request.use((config) => {
//*   config.withCredentials = true;

//TODO - удалить лишние пути во всех запросах:
//* Например: 
useEffect(() => {
  setIsLoading(true);
  axiosInstance.get(`/tokens/refresh`).then((res) => {
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
    setIsLoading(false);
  });
}, []);

//* Инстанс итак стучится в http://localhost:3131/api, в самом запросе можно добавить только URN (/tokens/refresh), она приклеится к URL