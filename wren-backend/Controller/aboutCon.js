import ErrorStatus from '../utils/errorStatus.js';
import AboutModel from '../models/AboutM.js';
import textModel from '../models/AboutModel.js'

const about = async (req, res, next) => {
    try {
        const dbAbout = await AboutModel.find().populate('text');
        return res.json(dbAbout);
    } catch (error){
        next (error);
    }
};

const oneText = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[a-f\d]{24}$/i)) throw new ErrorStatus('Can not find Id', 400);
        const findText= await textModel.findById(id);
        return res.json(findText)
    } catch (error) {
        next(error);
    }
};


const createText = async (req, res, next) => {
    try {
        const { headline, paragraph } = req.body;
        if (!headline || !paragraph) {
            return res.status(400).json({ error: 'Headline and paragraph are required.' });
        }

        const newText = await textModel.create({
            headline,
            paragraph
        });

        return res.json('Text created');
    } catch (error) {
        next(error);
    }
};

const createAbout = async (req, res, next) => {
    try {
        const { title, text } = req.body; 
        if (!title || !text) {
            return res.status(400).json({ error: 'title and text are required.' });
        }
        const about = await AboutModel.create({ title, text });

        return res.json('About section created');
    } catch (error) {
        next(error);
    }
};



export {
    about,
    oneText,
    createText,
    createAbout,
}