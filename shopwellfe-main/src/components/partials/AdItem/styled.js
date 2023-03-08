import styled from 'styled-components'

export const Item = styled.div
`
a {
  display: block;
  border: 3px solid blue;
  color: #fff;
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: lightyellow;
  transition: ease all 0.2s;

  &:hover {
    background-color: lightblue;
    border: 3px solid gold;
  }
  .itemImage img {
    width: 100%;
    border-radius: 10px;
  }
  .itemName {
    font-weight: bold;
    font-weight: bold;
  }
}
`