import styled from 'styled-components';

export const UlWrapper = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;
  background: #fff;
  border-top: 1px solid #d8d8d8;
  display: flex;
`

export const LiWrapper = styled.li`
  flex: 1;
  line-height: 48px;
  text-align: center;
  a{
    text-decoration: none;
    color: #696969;
    &.active{
      color: #f03d37;
    }
  }
`
