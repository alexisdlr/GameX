import React, { useEffect } from 'react'
import { useRef } from 'react'
const Paypal = ({total}) => {
  const paypal = useRef()
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: 'cool looking order',
              amount: {
                currency_code: 'MX',
                value: total
              }
            }
          ]
        })
      },
      onAprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
      },
      onError: async (err) => {
        console.log(err)
      }
    }).render(paypal.current)
  },[])
  return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}

export default Paypal