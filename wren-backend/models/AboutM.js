import { Schema, model, ObjectId } from 'mongoose';

const AboutSchema = new Schema({
    title: {
      type: String,
      maxlength: 255,
      match: [
        /^[a-zA-Z\s.-]+$/,
        'must contain only letters and max 255 characters long',
      ],
    },
    text: [{
      type: ObjectId,
      ref: 'Text'
    }],
});
  
export default model('About', AboutSchema);