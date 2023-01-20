import React, {useState} from 'react'
import { Record } from '../item-details';
import { StarshipItemDetails, StarshipList } from '../sw-components/index'
import Row from './../row/index';
////////////////////////////Left Element//////////////////////////////
const StarshipsPage = () => {
    const [state, setState] = useState({itemId: 48})
    const leftElement = (
    <StarshipList setItemId={(id)=>setState({itemId: id})}>
        {(choto)=>`${choto.name} - ${choto.model}`}
    </StarshipList>
    )
////////////////////////////Right Element//////////////////////////////
    const rightElement = (
    <StarshipItemDetails itemId={state.itemId}>
        <Record label={`Model: `} label_key='model'/>   
        <Record label={`Manufacturer: `} label_key={`manufacturer`}/>   
        <Record label={`Cost (In credits): `} label_key={`costInCredits`}/>
    </StarshipItemDetails>
    )
////////////////////////////Row///////////////////////////////
    return (
        <>
            <Row left={leftElement} right={rightElement} />
        </>
    )
}
////////////////////////////exports///////////////////////////
export default StarshipsPage