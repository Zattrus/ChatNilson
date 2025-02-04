import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;

        // firefox styles
        scrollbar-width: thin;
        scrollbar-color: rgba(0,0,0,0.1) white;
    }

    body {
        background: #dbd8d4;
        height:100vh;
        width:100vw;
        overflow: hidden;
        transition: background 0.5s;
        display: flex;
        color: '#212529';
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, roboto, Helvetica Neue, helvetica, arial, sans-serif;
        font-size: 13px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        text-decoration: none;
        -webkit-user-select: none;
        user-select: none;
        
        h2 {
            color: rgba(0,0,0,.85);
            font-weight: 500;
            margin-bottom: 0.5em;
            margin-top: 0;
        }
        
    }
    
    #root { 
        display: flex;
        flex: 1;
        overflow:hidden;
    }

    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        -webkit-box-shadow: none;
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.1);
        border-radius: 60px;
    }
`;