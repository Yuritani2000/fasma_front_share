import { createGlobalStyle } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body {
        height: 100%;
        width: 100%;
    }
`;
export default GlobalStyle;

