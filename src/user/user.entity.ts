import { Entity, PrimaryGeneratedColumn,Column, CreateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

 @Entity('users')
export  class User {
     @PrimaryGeneratedColumn()
    id: number;
     @Column({length: 100})
    firstName: string;
     @Column({length: 100})
    lastName: string;
     @Column({unique: true})
    email: string;
     @Column()
    password: string;
     @CreateDateColumn()
    createdAt: Date;
     @CreateDateColumn()
    updatedAt: Date;

     async hashPassword() {
         this.password =await bcrypt.hash(this.password, 10);
 }
}