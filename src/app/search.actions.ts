export class AddSearch {
  static readonly type = '[Todo] Search';

  constructor(public newSearch: string) {}
}

export class EmptySearch {
  static readonly type = '[Todo] Empty';
}

export class AddFavourite {
  static readonly type = '[Todo] Favourite';

  constructor(public newFavourite: string) {}
}

export class EmptyFavourite {
  static readonly type = '[Todo] Empty Favourite';
}
