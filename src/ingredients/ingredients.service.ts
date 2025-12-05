import {Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {Prisma} from "../generated/prisma/client"

@Injectable()
export class IngredientsService {
    constructor(private readonly databaseService: DatabaseService) {
    }

    create(createIngredientDto: Prisma.IngredientCreateInput) {
        return this.databaseService.ingredient.create({
            data: createIngredientDto
        });
    }

    findAll() {
        return this.databaseService.ingredient.findMany();
    }

    findOne(id: string) {
        return this.databaseService.ingredient.findUnique({
            where: {
                id: id
            }
        });
    }

    update(id: string, updateIngredientDto: Prisma.IngredientUpdateInput) {
        return this.databaseService.ingredient.update({
            data: updateIngredientDto,
            where: {
                id: id
            }
        });
    }

    remove(id: string) {
        return this.databaseService.ingredient.delete({
            where: {
                id: id
            }
        })
    }
}
