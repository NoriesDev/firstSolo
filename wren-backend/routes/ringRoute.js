import express from 'express';
import {     
    allRings,
    oneRing,
    createRing } from '../Controller/ringCon.js';


const ringRouter = express.Router();

ringRouter.route('/').get(allRings);
ringRouter.route('/:id').get(oneRing);
ringRouter.route('/add').post(createRing)

export default ringRouter;