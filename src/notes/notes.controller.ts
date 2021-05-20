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

    @Get(`/favorites`)
    getNotesFavorite():Note[]{
        return this.noteService.getFavorites();
    }

    @Get(':noteId')
    getSingleNote(@Param('noteId') noteId ): Note {
        return this.noteService.getSingleNote(noteId);
    }

    @Post()
    createNotes(@Body() note: CreateNoteDto): string{
  
        return 'create note';
    }

    @Put(':noteID')
    makeFavorite(@Body() note: CreateNoteDto, @Param('noteID') noteID): string{
        return `update note ${noteID} with content: ${note}`;
    }

    @Put(':noteID')
    updateNote(@Body() note: CreateNoteDto, @Param('noteID') noteID): string{
        return `update note ${noteID} with content: ${note}`;
    }

}
