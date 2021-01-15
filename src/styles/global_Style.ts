import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto','Noto Sans CJK JP';
        font-style: normal;
        font-weight: 400;
        src: local("Noto Sans CJK JP Regular"),
            url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff2) format('woff2'),
             url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.woff) format('woff'),
             url(//fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Regular.otf) format('opentype');
    }
    html {
        font-size: 62.5%;
        font-family: 'Roboto','Noto Sans CJK JP';
        height: 100%;
        width: 100%;
}
    }
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        background: #F5F5F5;
    }
    #root {
        height: 100%;
        width: 100%;
    }
`;
//TODO: ここのfontFamilyあとで変更
export default GlobalStyle;
