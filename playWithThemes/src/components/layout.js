import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//styled Components
//Global Style will provide an overall style to our components
//Normalize basically removes any additional margin or padding by browser and sets it to zero
//Theme provider will basically provide us theme to embedded components which can later be altered
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {normalize} from 'styled-normalize';



//Components
import Content from "./Content"

//Created hook to access the storage of our current theme
import {useGlobalStateContext} from '../context/globalContext'




//global Style you can set your fonts and background here
//we access the props by theme provider 
const GlobalStyle = createGlobalStyle`
${normalize}
  *{
    text-decoration: none;
    /* cursor: none; */
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;

  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }

`







const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background:'#000',
    text:'#fff',
  
  }

  const lightTheme = {
    background:'#fff',
    text:'#000',
 
  }
  const {currentTheme} = useGlobalStateContext()
  return (<>
  <ThemeProvider  theme={currentTheme === 'dark' ? darkTheme : lightTheme }>
  <GlobalStyle></GlobalStyle>
  <Content/>
  <main>{children}</main>
  </ThemeProvider>
 
  </>)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
