import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
  width: 100%;
  height: auto;
`
export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  background: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #9758a6;
  }
`

export const ProductsContsiners = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-content: center;
  margin-top: 20px;
`
