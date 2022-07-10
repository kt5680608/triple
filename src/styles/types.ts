export interface BoxProps {
  id: string
  display?:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'none'
    | 'flex'
    | 'inline-flex'
    | 'grid'
  direction?: 'row' | 'column'
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-aroud'
    | 'space-evenly'
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-aroud'
    | 'space-evenly'
  width?: string
  height?: string
  margin?: string
  overflow?: 'visible' | 'hidden' | 'auto' | 'scroll'
}

export interface ImageProps {
  width?: string
  height?: string
  margin?: string
  fontSize?: string
}

export interface SectionProps {
  display?:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'none'
    | 'flex'
    | 'inline-flex'
    | 'grid'
  direction?: 'row' | 'column'
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-aroud'
    | 'space-evenly'
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-aroud'
    | 'space-evenly'
  overflow?: 'visible' | 'hidden' | 'auto' | 'scroll'
}
