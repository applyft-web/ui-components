import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle<{ $isArabic?: boolean, $customStyles?: string }>`
  :root {
    --system-ui: Arial, system-ui, "Segoe UI", Roboto, Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--system-ui);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: none;
    overscroll-behavior: none;
    ${({ $isArabic }) => $isArabic && css`
      direction: rtl;
      unicode-bidi: bidi-override;
    `};

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  html, body {
    background-color: ${({ theme }) => theme?.colors?.bodyBackground || '#fff'};
  }

  html {
    height: 100%;
  }

  body {
    width: 100%;
    height: 100vh;
    height: 100dvh;
    height: 100svh;
    height: calc(var(--vh,1svh) * 100);
    color: ${({ theme }) => theme?.colors?.text || '#323232'};
    user-select: none;

    > * {
      width: 100%;
      height: 100%;
    }
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="password"],
  input[type="tel"],
  input[type="textarea"],
  input[type="radio"],
  textarea,
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="radio"] {
    display: none;
  }

  a, input, button {
    font-family: var(--system-ui);
  }
  
  .scrollable {
    overflow-x: auto;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      display: none;
    }
  }
  
  ${({ $customStyles }) => $customStyles};
`

export { useDynamicHeight } from '../../utils'
