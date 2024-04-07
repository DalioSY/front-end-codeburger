import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'

export function CategoryCarosel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  const preakPoints = [
    { with: 1, itemsToshow: 1 },
    { with: 400, itemsToshow: 2 },
    { with: 600, itemsToshow: 3 },
    { with: 900, itemsToshow: 4 },
    { with: 1300, itemsToshow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Category} alt={'logo do Categoria'} />

      <Carousel
        itemsToShow={3}
        style={{ with: '90%' }}
        breakpoints={preakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="foto da cateoria" />
              <Button to={'/produtos'} state={{ categoryId: category.id }}>
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
