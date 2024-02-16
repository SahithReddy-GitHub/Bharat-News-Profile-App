import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const SidebarCon = styled.div`
  flex: 1;
  min-height: 100vh;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 756px) {
    flex: 0;
    min-height: 10vh;
    padding-right: 15px;
    padding-left: 15px;
    justify-content: center;
  }
`
export const DivCard = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 756px) {
    flex-direction: row;
    align-items: center;
  }
`
export const RowCon = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 25px;
  background-color: #424242;
  cursor: pointer;

  &:hover {
    background-color: #555555;
  }

  @media screen and (max-width: 756px) {
    background-color: transparent;
    align-items: center;
  }
`
export const MainHead = styled.h1`
  font-size: 22px;
  font-weight: 700;
  font-family: cursive;
  color: #ffffff;
  margin-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 756px) {
    flex: 1;
    text-align: left;
  }
  @media screen and (max-width: 576px) {
    font-size: 18px;
    margin: 0px;
  }
`

export const SidebarPara = styled.p`
  font-size: 17px;
  font-weight: 700;
  color: #f4f4f4;
  margin-left: 10px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const SidebarHead = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #f4f4f4;
`
export const SidebarHeadLight = styled(SidebarHead)`
  font-size: 13px;
  font-weight: 500;
`
export const SidebarCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (max-width: 756px) {
    display: none;
  }
`
export const RowConBottom = styled.div`
  display: flex;
  align-items: center;
  background-color: '#424242';
  cursor: pointer;
  padding: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`
