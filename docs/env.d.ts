/// <reference types="vite-plugin-pages/client-react" />

declare module '*.mdx' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let MDXComponent: (props: any) => JSX.Element

  export default MDXComponent
}