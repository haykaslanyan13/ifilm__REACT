import styled from 'styled-components'

export default styled.div<any>`
  .mdc-linear-progress__buffer {
    background-color: #fff !important;
  }
  .mdc-linear-progress__bar-inner {
    background-color: #fe7900;
  }
  height: ${({ isOpen }) => (isOpen ? '170px' : '80px')};
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
  .Menu_Bar {
    &__wrapper {
      position: fixed;
      height: ${({ isOpen }) => (isOpen ? '170px' : '80px')};
      transition: all 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);
      z-index: 500;
      top: 0;
      left: 0;
      right: 0;
      background-color: ${({ $mode }) =>
        $mode == 'night' ? 'rgb(15,15,16)' : '#fff'};
    }
    &__container {
      margin-left: 25px;
      margin-right: 25px;
      margin-top: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    &__content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
    &__input {
      width: 73vw;
    }
    &__logo {
      width: 120px;
      height: 40px;
      cursor: pointer;
    }
    &__dropdown {
      ${({ $mode }) => $mode == 'night' && 'color: #fff;'}
    }
    &__linear-progress {
      position: absolute;
      top: 0;
      left: 0;
    }
    &__switch {
      &-container {
        margin-top: 10px;
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
      }
      &-label {
        color: ${({ $mode }) => ($mode == 'light' ? '#6c757d' : '#fff')};
        font-weight: 900;
      }
    }
    &__search {
      &-content {
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        transition: ${({ isOpen }) =>
          isOpen
            ? 'opacity 0.5s cubic-bezier(0.42, 0, 1, 0.08)'
            : 'opacity 0.2s'};
        margin-top: 20px;
      }
    }
  }
`
