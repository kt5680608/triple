import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

import { BoxProps, ImageProps, SectionProps } from './types'

export const GlobalStyles = createGlobalStyle`
    :root {
        --g-color-black: #3A3A3A;
        --g-color-grey100: #616161;
        --g-color-grey50: #7F7F7F; 
    }
    html{
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
    body{
      display: flex;
      justify-content: center;
      max-width: 100vw;
      flex-direction: column;
      overflow-x: hidden;
      align-items: center;
    }
    a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    cursor: pointer;

    a:visited, a:focus, a:hover, a:active {
    text-decoration: none;
    }
    
    h1{
        font-family:   sans-serif;
        margin: 0;
        padding: 0;
        
    }
    p{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    pre{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    h2{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
    }
    li{
        font-family:  sans-serif;
        margin: 0;
        padding: 0;
    }
}
`

export const Box = styled(motion.div)<BoxProps>`
  display: ${(props) => props.display && props.display};
  flex-direction: ${(props) => props.direction && props.direction};
  justify-content: ${(props) => props.justify && props.justify};
  align-items: ${(props) => props.align && props.align};
  margin: ${(props) => props.margin && props.margin};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  overflow: ${(props) => props.overflow && props.overflow};
`
export const Image = styled.img<ImageProps>`
  @media (min-width: 1142px) {
    width: ${(props) => props.width && props.width};
    height: ${(props) => props.height && props.height};
    font-size: ${(props) => props.fontSize && props.fontSize};
    margin: ${(props) => (props.margin ? props.margin : '0px')};
  }
`

export const Section = styled(motion.section)<SectionProps>`
  display: ${(props) => props.display && props.display};
  flex-direction: ${(props) => props.direction && props.direction};
  justify-content: ${(props) => props.justify && props.justify};
  align-items: ${(props) => props.align && props.align};
  overflow: ${(props) => props.overflow && props.overflow};
  width: 1040px;
  margin: 0 74.5px;
`
