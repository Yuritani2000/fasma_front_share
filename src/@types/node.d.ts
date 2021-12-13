/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_LOCAL_MOCK_SERVER: string;
    readonly REACT_APP_HEROKU_MOCK_SERVER: string;
    readonly UTARI_API_SERVER: string;
  }
}
