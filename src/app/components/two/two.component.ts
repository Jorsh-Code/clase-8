import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  public pokemon$!: Observable<any>;
  public pokemonName: string = '';
  constructor(private apiService: ApiService) {
    this.pokemon$ = apiService.searchPokemon('pikachu').pipe(
      
    )
  }

  ngOnInit(): void {
  }

  onChange(){
    this.pokemon$ = this.apiService.searchPokemon(this.pokemonName);
  }

}
