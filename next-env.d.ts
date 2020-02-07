/// <reference types="next" />
/// <reference types="next/types/global" />

// declaration.d.ts
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module 'fingerprintjs2'
declare module 'md5'
