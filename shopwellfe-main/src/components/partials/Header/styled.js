import styled from 'styled-components'

export const HeaderArea = styled.div`
    height: 60px;
    background-color: aqua;
    border-bottom: 2px solid brown;

    .container {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
    }
    a {
        text-decoration: none;
    }
    .logo {
        flex: 2;
        display: flex;
        align-items: center;
        height: 60px;
        .logo-1, .logo-2, .logo-3, .logo-4 {
            font-size: 27px;
            font-weight: bold;
        }
        .logo-1 { color: limegreen; }
        .logo-2 { color: yellow;}
        .logo-3 { color: magenta;}
        .logo-4 { color: pink;}
    }
    nav{
        padding-top: 10px;
        padding-bottom: 10px;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        ul {
            display: flex;
            align-items: center;
            height: 40px;
           }
        li {
            margin-left: 20px;
            margin-right: 20px;
            a {
                color: yellow;
                font-size: 18px;
                &:hover {
                    color: limegreen;
                }
                &.button{
                    background-color: green;
                    border-radius: 20px;
                    color: pink;
                    padding: 5px 10px;
                }
                &.button:hover {
                    background-color: purple;
                    text-transform: upper-case;
                }
            }
        }
    }
    
` 