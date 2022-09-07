import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FileKita {
    // Mendeklarasikan nama kolom
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nama : string;

    @Column()
    deskripsi : string;

    @Column()
    isPublik : boolean;
    
}