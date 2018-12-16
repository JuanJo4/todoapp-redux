import { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Lato', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f5f5f5;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    a {
      &.main-header {
        margin-top: 50px;
        color: #d47b7b;
        font-size: 30px;
      }
    }

    .task-list {
      width: 90%;
      margin-bottom: 50px;

      ${breakpoint('tablet')`
        width: 70%;
      `}

      ${breakpoint('desktop')`
        width: 60%;
      `}

      .task {
        position: relative;
        border-bottom: 2px solid #f5f5f5;
        padding: 0 5px;

        button {
          font-size: 26px;
          color: #757575;
          transition: color 0.5s ease;

          &:hover {
            color: #e07578;
          }
        }

        input {
          height: 60px;
          padding: 0 10px;
          
          :focus {
            outline: 1px solid;

            &+.delete {
              display: none;
            }
          }

          ::placeholder {
            font-style: italic;
          }
        }

        &.done {
          input {
            text-decoration: line-through;
            color: #757575;

            :focus {
              text-decoration: none;
              color: #000;
            }
          }
        }

        .delete {
          display: none;
        }

        &.default {
          .delete {
            display: none !important;
          }
        }

        &:hover {
            &>.delete {
              display: block;
              position: absolute;
              right: 0px;
              align-self: center;
              color: #e07578;

              &:hover {
                color: #e00000;
              }
            }  
          }
      }
    }
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
