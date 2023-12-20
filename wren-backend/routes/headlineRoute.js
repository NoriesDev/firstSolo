import express from 'express';
import {     allHeadline,
    oneHeadline,
    createHeadline } from '../Controller/headlineCon.js';


const headlineRouter = express.Router();

headlineRouter.route('/').get(allHeadline);
headlineRouter.route('/:id').get(oneHeadline);
headlineRouter.route('/add').post(createHeadline);

export default headlineRouter;