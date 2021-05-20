import { Controller, Get, Post,Put, Param, Body, Res, HttpStatus, NotFoundException, Delete, Query} from '@nestjs/common';


import {CreateNoteDto} from './dto/create-note.dto'
import { NotesService} from "./notes.service";

@Controller('notes')
export class NotesController {
    constructor(private noteService: NotesService){}

    @Get()
    async getNotes(@Res() res){
        const notes =  await this.noteService.getNotes();
        if(!notes) throw new NotFoundException('There are issues to show notes');
        return res.status(HttpStatus.OK).json({
            notes
        })
    }

    @Get('/list-favorites')
    async getNotesFavorite(@Res() res){
        const notes =  await this.noteService.getFavorites();
        if(!notes) throw new NotFoundException('Not exist favorite notes');
        return res.status(HttpStatus.OK).json({
            notesFavorites: notes
        })
    }

    @Get(':noteId')
    async getSingleNote(@Res() res, @Param('noteId') noteId){
        const note =  await this.noteService.getSingleNote(noteId);
        if(!note) throw new NotFoundException('Note does not exists');
        return res.status(HttpStatus.OK).json(note);
    }

    @Post()
    async createNotes(@Res() res, @Body() createNoteDto: CreateNoteDto){
        const note = await this.noteService.newNote(createNoteDto);
        return res.status(HttpStatus.OK).json({
            message: 'Note Successfully Created',
            note
        });
    }

    @Delete('/delete')
    async deleteNote(@Res() res, @Query('noteID') noteID){
        const noteDel = await this.noteService.deleteNote(noteID);
        if(!noteDel) throw new NotFoundException('Note does not exists');
        return res.status(HttpStatus.OK).json({
            message: "Note Deleted Succesfull",
            noteDel
        });
    }

    @Put('/favorite')
    async updateNote(@Res() res,  @Query('id') noteID){
       const upNote = await this.noteService.favoriteNote(noteID);
       if(!upNote) throw new NotFoundException('Note does not exists');
       return res.status(HttpStatus.OK).json({
        message: "Note Updated Succesfull",
        upNote
    });
    }
}
