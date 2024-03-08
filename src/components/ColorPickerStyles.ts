import styled from '@emotion/styled'

export const MainContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ColorBox = styled.div<{ $color: string, $isSelected: boolean }>`
    width: 20px;
    height: 20px;
    background: ${({ $color }) => $color};
    box-sizing: border-box;
    border: ${({ $isSelected }) => ($isSelected ? '2px' : '0px')} solid #B0B0B0;
    margin-left: 5px;
;
`
