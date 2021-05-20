import { Controller, Get, Post,Put, Param, Body, Res, HttpStatus} from '@nestjs/common';


import {CreateNoteDto} from './dto/create-note.dto'
import { INote } from './interfaces/note.interface';

import { NotesService} from "./notes.service";

@Controller('notes')
export class NotesController {
    constructor(private noteService: NotesService){}

    @Get()
    async getNotes(@Res() res){
        const notes =  await this.noteService.getNotes();
        return res.status(HttpStatus.OK).json({
            notes
        })
    }

    @Get('/favorites')
    async getNotesFavorite(@Res() res){
        const notes =  await this.noteService.getFavorites();
        return res.status(HttpStatus.OK).json({
            notesFavorites: notes
        })
    }

    @Get(':noteId')
    async getSingleNote(@Res() res, @Param('noteId') noteId){
        const note =  await  this.noteService.getSingleNote(noteId);
        return res.status(HttpStatus.OK).json({
            note
        })
    }

    @Post()
    async createNotes(@Res() res, @Body() createNoteDto: CreateNoteDto){
        const note = await this.noteService.newNote(createNoteDto);
        return res.status(HttpStatus.OK).json({
            message: 'Note Successfully Created',
            note
        });
    }
/*
    @Put(':noteID')
    makeFavorite(@Body() note: CreateNoteDto, @Param('noteID') noteID): string{
        return `update note ${noteID} with content: ${note}`;
    }

    @Put(':noteID')
    updateNote(@Body() note: CreateNoteDto, @Param('noteID') noteID): string{
        return `update note ${noteID} with content: ${note}`;
    }
*/
}
