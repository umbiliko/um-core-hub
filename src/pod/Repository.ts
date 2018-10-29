import { Document, Model } from 'mongoose';
import { SimpleObject } from '@um/types';
import { DbSet } from './DbSet';

export abstract class Repository<T extends SimpleObject> {
    constructor(public model: Model<Document & T>, public dbSet?: DbSet<T>) {
    }
}
