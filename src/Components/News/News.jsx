import React, {useEffect, useState}from 'react'
import { ContentJson } from '../ContentJs/ContentNews'
import { Item } from '../Item/Item'
export const News = () => {

  const [filteredItems, setfilteredItems] = useState([])
useEffect(() => {
  const interval= setInterval(() => {
    const UbJson=Math.floor(Math.random() * ContentJson.length)
    const Objects=ContentJson[UbJson]
    const filter = ContentJson.filter(item => item._id === Objects._id);
    setfilteredItems(filter)
  },9000)
return ()=>clearInterval(interval)
}, [])

  return (

    <div className='w-6/12 flex justify-center  flex-col '>
          {
            filteredItems.map((item) => (
              <Item 
              key={item._id}
              image={item.ImageNews}
              title={item.titleNews}
              description={item.DescriptionNews}
              date={item.dateNews}
              />
            ))

          }

    </div>
  )
}
