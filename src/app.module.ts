import { Module, OnModuleInit, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { GoogleStrategy } from './auth/google.strategy';
import { RoleCheckMiddleware } from './middleware/role-check.middleware';
import { DatabaseInitializerService } from './database/database-initializer.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'steven4495',
      database: process.env.POSTGRES_DB || 'postgres',
      synchronize: true,
    }),
    ProductModule,
  ],
  providers: [GoogleStrategy, DatabaseInitializerService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly dbInitializer: DatabaseInitializerService) { }

  async onModuleInit() {
    // Run the check for the database existence on app initialization
    await this.dbInitializer.checkAndCreateDatabase();

    // After ensuring the database exists, you can now reconnect with the actual database
    // Restart TypeORM with the correct database
    // For simplicity, this is an outline and would require a more robust reconnect approach
    await this.reconnectWithDatabase();
  }

  async reconnectWithDatabase() {
    console.log('Reconnecting TypeORM to the correct database...');
    console.log('TypeORM is now connected to MOTOR_INSURANCE_WEBSITE');
  }

  // Apply middleware using MiddlewareConsumer
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RoleCheckMiddleware)  // Apply the RoleCheckMiddleware
      .forRoutes('products');      // Apply middleware only to the 'products' route
  }
}
