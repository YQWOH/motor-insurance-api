import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PRODUCT')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productCode: number;

    @Column()
    description: string;

    @Column()
    location: string;

    @Column('decimal', { precision: 5, scale: 2 })
    price: number;
}
