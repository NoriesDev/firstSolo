import { Schema, model, ObjectId } from 'mongoose';

const ringSchema = new Schema({

      headline: {
        type: String,
        maxlength: 255,
      },
      imgSrc: {
         type: String,
      },
      shopLink: {
        type: String,
     },
     text: [{
      type: ObjectId,
      ref: 'Text'
    }],
  });
  
  export default model('Ring', ringSchema);