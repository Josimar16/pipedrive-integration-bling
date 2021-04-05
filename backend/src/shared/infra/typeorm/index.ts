import { createConnection } from 'typeorm';

createConnection({
  type: 'mongodb',
  url: process.env.MONGO_CONNECTION || '',
  useUnifiedTopology: true,
  entities: [
    './src/modules/**/schemas/**.ts'
  ]
});