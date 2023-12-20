import { Schema, model } from 'mongoose';

const textSchema = new Schema({

      headline: {
        type: String,
        maxlength: 255,
      },
      paragraph: {
         type: String,
      }
  });
  
  export default model('Text', textSchema);