import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import data_product from '../Assets/data'

export default function Popular() {
  return (

    <div className='popular'>
      <div className="popular-header">
        <h2>BABAYEVA BAGS</h2>
        <p>An elevated wardrobe for the new season, defined by rich tactility and a sense of quiet flow.</p>
      </div>

      
      
      {/* <hr /> */}
      
      {/* <div className="popular-item">
        {data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div> */}
    </div>

  )
}
