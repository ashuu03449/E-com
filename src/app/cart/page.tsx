import AnotherHeroSection from '@/components/AnotherHeroSection'
import CartComp from '@/components/CartCom'
import { CartProvider } from '@/components/CartContext'
import React from 'react'



export default function Cart() {
  return (
  <>
  <AnotherHeroSection mainhead='Cart' homename='Home' currentPage='Cart' />
  <CartProvider>
      <CartComp />
    </CartProvider>
  </>
  )
}
