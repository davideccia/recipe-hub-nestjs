import { Module } from '@nestjs/common';
import { MeasurementUnitsService } from './measurement_units.service';
import { MeasurementUnitsController } from './measurement_units.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MeasurementUnitsController],
  providers: [MeasurementUnitsService],
})
export class MeasurementUnitsModule {}
