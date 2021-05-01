import React, {useEffect} from "react"
import {Link} from "gatsby"
//styles
import {Container, Flex} from '../styles/globalStyles'
import {ContentSpace , Logo, ChangeButton} from '../styles/contentStyles'

//dispatch hook to change theme and global hook to just test
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

const Content = () => {
    //we can use dispatch to use the TOGGLE case in the reducer we created
    const dispatch = useGlobalDispatchContext();
    const { currentTheme } = useGlobalStateContext();

    const toggleTheme = () => {
        if(currentTheme === 'dark'){
            dispatch({
                type:"TOGGLE_THEME", theme: "light"
            })

        }else{
            dispatch({
                type:"TOGGLE_THEME", theme: "dark"
            })
        }


    }
   
     //we set the theme to local storage to remember whenever we toggle the theme
    useEffect(()=> {
            window.localStorage.setItem('theme', currentTheme)
    },[currentTheme])
    //simple animated opacity to play around
    return ( <div>
        <ContentSpace  animate={{ opacity:1}}
    initial={{ opacity:0}
}
    transition={{duration:1,ease : [.6,.05,-.01,.9]}}>
            <Container>
                <Flex spaceBetween noHeight>
                <Logo>
                <Link to="/">ThemeChange</Link>
                
            </Logo>
            <ChangeButton>
                <span onClick={toggleTheme}></span>
            </ChangeButton>
            
                </Flex>
            </Container>

</ContentSpace>
    </div>
        );
}
 
export default Content;