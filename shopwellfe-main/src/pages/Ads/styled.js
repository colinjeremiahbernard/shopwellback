import styled from 'styled-components'

export const PageArea = styled.div`
   display: flex;
   margin-top: 20px;

   .leftSide {
    width: 250px;
    margin-right: 10px;
    
    .filterName {
        font-size: 15px;
        font-weight: bold;
        color: maroon;
        margin: 10px 0px;
    }
    input, select {
        font-size: 15px;
        font-weight: bold;
        width: 100%;
        height: 40px;
        border: 3px solid lawngreen;
        border-radius: 10px;
        padding: 10px;
        outline: none;
        color: maroon;
        margin: 10px 0px;
    }
    ul, li {
       display: flex;
       flex-wrap: wrap;
       margin: 0;
       padding: 0;
       list-style: none;
    }
    .categoryItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0px;
        padding: 10px;
        border-radius: 10px;
        color: #000;
        cursor: pointer;

        .img {
            width: 40px;
            height: 40px;
            margin-right: 5px;
        }
        span {
            font-size: 15px;
            font-weight: bold;
        }
    }
    .categoryItem:hover,
    .categoryItem.active {
        color: #000;
        background-color: gold;
    }
   }
   .rightSide {
    width: 250px;
    flex: 1;

    h2 {
        margin-top: 0px;
        font-size: 18px;
        font-weight: bold;
    }
    .ListWarning {
        padding: 30px;
        text-align: center;
    }
    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0px;
        flex-wrap: wrap;

        .pageItem {
            display: flex;
            flex-direction: column;
            width: 30px;
            height: 30px;
            margin-right: 5px;
            border: 3px solid black;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            font-size: 15px;

            &:hover {
                border: 3px solid black;
            }
            &.active {
                background-color: lightblue;
            }
        }
    }
    .list {
        display: flex;
        flex-wrap: wrap;

        .aditem {
            width: 33%;
        }
    }
   }
`
