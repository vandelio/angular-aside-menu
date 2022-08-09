import { Injectable } from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import { AddFavourite, AddSearch, EmptySearch } from './search.actions';

// Search Interface
export interface SearchStateModel {
  search: string[];
  searchList: string[];
  results: string[];
  favorites: string[];
}

@State<SearchStateModel>({
  name: 'search',
  defaults: {
    search: [],
    searchList: [],
    results: [],
    favorites: []
  }
})
@Injectable()
export class SearchState {

  @Selector()
  static getSearchList(state: SearchStateModel): string[] {
    return state.searchList;
  }
  @Selector()
  static getFavouritesList(state: SearchStateModel): string[] {
    return state.favorites;
  }

  @Action(AddSearch)
  addSearch({patchState, getState}: StateContext<SearchStateModel>, {newSearch}: AddSearch): void {
    patchState({ searchList: [...getState().searchList, newSearch ]});
  }
  @Action(EmptySearch)
  emptySearch({patchState}: StateContext<SearchStateModel>): void {
    patchState({ searchList:[] })
  }

  @Action(AddFavourite)
  addFavourite({patchState, getState}: StateContext<SearchStateModel>, {newFavourite}: AddFavourite): void {
    patchState({ favorites: [...getState().favorites, newFavourite ]});
  }
}
