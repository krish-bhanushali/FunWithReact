import React from "react"
import {Link} from "gatsby"
//styles
import {Container, Flex} from '../styles/globalStyles'
import {ContentSpace , Logo, ChangeButton} from '../styles/contentStyles'
const Content = () => {
    return ( <div>
        <ContentSpace>
            <Container>
                <Flex spaceBetween noHeight>
                <Logo>
                <Link to="/">ThemeChange</Link>
                
            </Logo>
            <ChangeButton>
                <span></span>
            </ChangeButton>
            
                </Flex>
            </Container>

</ContentSpace>
    </div>
        );
}
 
export default Content;