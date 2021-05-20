import {Document} from 'mongoose'

export interface INote extends Document{
    readonly id?: number;
    readonly title: string;
    readonly content:string;
    readonly favorite:boolean;
    readonly createdAt: Date;
}