import {  Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity('users')
export class User {
    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column( {nullable: false})
    password: string;

    @Column()
    phoneNumber: string;

    @Column()
    address: string;

    @Column()
    role: string;

    @Column()
    isActive: boolean;

    @DeleteDateColumn() //deja registro de cuando se elimina un registro
    deletedAt: Date;

}
