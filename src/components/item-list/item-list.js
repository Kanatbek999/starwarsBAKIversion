import React, { useEffect, useState } from 'react';
import './item-list.css'

const ItemList = ({setItemId, getData, children}) => {
  const [state, setState] = useState({data: []})

  useEffect(() => {
    getData()
    .then(data => {
      setState({data: data})
    })
  }, [getData])

  const content = state.data.map(item => {
      return (
        <li onClick={()=>setItemId(item.id)} key={item.id} className="list-group-item">
          {children(item)}
        </li>
      )
  })
  
  return(
  <ul className="item-list list-group aaa">
    {content}
  </ul>
  )
}

export default ItemList