import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MeasurementUnitsService } from './measurement_units.service';
import { Prisma } from 'src/generated/prisma/client';

@Controller('measurement-units')
export class MeasurementUnitsController {
  constructor(
    private readonly measurementUnitsService: MeasurementUnitsService,
  ) {}

  @Post()
  create(@Body() createMeasurementUnitDto: Prisma.MeasurementUnitCreateInput) {
    return this.measurementUnitsService.create(createMeasurementUnitDto);
  }

  @Get()
  findAll() {
    return this.measurementUnitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.measurementUnitsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMeasurementUnitDto: Prisma.MeasurementUnitUpdateInput,
  ) {
    return this.measurementUnitsService.update(+id, updateMeasurementUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.measurementUnitsService.remove(+id);
  }
}
