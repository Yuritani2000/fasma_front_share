import styled from 'styled-components';
import Space from '../../../styles/Space';

export const Container = styled.div<{ marginTop: string | number, marginBottom: string | number, marginLeft: string | number, marginRight: string | number }>((props) => `
    margin-top: ${props.marginTop};
    margin-bottom: ${props.marginBottom};
    margin-left: ${props.marginLeft};
    margin-right: ${props.marginRight};
    width: 65%;
`);

export const SkillPurchaseCard = styled.div<{ isPurchased: boolean }>((props) => `
    height: auto;
    background-color: white;
    padding: ${Space.LARGE};
    margin-top: ${(props.isPurchased) ? Space.HUGE : '0'};
`);

export const ThumbnailAndSellerProfile = styled.div(() => `
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;  
    display: flex;
    justify-content: space-around;
    margin-top: ${Space.LARGE}
`)

export const SkillDescription = styled.div(() => `
    margin-top: ${Space.X_LARGE}
`)

export const SkillPrice = styled.div(() => `
    text-align: center;
    margin-top: ${Space.HUGE}
`)

export const MoneyUnit = styled.span(() => `
    margin-left: ${Space.TINY}
`)

export const PurchaseButton = styled.div(() => `
    text-align: center;
    margin-top: ${Space.BASE}
`)