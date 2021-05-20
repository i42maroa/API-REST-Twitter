import { Controller, Get, Post,Put, Param, Body } from '@nestjs/common';


import {CreateNoteDto} from './dto/create-note.dto'
import { Note } from './interfaces/Note';

import { NotesService} from "./notes.service";

@Controller('notes')
export class NotesController {
    constructor(private noteService: NotesService){}

    @Get()
    getNotes():Note[]{
        return this.noteService.getNotes();
    }

    @Get(`/favorite`)
    getNotesFavorite():string{
        return 'Notas favoritas';
    }

    @Get(':noteId')
    getSingleNote(@Param('noteId') noteId ): Note {
        console.log(noteId)
        return this.noteService.getSingleNote(noteId);
    }

    @Post()
    createNotes(): string{
        return 'return nota';
    }

    @Put(':noteID')
    updateNote(@Body() note: CreateNoteDto, @Param('noteID') noteID): string{
        return `update note ${noteID} with content: ${note}`;
    }

}
