import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    productCode: number;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    location: string;

    @IsNumber()
    price: number;
}
