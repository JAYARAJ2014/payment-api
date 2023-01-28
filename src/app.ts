import dotenv from 'dotenv';
import express, { Express } from 'express';
import { notFoundMiddleware } from './middlewares/not-found';
import { errorHandlerMiddleware } from './middlewares/error-handler';
import { stripeRouter } from './routers/stripe';


dotenv.config();

const port: number = Number(process.env.PORT) || 3000;
const app: Express = express();

app.use(express.json());
app.use(express.static('./public'));
app.use(`/stripe`,stripeRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const startup = async () => {
  try {
    app.listen(port, () => {
      console.log('App Started. Listening Port#: ', port);
    });
  } catch (error) {
    console.log(error);
  }
};

startup();
