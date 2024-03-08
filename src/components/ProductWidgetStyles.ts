import styled from '@emotion/styled'
import { InfoOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import LogoSVG from '../assets/svg/Logo.svg'

export const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
    width: 400px;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin-bottom: 2rem;
    background: #ffffff;
`

export const InfoIcon = styled(InfoOutlined)<{ $color: string }>`
    margin-left: 3px;
    margin-bottom: 7px;
    height: 15px;
    width: 15px;
    color: ${({ $color }) => $color};
`

export const TooltipContainer = styled.div`
    background: #ffffff;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 4px;
    font-family: 'Helvetica', sans-serif;
    font-size: 12px;
    color: #212121;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0;
`

export const TooltipButton = styled(Button)`
    margin-top: 1rem;
`

export const Header = styled.div<{ $background: string }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
    margin-bottom: 1rem;

    border-radius: 6px;
    width: 100%;

    background: ${({ $background }) => $background};
`

export const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 15px;
    flex: 1;
`

export const Logo = styled(LogoSVG as any)<{ $color: string }>`
    height: 75px;
    width: 75px;
    margin: 0;
    & path, circle, ellipse, rect {
        fill: ${({ $color }) => $color};
    }
    font-weight: lighter;
`

export const HeaderTextSmall = styled.h2<{ $color: string }>`
    font-weight: lighter;
    font-size: 1rem;
    color: ${({ $color }) => $color};
    margin: 5px 0;
`

export const HeaderTextLarge = styled.h2<{ $color: string }>`
    font-size: 1.5rem;
    color: ${({ $color }) => $color};
    margin: 5px 0;
`

export const FieldRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Spacer = styled.div`
    flex-grow: 1;
`
