import ErrorStatus from '../utils/errorStatus.js';
import headlineModel from '../models/headlinesModel.js'

const allHeadline = async (req, res, next) => {
    try {
        const dbHeadline = await headlineModel.find();
        return res.json(dbHeadline);
    } catch (error){
        next (error);
    }
};

const oneHeadline = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[a-f\d]{24}$/i)) throw new ErrorStatus('Can not find Id', 400);
        const singleHeadline= await headlineModel.findById(id);
        return res.json(singleHeadline)
    } catch (error) {
        next(error);
    }
};


const createHeadline = async (req, res, next) => {
    try {
        const { title, headline, paragraph } = req.body;
        if (!title || !headline || !paragraph) {
            return res.status(400).json({ error: 'title, Headline and paragraph are required.' });
        }

        const newHeadline = await headlineModel.create({
            title,
            headline,
            paragraph
        });

        return res.json('Text created');
    } catch (error) {
        next(error);
    }
};




export {
    allHeadline,
    oneHeadline,
    createHeadline
}