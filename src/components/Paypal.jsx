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
                currency_code: 'MXN',
                value: total
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order) 
      },
      onError: async (err) => {
        console.log(err)
      }
    }).render(paypal.current)
  },[])
  return (
    <div ref={paypal}></div>
  )
}

export default Paypal