/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface BaseConfigProps {
  title: string
  baseUrl: string
  projectKey: string
}
declare interface Window {
  // _BASE_URL: string,
  _BASE_CONFIG: BaseConfigProps
}