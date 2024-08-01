//! Установить cors
//! npm i cors

//! Подключаем в app.js
const corsConfig = {
  origin: ['http://localhost:5173'],
  credentials: true,
};
app.use(cors(corsConfig));

//! Удаляем прокси из vite.config.js
//! В инстансе аксиоса меняем baseUrl на url нашего api
//! Все запросы переписываем на axiosInstance

//! В перехватчик добавляем креды

axiosInstance.interceptors.request.use((config) => {
  config.withCredentials = true;
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Jays ${accessToken}`;
  }
  return config;
});
