import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => {
  res.status(200).json({});
});

export default routes;
