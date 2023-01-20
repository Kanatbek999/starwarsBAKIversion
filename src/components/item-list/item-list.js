import React, { useEffect, useState } from 'react';
import './item-list.css'

const ItemList = ({setItemId, getData, children}) => {
  const [state, setState] = useState({data: []})
  const [load, setLoad] = useState(false)

  useEffect(() => {
    getData()
    .then(data => {
      setState({data: data})
      setLoad(true)
    })
  }, [getData])

  const content = state.data.map(item => {
      return (
        <li onClick={()=>setItemId(item.id)} key={item.id} className="list-group-item">
          {children(item)}
        </li>
      )
  })
  if(load === false){
    return (
      <div className='loading'>Loading . . .</div>
    )
  }
  return(
  <ul className="item-list list-group aaa">
    {content}
  </ul>
  )
}

export default ItemList