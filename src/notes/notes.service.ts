import { Injectable } from '@nestjs/common';
import { INote } from './interfaces/note.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNoteDto } from './dto/create-note.dto';


@Injectable()
export class NotesService {   
    constructor(@InjectModel('Note') private readonly noteModel: Model<INote>) {}
  
    async getNotes(): Promise<INote[]>{
        return await this.noteModel.find();
    }

    async getFavorites(): Promise<INote[]>{
        return await this.noteModel.find({favorite:true});
    }

    async getSingleNote(id:string):Promise<INote> {
        return await this.noteModel.findById(id);      
    }
    
    async newNote(createNoteDto: CreateNoteDto): Promise<INote>{
        const note = new this.noteModel(createNoteDto);
        return await note.save();
    }

    async deleteNote(id:string) : Promise<INote> {
        return await this.noteModel.findByIdAndDelete(id);      
    }

    async updateNote(id:string, createNoteDto: CreateNoteDto) : Promise<INote> {
        const noteUpdate =  await this.noteModel.findByIdAndUpdate(id,createNoteDto, {new:true});  
        return  noteUpdate; 
    }
}
