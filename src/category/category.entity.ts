import { Book } from "src/book/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    category: string;

    @OneToMany(() => Book, book => book.category)
    books: Book[];
    
}