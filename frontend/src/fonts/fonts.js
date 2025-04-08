import { createGlobalStyle } from 'styled-components';
import BalooWoff from './Baloo Bhai.woff';
import BalooWoff2 from './Baloo Bhai.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Baloo Bhai';
        src: local('Baloo Bhai'), local('FontName'),
        url(${BalooWoff2}) format('woff2'),
        url(${BalooWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;