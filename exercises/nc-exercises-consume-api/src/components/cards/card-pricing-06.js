
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import Container from 'components/container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Fonta Awesome Icon  
import {faHome} from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    background-color: #FFFFFF;
    border-radius: 5px;
    width: 300px;
    height: 400px;
`

const ContenedorImage = styled(Container)`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: solid 1px #EEEEEE;
`

const ContenedorTexto = styled(GridContainer)`
    padding: 16px;
`

const BloqueButton = styled(Button)`
    border-radius: 30px;
    width: 140px;
    height: 40px;
`

const cardPricing06 = () => {
    return (
        <Fragment>

            <ContenedorPrincipal>

                <GridContainer center>
                    <Typography textGray400 marginT4> Lorem ipsum </Typography>
                </GridContainer>

                <FlexContainer jcCenter>
                    <ContenedorImage bgWhite marginY4>
                        <FlexContainer jcCenter marginY6>
                            <FontAwesomeIcon icon={faHome} size='3x' color='#E91E63' />
                        </FlexContainer>
                    </ContenedorImage>
                </FlexContainer>

                <ContenedorTexto>
                    <Typography bold center h2 textGray800> $29</Typography>
                    <Typography textGray400 marginY2 p3 center> Lorem, ipsum dolor sit amet ipsum dolor consectetur adipisicing elit</Typography>
                </ContenedorTexto>

                <FlexContainer jcCenter>
                    <BloqueButton marginB10 bgPinkA400 textGray400>  ipsum dolor </BloqueButton>
                </FlexContainer>

            </ContenedorPrincipal>

        </Fragment>

    )
}

export default cardPricing06
