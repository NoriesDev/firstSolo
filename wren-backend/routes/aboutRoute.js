import express from 'express';
import { about, oneText, createAbout, createText } from '../Controller/aboutCon.js';


const aboutRouter = express.Router();

aboutRouter.route('/').get(about);
aboutRouter.route('/:id').get(oneText);
aboutRouter.route('/add').post(createAbout);
aboutRouter.route('/add-text').post(createText)

export default aboutRouter;