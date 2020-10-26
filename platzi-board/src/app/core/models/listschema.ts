import { CardSchema } from './index';

export interface ListSchema {
    id: string;
    name: string;
    cards: CardSchema[];
}