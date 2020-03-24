/* eslint-disable import/no-cycle */
require('localenv');
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import DriveService from './DriveService';

class App {
  constructor() {
    this.drive = new DriveService();
    this.server = express();
    this.middlewares();
    this.routes();
    this.client();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(helmet());
  }

  routes() {
    this.server.use(routes);
  }

  async client() {
    await this.drive.start();
  }
}
export default new App().server;
