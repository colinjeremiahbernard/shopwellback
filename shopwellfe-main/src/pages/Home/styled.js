import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory'
import styled from 'styled-components'

export const SearchArea = styled.div`
    background-color: lightcyan;
    border-bottom: 3px solid plum;
    padding: 20px 0;

    .searchbox {
    background-color: lightgreen;
    padding: 20px 15px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 0.9px rgba(2 2 2 0.4);
    display: flex;

      form {
        flex: 3%;
        display: flex;
        
        input, select {
           height: 40px;
           border: 0;
           border-radius: 10px;
           outline: none;
           font-size: 20px;
           background-color: white;
           color: gold;
           margin-right: 20px;
        }
        input {
            flex: 1;
            padding: 0 10px;
        } 
        select {
            width: 100px;
        }
        button {
            background-color: green;
            color: white;
            border: 0;
            border-radius: 10px;
            font-size: 20px;
            height: 40px;
            padding: 0 20px;
            margin-right: 20px;
            cursor: pointer;

            &:hover {
                background-color: purple;
                color: gold;
        }
    }
}
}
.categoryList {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  .categoryItem {
    width: 25%;
    display: flex;
    align-items: center;
    color: brown;
    text-decoration: none;
    height: 50px;
    margin-bottom: 10px;

    &:hover {
      color: maroon;
    }

    img {
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }
  }
}
`
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
