import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService  , private http: HttpClient) { }

  ngOnInit() {
    debugger ; 
      this.http.get('http://35.163.140.165:5000/getSatisfactory').subscribe(data => {
    console.log(data);
    });
      this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}