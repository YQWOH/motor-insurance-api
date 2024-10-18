import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateProductDto {
    @IsNotEmpty()
    productCode: number;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    location: string;

    @IsNumber()
    price: number;
}
