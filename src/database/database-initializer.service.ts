import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseInitializerService {
    constructor(private dataSource: DataSource) { }

    async checkAndCreateDatabase() {
        // Get a raw connection without specifying a database
        const queryRunner = this.dataSource.createQueryRunner();

        try {
            // Connect to the database
            await queryRunner.connect();

            // Check if the database exists
            const result = await queryRunner.query(
                `SELECT datname FROM pg_database WHERE datname = 'MOTOR_INSURANCE_WEBSITE'`
            );

            if (result.length === 0) {
                // Database does not exist, create it
                await queryRunner.query(`CREATE DATABASE "MOTOR_INSURANCE_WEBSITE"`);
                console.log('Database "MOTOR_INSURANCE_WEBSITE" created successfully.');
            } else {
                console.log('Database "MOTOR_INSURANCE_WEBSITE" already exists.');
            }
        } catch (error) {
            console.error('Error checking or creating the database:', error);
        } finally {
            await queryRunner.release();
        }
    }
}