import styled from 'styled-components';
import Color from '../../../styles/Color';


export const Container = styled.div<{ isVisible: boolean }>((props) => `
    width: 840px;
    height: 347px;
    position: relative;
    visibility: ${(props.isVisible) ? 'visible' : 'collapse'};
    background-color: ${Color.PurchaseNotification};
`);

export const Content = styled.div(() => `
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: solid;
    border-color: transparent;
    border-top-width: 30px;
    border-right-width: 46px;
    border-bottom-width: 30px;
    border-left-width: 46px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`);

export const Title = styled.div(() => `
  margin-bottom: 35px
`)

export const AddressArea = styled.div(() => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`);

export const AddressTexts = styled.div(() => `
    flex-shrink: 0;
    width: 468px;
    height: 175px;
`);

type AddressTextProps = {
  marginTop: number;
  isDisplay: boolean;
}

export const AddressText = styled.div<AddressTextProps>((props) => `
  margin-top: ${props.marginTop + 'px'};
  display: ${props.isDisplay ? "flex" : "none"};
  flex-direction: row;
  justify-content: space-between;
`)

export const MailAddress = styled.div(() => `
    width: 328px;
`);

type QrCodeProps = {
  isDisplay: boolean
}

export const QrCode = styled.div<QrCodeProps>((props) => `
  flex-shrink: 0;
  margin-right: 30px;
  visibility: ${(props.isDisplay) ? 'visible' : 'collapse'};
`)