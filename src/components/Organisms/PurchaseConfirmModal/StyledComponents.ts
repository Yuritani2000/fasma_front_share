import styled from 'styled-components';

export const Container = styled.div(() => `
    background-color: rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`);

export const BackButtonParent = styled.div(() => `
    position: relative;
    width: 100%;
`);

export const BackButton = styled.div(() => `
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(-50%, -50%);
`);

export const ModalContent = styled.div(() => `
    width: 83%;
`);

export const PurchaseConfirmText = styled.div(() => `
  margin-top : 0.67cm;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`)

export const PriceText = styled.div(() => `
  margin-top: 0.8cm;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`)

export const AddressArea = styled.div(() => `
  margin-top : 2.4cm;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`)

export const AddressTexts = styled.div(() => `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`)

export const PurchaseButton = styled.div(() => `
  margin-top: 1.8cm;
  box-shadow: 0 3px 4px 2px #ddd;
`)