import styled from "styled-components"
import {motion} from "framer-motion"


//simply wrapping it to make the div animated
export const ContentSpace = styled(motion.div)`
height: 0px;
width: 100%;
position: absolute;
top:300px;
right:0;
left:0;
z-index: 99;
`

export const Logo = styled.div`
 a {
     font-size:5.8rem;
     font-weight:800;
     color: ${props => props.theme.text}
 }
`

export const ChangeButton = styled.div`
span{
    height: 6rem;
    width: 6rem;
    background : ${props => props.theme.text};
    margin : 20px 150px 0px 0px;
    border-radius: 100%;
    display : inline-block;
    position: relative;
    bottom:2px;
    cursor: pointer;
}
`


