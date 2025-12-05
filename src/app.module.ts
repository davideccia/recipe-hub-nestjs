import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { MeasurementUnitsModule } from './measurement_units/measurement_units.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot(),
    UsersModule,
    DatabaseModule,
    MeasurementUnitsModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
