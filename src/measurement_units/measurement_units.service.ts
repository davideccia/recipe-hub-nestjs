import {Injectable} from '@nestjs/common';
import {DatabaseService} from 'src/database/database.service';
import {Prisma} from 'src/generated/prisma/client';

@Injectable()
export class MeasurementUnitsService {
    constructor(private readonly databaseService: DatabaseService) {
    }

    async create(createMeasurementUnitDto: Prisma.MeasurementUnitCreateInput) {
        return this.databaseService.measurementUnit.create({
            data: createMeasurementUnitDto,
        });
    }

    async findAll() {
        return this.databaseService.measurementUnit.findMany();
    }

    async findOne(id: string) {
        return this.databaseService.measurementUnit.findUnique({
            where: {
                id: id,
            },
        });
    }

    async update(
        id: string,
        updateMeasurementUnitDto: Prisma.MeasurementUnitUpdateInput,
    ) {
        return this.databaseService.measurementUnit.update({
            where: {
                id: id,
            },
            data: updateMeasurementUnitDto,
        });
    }

    async remove(id: string) {
        return this.databaseService.measurementUnit.delete({
            where: {
                id: id,
            },
        });
    }
}
