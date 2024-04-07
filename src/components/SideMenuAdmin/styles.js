import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;
  color: #fff;

  hr {
    margin: 50px 15px;
  }

  .logout {
    position: fixed;
    bottom: 30px;
  }
`
export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;
`
export const ListLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-left: 8px;
  color: #fff;
`
