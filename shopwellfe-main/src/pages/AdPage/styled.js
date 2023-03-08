import styled from 'styled-components';

export const Fake = styled.div`
  background-color: lavender;
  height: ${props => props.height||20}px;
`;

export const PageArea = styled.div`
 display: flex;
    margin-top: 20px;

    .box {
        background-color: palevioletred;
        border-radius: 10px;
        box-shadow: 0px 0px 10px gold;
        margin-bottom: 20px;
    }
    .box--padding {
      padding: 10px;
    }
    .leftSide {
        flex: 1;
        margin-right: 20px;

        .box {
            display: flex;
        }
        .adImage {
            width: 320px;
            height: 320px;
            margin-right: 20px;

            .each-slide img {
               display: flex;
               align-items: center;
               justify-content: center;
               background-size: cover;
               height: 320px;
            }
        }
        .adInfo {
            flex: 1;

            .adName {
                margin-bottom: 20px;
            
            h2 {
                margin: 0px;
                margin-top: 20px;
            }
            small {
                color: magenta;
            }
          }
          .adDescription {
               
            small {
              color: #999;

            }  
                
        }
        
    }
  }
    .rightSide {
        width: 250px;

        .price span {
          display: block;
          color: deepskyblue;
          font-size: 27px;
          font-weight: bold;
          align-items: center;
          justify-content: center;
        }
        .contactSellerLink {
          background-color: palevioletred;
          border-radius: 10px;
          color: white;
          height: 30px;
          box-shadow: 0 0 6px gold;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          text-decoration: none;
          margin-bottom: 20px;
        }
        .createBy strong {
          font-size: 16px;
          font-weight: bold;
          display: block;
        }
        .createBy small {
          font-size: 12px;
          font-weight: bold;
          display: block;
          color: white;
          margin-top: 10px;
        }
    }
   
`;
export const OthersArea = styled.div`
  h2 {
    font-size: 20px;
  }
  .list {
    display: flex;

    .aditem {
        width: 25%;
    }
                    
  }
`;
export const BreadChumb = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;

    a {
      display: inline-block;
      margin: 0 7px;
      text-decoration: underline;
      color: white;
    }
`;
   

