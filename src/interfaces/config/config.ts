export declare interface ICoreConfigPage {
  name: string;
  options: {
    [key: string]: any;
  }
}

export declare type ICoreConfigPages = Array<string | ICoreConfigPage>;

export declare interface ICoreConfigTheme {
  // possible will extend mui theme
}

export declare interface ICoreConfigEnv {
  apiUrl: string;
  assetsSever: string
}

export declare interface ICoreConfig {
  env: ICoreConfigEnv;
  theme?: ICoreConfigTheme;
  pages?: ICoreConfigPages;
}