import React from 'react'

function PriceBanner() {
  return (
    <>
    <div className="price-banner">
        <img src="/images/bg.png" alt="" />
        <div className="price-banner__content">
          <h1>A Price To Suit Everyone</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <h1>$40</h1>
          <p>UI Design Kit</p>
          <p>See, One price. Simple.</p>
          <button>Purchase Now</button>
        </div>
    </div>
    </>
  )
}

export default PriceBanner