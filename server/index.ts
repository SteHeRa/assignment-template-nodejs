import express from 'express';
import router from './router';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 1234;

app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server Listening 👂 at http://localhost:${PORT}`);
});
