import React, { useEffect, useState } from 'react';
import './item-details.css';

const Record = ({label, label_key, data}) => {
  // if(data.hasOwnProperty('gender') === true){
  //   setI('people')
  // }else if(data.hasOwnProperty('population') === true){
  //   setI('planets')
  // }
  return (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{data[label_key]}</span>
  </li>
  )
}

const ItemDetails = ({itemId, getData, children, getImg, l}) => {
  const [state, setState] = useState({data: {}})
  //////////////////////////////////////////////////////////////////
  const {id, name} = state.data;
  const itemImg = getImg({id})
  //////////////////////////////////////////////////////////////////
  const updatePerson = (itemId) => {
    getData(itemId)
    .then(data => {
    setState({data: data})
  })
  }
  useEffect(()=>{
    updatePerson(itemId)
  }, [itemId])
  
    return (
      <div className="person-details card">
        <img className="person-image" src={itemImg}/>
        <div className="card-body">
          <div className='rdf'>
          <h4>{name}</h4>
          </div>
          <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (item) => {
              return React.cloneElement(
                item,
                {data: state.data}
                )
              })
            }
          </ul>
        </div>
      </div>
    );
}

export {ItemDetails, Record}