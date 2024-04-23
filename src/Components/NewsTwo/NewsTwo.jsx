import React, {useEffect, useState}from 'react'
import { ContentJson } from '../ContentJs/ContentNews'
import { Item } from '../ItemTwo/ItemTwo'
export const NewsTwo = () => {

  
  const [filteredItems, setfilteredItems] = useState([])
useEffect(() => {
  const interval= setInterval(() => {
    const UbJson=Math.floor(Math.random() * ContentJson.length)
    const Objects=ContentJson[UbJson]
    const filter = ContentJson.filter(item => item._id !== Objects._id);
    const slicedItems = filter.slice(0, 3); 
    setfilteredItems(slicedItems)
  },9000)
return ()=>clearInterval(interval)
}, [])
  return (
    
    <div className='w-6/12 ml-10 '>
        {
            filteredItems.map((item) => (
              <Item 
              key={item._id}
              image={item.ImageNews}
              title={item.titleNews}
              date={item.dateNews}
              />
            ))

          }

    </div>
  )
}
