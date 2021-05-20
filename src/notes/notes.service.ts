import { Injectable } from '@nestjs/common';

import {Note} from './interfaces/Note'

@Injectable()
export class NotesService {  
    
    notes: Note[] = [{
        id:1,
        title:"Testing",
        content:"testing description",
        favorite:true
    },{
        id:2,
        title:"Testing2",
        content:"testing descriptions ",
        favorite:false
    } ,{
        id:3,
        title:"Testing3",
        content:"testing descriptionss ",
        favorite:true
    }    
    ];

    getNotes(): Note[]{
        return this.notes;
    }

    getSingleNote(id:number) : Note {
        return this.notes.find(notes => notes.id === id);
    }
}
