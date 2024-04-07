import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import Offers from '../../assets/offers.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, OffersImg, ContainerItems, Image, Button } from './styles'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()

  const { push } = useHistory()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }
    loadOffers()
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
      <OffersImg src={Offers} alt={'logo da Oferta'} />
      <Carousel
        itemsToShow={3}
        style={{ with: '90%' }}
        breakpoints={preakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="foto da Oferta" />
              <p> {product.name} </p>
              <p> {product.formatedPrice} </p>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
