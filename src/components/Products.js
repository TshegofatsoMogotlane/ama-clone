import React from 'react'

import "./Products.css"
import Product from './Product'

const Products = () => {
  return (
    <>
      <div className='products_row'>
        <Product
          id="1" 
          title="Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Space Gra..."
          image="https://m.media-amazon.com/images/I/31+KEhn35VL._AC._SR240,240.jpg"
          rating={4}
          price={9966.99}
        />
        <Product
          id="2" 
          title="Apple 2020 MacBook Air 
          (13-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB, 256GB)
           - Space Gray"
          image="https://m.media-amazon.com/images/I/61Rly6yup7L._AC._SR360,460.jpg"
          rating={5}
          price={1549}
        />
      </div>
      <div className='products_row'>
        <Product
          id="3" 
          title="Astrum GW520 Wireless Gamepad
           Controller with 5 in 1 platform,
            2 in 1 receiver, 2.4Ghz,
             range up to 10m, dual analog stick,
              8 directional buttons,
               compatible PC / PS2 / PS3, Android TV, Box"
          image="https://m.media-amazon.com/images/I/71IRF3-h-HS._AC._SR360,460.jpg"
          rating={5}
          price={329.00}
        />
        <Product
          id="4" 
          title="Seagate 2TB Portable External Hard Drive for PS4 and PS5"
          image="https://m.media-amazon.com/images/I/81LxKyhCEkL._AC._SR360,460.jpg"
          rating={3}
          price={2099.00}
        />
        <Product
          id="5" 
          title="Canon PIXMA TS3440 Inkjet Printer"
          image="https://m.media-amazon.com/images/I/71eMkZPqWZL._AC._SR360,460.jpg"
          rating={2}
          price={699.00}
        />
      </div>
      <div className='products_row'>
        <Product
          id="6" 
          title="Glueless Lace Front Wigs Straight Malaysian Virgin Natural Color 180% Density Pre Plucked HD Transparent Lace Wigs Human Hair with Baby Hair 20 Inch"
          image="https://m.media-amazon.com/images/I/71481+xTO+L._AC._SR360,460.jpg"
          rating={1}
          price={2800.00}
        />
        <Product
          id="7" 
          title="Fine Mist Spray Bottle (300ml) - Green"
          image="https://m.media-amazon.com/images/I/51eKDuiBlQL._AC._SR360,460.jpg"
          rating={4}
          price={160.00}
        />
        <Product
          id="8" 
          title="KITCHENS AND DINING ROOMS: CUISINES ET SALLES A MANGER KEUKENS EETKAMERS Hardcover"
          image="https://m.media-amazon.com/images/I/71lNA+MsT5L._AC_UL320_.jpg"
          rating={3}
          price={1539.37}
        />
        <Product
          id="9" 
          title="125cc ATV"
          image="https://m.media-amazon.com/images/I/61pPRJZBthL._AC_UL320_.jpg"
          rating={4}
          price={40365.00}
        />
      </div>
    </>
  )
}

export default Products
