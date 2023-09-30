import { useCart } from 'react-use-cart'
import * as Constants from '../data/constants'
import CartItem from '../components/elements/Cart/CartItem'
import OrderSummary from '../components/elements/Cart/OrderSummary'

export default function Cart() {

  const {
    isEmpty,
    items
  } = useCart()

  if (isEmpty) return (
    <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
        <p className="mt-4">Your cart is empty</p>
    </main>
  )

  return (
    <>
      <main className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {items.map((item, i) => (
                <CartItem key={item.id} productId={item.id} productIdx={i} />
              ))}
            </ul>
          </section>
          <OrderSummary />
        </form>
      </main>
    </>
  )
}

export function getAllProductIds() {

  const products = Constants.products1;
  return products.map(product => {
    return {
      params: {
        PDP: product.id.toString()
      }
    }
  })
}