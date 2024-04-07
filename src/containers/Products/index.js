import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/products-logo.svg'
import { CardProduct } from '../../components/'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContsiners
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterdProducts, setFilterdProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const allCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(allCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterdProducts(products)
    } else {
      const newFilterdProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilterdProducts(newFilterdProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt={'logo do produto'} />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContsiners>
        {filterdProducts &&
          filterdProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContsiners>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
