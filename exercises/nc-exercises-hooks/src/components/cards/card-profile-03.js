
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Container from 'components/container/'
import Button from 'components/buttons/'
import Image from 'components/image/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Awesome Icon
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    background-color: #FFFFFF;
    width: 350px;
    height: 600px;
`

const ContenedorImage = styled(Image)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const ContenedorImg = styled(Container)`
    top: -42px;
`

const ContenedorTexto = styled(GridContainer)`
    padding: 16px;
`

const ContenedorTex = styled(GridContainer)`
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`

const ContenedorB = styled(Button)`
    border: 1px solid #00BCD4;
    width: 180px;
    height: 40px;
`

const BloqueButton = styled(Button)`
    width: 180px;
    height: 40px;
`

const cardProfile03 = () => {
    return (
        <Fragment>

            <GridContainer>

                <ContenedorPrincipal radius5>
                    <FlexContainer jcCenter>
                        <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-259px-11.jpg' sizeXL />
                    </FlexContainer>

                    <ContenedorImg center relative>
                        <Button circle2 paddingR3 paddingL3 paddingT2 paddingB2 bgGray50>
                            <FontAwesomeIcon icon={faStar} color='#FFC400' />
                        </Button>
                    </ContenedorImg>

                    <ContenedorTexto>
                        <Typography bold center h5 textGray800>Lorem ipsum dolor </Typography>
                        <Typography textGray400 marginT2 p3 center> Lorem ipsum </Typography>
                    </ContenedorTexto>

                    <ContenedorTex bgGray50>

                        <GridContainer>
                            <Typography center h6 textGra300 marginT5>Lorem ipsum </Typography>
                        </GridContainer>

                        <FlexContainer jcCenter marginY2>
                            <Container>
                                <FlexContainer marginR2>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} color='#9E9E9E' />
                                </FlexContainer>
                            </Container>
                            <Typography p4 textGray400>Lorem ipsum dolor sit amet</Typography>
                        </FlexContainer>

                        <GridContainer>
                            <Typography center p4 textGray400 marginY2>Lorem ipsum dolor sit amet</Typography>
                            <Typography center p4 textGray400 > ipsum dolor sit </Typography>
                        </GridContainer>

                        <FlexContainer jcCenter marginT6 bgWhite >
                            <ContenedorB textBlue400 radius2>  ipsum </ContenedorB>
                        </FlexContainer>

                        <FlexContainer jcCenter marginT2>
                            <BloqueButton bgBlue500 textWhite radius2>  ipsum </BloqueButton>
                        </FlexContainer>

                        <GridContainer marginY4>
                            <Typography center p4 textGray400 >Lorem ipsum dolor sit amet</Typography>
                        </GridContainer>

                    </ContenedorTex>
                </ContenedorPrincipal>

            </GridContainer>

        </Fragment>

    )
}

export default cardProfile03