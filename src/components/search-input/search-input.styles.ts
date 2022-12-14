import styled from 'styled-components'

export default styled.div<any>`
  .divider {
    border-left: 1px solid #ffa502;
    height: 25px;
  }
  .Search-input {
    &__icon {
      height: 16px;
      width: 16px;
      margin-right: 7px;
      filter: invert(89%) sepia(3%) saturate(8%) hue-rotate(315deg)
        brightness(83%) contrast(82%);
    }
    &__input {
      border: 2px solid #ffa502;
      border-radius: 5px;
      height: 35px;
      &:hover {
        border: 2px solid #ffa502;
      }
    }
    &__button-text {
      color: #6c757d;
      padding: 0;
      font-weight: bolder;
    }
  }
`
