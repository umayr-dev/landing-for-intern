import React from 'react'

function Banner() {
  return (
    <>
    <div className="banner">
        <div className="banner__content">
            <h1>Introduce Your Product <br /> Quickly & Effectively</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                <br /> 
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            <div className="banner__buttons">
                <button>Purchase UI Kit</button>
                <button>Learn More</button>
            </div>
        </div>
        <img src="/images/banner.png"  alt="" />
    </div>
    </>
  )
}

export default Banner