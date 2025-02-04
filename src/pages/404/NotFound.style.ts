import styled from "styled-components";
import { notFoundGif } from "../../assets";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; 
  background: #ffffff;
  color: '#212529';
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 13px;
  font-variant: tabular-nums;
  line-height: 1.5715;

    .row {
      .col-sm-12 {
        .col-sm-10 {
          margin: 0 auto;
          text-align: center;

          .four_zero_four_bg {
            background-image: url(${notFoundGif});
            height: 400px;
            background-position: center;
            min-width: 700px;

            h1 {
              font-size: 80px;
            }

            h3 {
              font-size: 80px;
            }
          }

          .contant_box_404 {
            margin-top: -50px;
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;
            h3 {
              font-size: 24px;
            }

            p {
              font-size: 16px;
              color: #555;
            }

            .link_404 {
              display: flex!important;
              color: #555 !important;
              margin: 20px 0;
              display: inline-block;
              text-decoration: none;
             
            }
          }
        }
      }
    }
  
`;

export {
  Container
};

