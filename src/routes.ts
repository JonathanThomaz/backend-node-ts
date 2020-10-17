import {Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload';


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.getAll);
routes.get('/orphanages/:id', OrphanagesController.get);
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);

export default routes;