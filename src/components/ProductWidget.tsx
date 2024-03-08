import React from 'react'
import {
    Checkbox, FormLabel, Switch, Tooltip,
} from '@mui/material'
import { ProductWidgetDTO } from '../api_helpers/product-widgets'
import {
    FieldRow, Header, HeaderTextContainer, HeaderTextLarge,
    HeaderTextSmall, InfoIcon, Logo, MainContainer, Spacer,
    TooltipButton,
    TooltipContainer,
} from './ProductWidgetStyles'
import ColorPicker from './ColorPicker'
import { palette } from '../theme'

interface Props {
    productWidget: ProductWidgetDTO,
    setLinked: (value: boolean) => void,
    setActive: (value: boolean) => void,
    setColor: (value: string) => void,
}

type ColorPair = {
    background: string,
    foreground: string,
}

const colorPalette: Record<string, ColorPair> = {
    black: {
        background: '#212121',
        foreground: '#F9F9F9',
    },
    white: {
        background: '#FFFFFF',
        foreground: '#212121',
    },
    blue: {
        background: '#2E3A8C',
        foreground: '#F9F9F9',
    },
    green: {
        background: '#3B755F',
        foreground: '#F9F9F9',
    },
    beige: {
        background: '#F2EBDB',
        foreground: '#3B755F',
    },
}

function ProductWidget({
    productWidget, setLinked, setActive, setColor,
}: Props): React.ReactElement {
    const color = colorPalette[productWidget.selectedColor]

    return (
        <MainContainer>
            <Header $background={color.background}>
                <Logo $color={color.foreground} />
                <HeaderTextContainer>
                    <HeaderTextSmall $color={color.foreground}>{`This product ${productWidget.action}`}</HeaderTextSmall>
                    <HeaderTextLarge $color={color.foreground}>{`${productWidget.amount} ${productWidget.type}`}</HeaderTextLarge>
                </HeaderTextContainer>
            </Header>
            <FieldRow>
                <FormLabel>Link to Public Profile</FormLabel>
                <Tooltip title={
                    (
                        <TooltipContainer>
                            This widget links directly to your public profile so that you can easily
                            share your impact with your customers. Turn it off here if you do not
                            want the badge to link to it.
                            <TooltipButton variant="text">View Public Profile</TooltipButton>
                        </TooltipContainer>
                    )
                }
                >
                    <InfoIcon $color={palette.primary} />
                </Tooltip>
                <Spacer />
                <Checkbox
                    checked={productWidget.linked}
                    onChange={() => setLinked(!productWidget.linked)}
                />
            </FieldRow>
            <FieldRow>
                <FormLabel>Badge Colour</FormLabel>
                <Spacer />
                <ColorPicker
                    colors={Object.values(colorPalette).map((x) => x.background)}
                    value={color.background}
                    onChange={(value) => {
                        const colorString = Object.keys(colorPalette)
                            .find((key) => colorPalette[key].background === value)
                        if (colorString) setColor(colorString)
                    }}
                />
            </FieldRow>
            <FieldRow>
                <FormLabel>Activate badge</FormLabel>
                <Spacer />
                <Switch
                    checked={productWidget.active}
                    onChange={() => setActive(!productWidget.active)}
                />
            </FieldRow>
        </MainContainer>
    )
}

export default ProductWidget
