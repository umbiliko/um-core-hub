import { SimpleObject } from '@um/types';

export default interface UserProfile extends SimpleObject {
    name: string;
    gender: string;
    location: string;
    website: string;
    picture: string;
}