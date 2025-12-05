import {Injectable} from '@nestjs/common';
import {CreateIngredientDto} from './dto/create-ingredient.dto';
import {UpdateIngredientDto} from './dto/update-ingredient.dto';
import {DatabaseService} from "../database/database.service";

@Injectable()
export class IngredientsService {
    constructor(private readonly databaseService: DatabaseService) {
    }

    create(createIngredientDto: CreateIngredientDto) {
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

    update(id: string, updateIngredientDto: UpdateIngredientDto) {
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
