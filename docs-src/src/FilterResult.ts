import type { Plane, Block, Codepoint } from '@/Data'

export interface BlockFilterResult {
  block: Block
  codepoints: Codepoint[]
}

export interface PlaneFilterResult {
  plane: Plane
  blocks: BlockFilterResult[]
}
