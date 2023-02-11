import { Author } from "src/author/author.entity";
import { Category } from "src/category/category.entity";
import { Column, Entity,  JoinColumn,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Book{

    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    title : string;

    @ManyToOne(() => Author)
    @JoinColumn({name:"author"})
    author : Author;

    @ManyToOne(()=> Category)
    @JoinColumn({name:"category"})
    category : Category;

    
    
}