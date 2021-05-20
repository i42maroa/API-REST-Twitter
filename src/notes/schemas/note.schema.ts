import {Schema} from 'mongoose';


export const NoteSchema = new Schema({
  title: {type:String, required:true},
  content: {type:String, required:true},
  favorite: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});