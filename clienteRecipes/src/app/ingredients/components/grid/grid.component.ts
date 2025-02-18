import { ChangeDetectorRef, Component } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredients } from '../../interfaces/ingredients';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [SearchComponent],
  providers: [IngredientsService],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  ingredients: Ingredients[] = [];

  constructor(
    private ingredientsService: IngredientsService,
    private cdr: ChangeDetectorRef
  ){
  }

  ngOnInit(): void {
    this.ingredientsService.obtenerIngredientes().subscribe(respuesta => {
      const data = respuesta as any;
      this.ingredients = data.meals || [];
      this.cdr.detectChanges();
    });
  }

  photos: any[]=[
    {
      "url": "https://assets.epicurious.com/photos/663552459a068917f23d1e92/4:3/w_3830,h_2872,c_limit/cornell-bbq-chicken_RECIPE_042524_5318_VOG_final.jpg"
    },
    {
      "url":"https://www.southernliving.com/thmb/tHfTNtyvfNChWMQEPWTRe-bSlMo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Cook_Salmon_009-d2f5718925c342b0949e452b460ba5cd.jpg"
    },
    {
      "url":"https://www.allrecipes.com/thmb/OJ28fIFte6Pyg93ML8IM-APbu1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-14554-sirloin-steak-with-garlic-butter-hero-4x3-d12fa79836754fcf850388e4677bbf55.jpg"
    },
    {
      "url":"https://www.allrecipes.com/thmb/mQHYg_nV46dYhUD1Hx-vdGWarZk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/14726-grilled-pork-tenderloin-beauty-3x4-f4efabb5032f464dae47fe4ee57690da.jpg"
    },
    {
      "url":"https://www.marthastewart.com/thmb/oRnd9nULKgOr9UVDNxI1AEK5NpE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/can-you-freeze-avocados-0422-d6e6722356ee45ce8f374cb6faa28769.jpg"
    },
    {
      "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKXoB8ZhzuvQ8m1fC5gSB7RH6K5_-QQbzTQ&s"
    },
    {
      "url":"https://www.allrecipes.com/thmb/gKIx4vY40KUJaRP7Bx0zBzj3VrE=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/18318-pan-fried-asparagus-beauty-4x3-0135064414802331-2d56bbd3ae8349999a142f6394081ae8.jpg"
    },
    {
      "url":"https://www.bradleysmoker.com/cdn/shop/articles/Smoked-Marinated-Eggplant-Recipe-scaled.jpg?v=1675739133&width=1500"
    },
    {
      "url":"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/07/Blistered-Tomatoes-main-1.jpg"
    },
    {
      "url":"https://www.allrecipes.com/thmb/tnXjQLBtzLNLfi7KEIuOrVzKbWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/158727-bacon-for-the-family-or-a-crowd-beauty-DDMFS-071-d1cd1e76787b4374b3d046d50b709c83.jpeg"
    },
    {
      "url":"https://www.cuisinelangelique.com/infotheque/wp-content/uploads/2019/09/bicarbonate-sodium-1200x795.jpg"
    },
    {
      "url":"https://www.allrecipes.com/thmb/FcZmtW_tcQOdC6leUIf8VXNo194=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-228418-balsamic-glaze-ddmfs-4x3-505d9e39d2564087a78dfb535662e526.jpg"
    },
    {
      "url": "https://www.simplyrecipes.com/thmb/z2F90MatI8zjN7dySFZ3T7TvB8M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recieps-Make-Basil-Last-LEAD-03-d6813ac8fe6c4c5490385ce82c2220b3.jpg"
    },
    {
      "url":"https://aanmc.org/wp-content/uploads/2021/08/987-1024x681.jpg"
    },
    {
      "url":"https://www.allrecipes.com/thmb/pc4RLhcZcZ888YJsWiQF7aFnLwM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-72349-Indian-Style-Basmati-Rice-DDMFS-4x3-795ff404c246454d93094c2191d0983b.jpg"
    },
    {
      "url":"https://images.healthshots.com/healthshots/en/uploads/2024/10/22153857/Bay-leaf.jpg"
    },
    {
      "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzheU5tuq3zwbNW6E4GMDUr9UZcvRUC-xF1w&s"
    },
    {
      "url":"https://www.seriouseats.com/thmb/OSVFIswS4c6HfYHDxMZEiJRB0rw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__12__20141217-tenderloin-roast-recipe-food-lab-primary-ae4180060f6740f986048902f4a6ab75.jpg"
    },

  ]
}
