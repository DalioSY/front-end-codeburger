import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 40px rga(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`

export const Bood = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  grid-gap: 10px, 15px;
  padding: 10px;

  img {
    border-radius: 10px;
    width: 120px;
    height: 120px;
  }

  p {
    font-size: 16px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      font-size: 24px;
      cursor: pointer;
    }
  }
`

export const EmptyCart = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
