import { Component, } from '@angular/core';
import { Festival } from './models/festival';
import { FestivalsService } from './services/festivals/festivals.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// TODO
// Rajouter affichage jeux + éditeurs dans le /App et voila mdr jpp

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private festivalsService: FestivalsService, private route: Router) {}
  title = 'FestivalApp';

  festivals!: Observable<Festival[]>
  //public index!: number

  ngOnInit(): void {
    this.festivals = this.festivalsService.getAllFestivals();
  }

  redirectToCreation(){
    this.route.navigate(['/festivals/create'])
  }
  
  redirectToEditor(){
    this.route.navigate(['/editors'])
  }

  redirectToGames(){
    this.route.navigate(['/games'])
  }

  changeFestival(value: string){
    //this.index = value
    this.route.navigate([`/festival/${value}`])
  }
}
