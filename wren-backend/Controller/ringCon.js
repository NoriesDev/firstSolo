import ErrorStatus from '../utils/errorStatus.js';
import RingCollection from '../models/RingModel.js';


const allRings = async (req, res, next) => {
    try {
        const allRings = await RingCollection.find().populate('text');
        return res.json(allRings);
    } catch (error){
        next (error);
    }
};

const oneRing = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[a-f\d]{24}$/i)) throw new ErrorStatus('Can not find Id', 400);
        const oneRing = await RingCollection.findById(id).populate('text');
        return res.json(oneRing)
    } catch (error) {
        next(error);
    }
};

const createRing = async (req, res, next) => {
    try {
        const { headline, imgSrc, shopLink, text } = req.body;
        if (!headline || !imgSrc || !shopLink || !text) {
            return res.status(400).json({ error: 'Headline imgSrc, description and shopLink are required.' });
        }

        const newRing = await RingCollection.create({
            headline,
            imgSrc,
            shopLink,
            text
        });

        return res.json('Ring created successfully');
    } catch (error) {
        next(error);
    }
};

export {
    allRings,
    oneRing,
    createRing
}
