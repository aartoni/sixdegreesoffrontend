/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_AUTHOR_EMAIL: string;
  readonly VITE_AUTHOR_NAME: string;
  readonly VITE_DESCRIPTION: string;
  readonly VITE_HOME_LINK_REFS: string | undefined;
  readonly VITE_HOME_LINK_NAMES: string | undefined;
  readonly VITE_THIRD_PARTY_API_URL: string;
  readonly VITE_TOPIC: string;
  readonly VITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
