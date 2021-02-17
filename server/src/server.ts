//utilização do insomnia
import express from 'express';
import cors from 'cors'; //permite que aplicações em endereços diferentes possam acessar a API
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //localhost:3333 => port 3333