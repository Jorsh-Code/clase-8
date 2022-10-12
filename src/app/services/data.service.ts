import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public session$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public localStorage$!: Observable<any>;
  constructor() { 
    this.localStorage$ = this.session$.pipe(
      tap((resp) => {
        if(resp) localStorage.setItem('session',JSON.stringify(resp));
      })
    );
    this.localStorage$.subscribe();
    
  }
}
