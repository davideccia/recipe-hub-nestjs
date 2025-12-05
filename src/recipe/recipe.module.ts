import {Module} from '@nestjs/common';
import {RecipeService} from './recipe.service';
import {RecipeController} from './recipe.controller';
import {DatabaseModule} from "../database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [RecipeController],
    providers: [RecipeService],
})
export class RecipeModule {
}
