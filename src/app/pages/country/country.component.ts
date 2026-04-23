import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OlympicService } from '../../services/olympic.service';
import { Olympic } from '../../models/olympic.model';
import { Stat } from '../../models/stat.model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {

  country$!: Observable<Olympic | undefined>;
  stats: Stat[] = [];

  constructor(
    private route: ActivatedRoute,
    private olympicService: OlympicService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    // ❌ ID invalide
    if (!idParam || isNaN(id)) {
      this.router.navigate(['/not-found']);
      return;
    }

    this.country$ = this.olympicService.getOlympics().pipe(

      map((data: Olympic[]) => {

        const country = data.find(c => c.id === id);

        // ❌ pays inexistant
        if (!country) {
          this.router.navigate(['/not-found']);
          return undefined;
        }

        this.buildStats(country);
        return country;
      }),

      // ❌ erreur API / données
      catchError(() => {
        this.router.navigate(['/not-found']);
        return of(undefined);
      })
    );
  }

  private buildStats(country: Olympic): void {

    const totalMedals: number = country.participations.reduce(
      (sum, p) => sum + p.medalsCount,
      0
    );

    this.stats = [
      { label: 'Participations', value: country.participations.length },
      { label: 'Total médailles', value: totalMedals }
    ];
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}