import styled from 'styled-components';

export const Parent = styled.div(()=> `
    display: grid;
    grid-template-rows: 450px 50px 250px 100px;
    grid-template-columns: 400px 700px;
`);

export const InputForm = styled.div(()=> `
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`);

export const SkillThumbnail = styled.div(()=> `
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`);

export const TermsOfUse = styled.div(()=> `
    grid-row: 3 / 4;
    grid-column: 1 / 3
`);

export const Buttons = styled.div(() => `
    grid-row: 4 / 5;
    grid-column: 1 / 3;
    position: relative;
`);

export const OneInputParent = styled.div<{verticalSize: number}>((props)=> `
    display: grid;
    grid-template-rows: 1fr ${props.verticalSize}fr;
    grid-template-columns: 1.5fr 5.5fr;
    grid-template-areas:
        "InputTitle   InputWarning"
        "InputElement InputElement"
`);

export const InputTitle = styled.div(()=> `
    grid-area: InputTitle;
`);

export const InputWarning = styled.div<{isVisible: boolean}>((props) => `
    visibility: ${(props.isVisible) ? 'visible' : 'hidden'};
    grid-area: InputWarning
`);

export const InputElement = styled.div(() => `
    grid-area: InputElement;
`);

export const ButtonsParent = styled.div(()=> `
    position: absolute;
    top: 59%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`);