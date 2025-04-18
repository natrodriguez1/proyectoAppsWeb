import { ChangeDetectorRef, Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Countries } from '../../interfaces/countries';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-flags',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  providers: [CountriesService],
  templateUrl: './flags.component.html',
  styleUrl: './flags.component.css'
})
export class FlagsComponent {
  titulo:string="FlagsbyCountry"

  countries: Countries[] = [];

  constructor(
    private countriesService: CountriesService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.countriesService.obtenerPaises().subscribe(respuesta => {
      this.countries = respuesta as [];
      this.cdr.detectChanges();
    });
  }

}
