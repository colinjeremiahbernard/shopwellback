import styled from 'styled-components'

export const PageArea = styled.div`
    form {
        background-color: lightgreen;
        margin-bottom: 20px;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 0px 10px gold;
        .area {
            display: flex;
            align-items: center;
            padding: 10px;
            max-width: 700px;
            .area--title {
                width: 300px;
                text-align: right;
                padding-right: 20px;
                font-weight: bold;
                font-size: 16px;
            }
            .area--input {
                flex: 1;
                input {
                    width: 100%;
                    font-size: 16px;
                    padding: 10px;
                    border: 5px solid green;
                    border-radius: 10px;
                    outline: 0;
                    transition: all ease 0.4s;
                    &:focus {
                        border: 5px solid purple;
                        color: brown;
                    } 
                }
                .check {
                  float: left;
                  width: auto;
                  height: 30px;
                }
                button {
                    background-color: aqua;
                    border: 0;
                    outline: 0;
                    padding: 5px 10px;
                    border-radius: 10px;
                    color: brown;
                    width: 250px;
                    height: 50px;
                    font-size: 25px;
                    cursor: pointer;
                    &:hover {
                        background-color: gold;
                    }
                }
            }
        }
    }
`
