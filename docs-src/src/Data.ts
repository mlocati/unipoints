export interface Codepoint {
  readonly id: number
  readonly name: string
  readonly codename: string
  readonly char: string
  readonly unicode1Name?: string
  readonly formalAliases?: string[]
  readonly informativeAliases?: string[]
  readonly correctedNames?: string[]
  readonly controlNames?: string[]
  readonly alternateNames?: string[]
  readonly figments?: string[]
  readonly abbreviations?: string[]
}

export interface Block {
  readonly name: string
  readonly codename: string
  readonly fromCodepoint: number
  readonly toCodepoint: number
  readonly codepoints: Codepoint[]
}

export interface Plane {
  readonly id: number
  readonly unassigned: boolean
  readonly name: string
  readonly shortName: string
  readonly fromCodepoint: number
  readonly toCodepoint: number
  readonly blocks: Block[]
}

export interface Data {
  readonly unicodeVersion: string
  readonly planes: Plane[]
}

let data: Data | undefined

let loadPromise: Promise<Data> | null = null

export function getData(): Promise<Data> {
  if (data !== undefined) {
    return new Promise<Data>((resolve): void => {
      resolve(<Data>data)
    })
  }
  if (loadPromise === null) {
    loadPromise = fetch('./assets/data.json').then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return <Data>(<any>response.json())
    })
  }
  return loadPromise
}
