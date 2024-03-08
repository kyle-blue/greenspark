import React from 'react'
import { ColorBox, MainContainer } from './ColorPickerStyles'

export interface Props {
    colors: string[],
    value: string,
    onChange: (value: string) => void;
}

export default function ColorPicker({ colors, value, onChange }: Props): React.ReactElement {
    return (
        <MainContainer>
            {
                colors.map((color) => (
                    <ColorBox
                        key={color}
                        $color={color}
                        $isSelected={value === color}
                        onClick={() => onChange(color)}
                    />
                ))
            }
        </MainContainer>
    )
}
