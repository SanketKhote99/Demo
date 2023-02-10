import { Book } from "src/book/book.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(type => Book, book => book.author)
    @JoinColumn()
    books: Book[];
}