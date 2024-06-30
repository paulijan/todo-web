interface ImportMetaEnv {
  readonly VUE_APP_BACKEND_BASE_URL: string;
  readonly VUE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}