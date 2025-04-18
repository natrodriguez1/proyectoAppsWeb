import {Ingredients} from '../../ingredients/interfaces/ingredients';
import {Countries} from '../../countries/interfaces/countries';
import { Categories } from './category';
import { User } from './user';

export interface Meal {
  id: number;
  name: string;
  instructions: string;
  thumbnail_url: string;
  youtube_url: string;
  tags: string;
  user_id: string;
  ingredients: Ingredients[];
  country: Countries[];
  area: Categories[];
  user: User[];
 }
