import { PartialType } from '@nestjs/mapped-types';
import { CreateMeasurementUnitDto } from './create-measurement_unit.dto';

export class UpdateMeasurementUnitDto extends PartialType(CreateMeasurementUnitDto) {}
