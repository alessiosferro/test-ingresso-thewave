export type Colors = {
  [Color in 'main' | '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900']: string;
}

export type NeutralColors = {
  [Color in 'black' | 'white' | 'red' | 'darkGray']: string;
}

export type ThemeShadows = {
  [Shadow in 'dp2' | 'dp4' | 'dp6' | 'dp8']: string;
}
