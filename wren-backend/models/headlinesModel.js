import { Schema, model } from 'mongoose';

const headlineSchema = new Schema({

      title: {
        type: String,
        maxlength: 255,
      },
      headline: {
        type: String,
        maxlength: 255,
      },
      paragraph: {
         type: String,
      }
  });
  
  export default model('Headline', headlineSchema);