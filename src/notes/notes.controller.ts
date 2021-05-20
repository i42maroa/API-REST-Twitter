import { Controller, Get, Post,Put, Param, Body } from '@nestjs/common';

@Controller('notes')
export class NotesController {

    @Get()
    getNotes():string{
        return 'Notas';
    }

    @Get(`/favorite`)
    getNotesFavorite():string{
        return 'Notas favoritas';
    }

    @Get(':noteId')
    getSingleNote(@Param('noteId') noteId ): string {
        return `Nota ${noteId}`;
    }

    @Post()
    createNotes(): string{
        return 'return nota';
    }

    @Put(':noteID')
    updateNote(@Body() note: {"title":string;"content":string}, @Param('noteID') noteID): string{
        return `update note ${noteID} with content: ${note}`;
    }

}
