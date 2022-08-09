import { Component, Input, OnInit } from '@angular/core';
import { AddFavourite, AddSearch, EmptySearch } from '../search.actions';
import {Select, Store} from '@ngxs/store';
import { SearchState } from '../search.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Select(SearchState.getSearchList) searchList$?: Observable<string[]>;
  @Select(SearchState.getFavouritesList) favourites$?: Observable<string[]>;

  public placeholder: string = 'Search for a movie!';
  public currentSearch: any = '';
  public selected: any = [];
  searchList: string[] = [];
  favouritesList: string[] = [];

  constructor(private readonly store: Store) {}

  onAddSearch(search:string) : void{
    if(search.length > 0){
      this.store.dispatch(new AddSearch(search))
      this.clearSearchField();
    }
  }
  onClickedAddFavourite(clicked:string) : void{
    if(clicked.length > 0){
      this.store.dispatch(new AddFavourite(clicked))
      this.clearSearchField();
    }
  }

  onEmptySearch(){
    this.store.dispatch(new EmptySearch())
  }

  getValue(event: Event): string {
    console.log((event.target as HTMLInputElement).value)
    return (event.target as HTMLInputElement).value;
  }


  clearSearchField(){
    this.currentSearch = '';
  }
  ngOnInit(): void {
    /// Subscribe and populate searchList from state
    this.searchList$?.subscribe((res) => {
      this.searchList = res;
    })

    /// Subscribe and populate favouriteList from state
    this.favourites$?.subscribe((res) => {
      this.favouritesList = res;
    })
  }

}
