export type Colors = {
  [Color in '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900']: string;
}

export interface ThemeColors {
  primary: Colors;
  secondary: Colors;
  tertiary: Colors;
}

export type ThemeShadows = {
  [Shadow in 'dp2' | 'dp4' | 'dp6' | 'dp8']: string;
}
