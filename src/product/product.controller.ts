import { Controller, Get, Post, Put, Delete, Body, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { RolesGuard } from '../auth/roles.guard';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    findAll(@Query('productCode') productCode?: number, @Query('location') location?: string) {
        return this.productService.findAll(productCode, location);
    }

    @Post()
    @UseGuards(RolesGuard)  // Only admin can create products
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Put()
    @UseGuards(RolesGuard)  // Only admin can update products
    update(@Query('productCode') productCode: number, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(productCode, updateProductDto);
    }

    @Delete()
    @UseGuards(RolesGuard)  // Only admin can delete products
    remove(@Query('productCode') productCode: number) {
        return this.productService.delete(productCode);
    }
}