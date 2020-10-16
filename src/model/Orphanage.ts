import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('orphanages') 
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name:string;
    
    @Column()
    latitude: number;
    
    @Column()
    longitute: number;
    
    @Column()
    about:string;
    
    @Column()
    instructions:string;
    
    @Column()
    opengin_hours:string;
    
    @Column()
    opengin_on_weekends:boolean;
}