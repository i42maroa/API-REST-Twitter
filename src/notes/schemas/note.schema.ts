import {Schema} from 'mongoose';


export const NoteSchema = new Schema({
  title: {type:String, required:true},
  content: String,
  favorite: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});