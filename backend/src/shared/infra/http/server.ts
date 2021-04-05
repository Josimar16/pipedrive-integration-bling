import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../../swagger.json';

import '../typeorm';

import '../../container';

import { CronRoutineInsertion, CronRoutineSelection } from '../../../modules/deals/utils/Routine/CronRoutine';

import { router } from './routes';
import cors from 'cors';
import { AppError } from '../../errors/AppError';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const cronRoutineInsertion = CronRoutineInsertion();
const cronRoutineSelection = CronRoutineSelection();

cronRoutineInsertion.start();

cronRoutineSelection.start();

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message
    });
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error - ${err.message}`
  });
});

app.listen(process.env.APP_PORT || 3333, () => {
  console.log(`Listening in port ${process.env.APP_PORT || 3333} 🚀`);
});
