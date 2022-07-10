export interface BoxProps {
  id: string
  display?:
    | 'inline'
    | 'block'
    | 'inline-block'
    | 'none'
    | 'flex'
    | 'inline-flex'
  direction?: 'row' | 'column'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
  width?: string
  height?: string
  margin?: string
  overflow?: 'auto' | 'hidden' | 'scroll' | 'visible'
}

export interface ImageProps {
  width?: string
  height?: string
  margin?: string
  fontSize?: string
}

export interface SectionProps {
  display?:
    | 'inline'
    | 'block'
    | 'inline-block'
    | 'none'
    | 'flex'
    | 'inline-flex'
  direction?: 'row' | 'column'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
  overflow?: 'auto' | 'hidden' | 'scroll' | 'visible'
}
