import {Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {Prisma} from 'src/generated/prisma/client';

@Injectable()
export class RecipeService {

    constructor(private readonly databaseService: DatabaseService) {
    }

    create(createRecipeDto: Prisma.RecipeCreateInput) {
        return this.databaseService.recipe.create({
            data: createRecipeDto
        });
    }

    findAll() {
        return this.databaseService.recipe.findMany();
    }

    findOne(id: string) {
        return this.databaseService.recipe.findUnique({
            where: {
                id: id
            }
        });
    }

    update(id: string, updateRecipeDto: Prisma.RecipeUpdateInput) {
        return this.databaseService.recipe.update({
            data: updateRecipeDto,
            where: {
                id: id
            }
        });
    }

    remove(id: string) {
        return this.databaseService.recipe.delete({
            where: {
                id: id
            }
        });
    }
}
