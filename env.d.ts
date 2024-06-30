interface ImportMetaEnv {
  readonly VITE_APP_BACKEND_BASE_URL: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}