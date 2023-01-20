import React, { useState } from "react";
import {Record} from './../item-details/index';
import Row from './../row/row';
import {PlanetList, PlanetItemDetails} from '../sw-components/index'
////////////////////////////////Planet Page////////////////////////////////////////
const PlanetPage = () => {
    const [state, setState] = useState({itemId: 2})
    const leftElement = (
    <PlanetList setItemId={id=>setState({itemId: id})}>
        {(choto) => `${choto.name} - ${choto.rotationPeriod}`}
    </PlanetList>
    )
    const rightElement = (
    <PlanetItemDetails itemId={state.itemId}>
            <Record label={`Population: `} label_key={`population`}/>
            <Record label={`Rotation Period: `} label_key={`rotationPeriod`}/>
            <Record label={`Diameter: `} label_key={`diameter`}/>
    </PlanetItemDetails>
    )
    return (
        <>
            <Row left={leftElement} right={rightElement} />
        </>
    )
}
//////////////////////////exports////////////////////////////////////////////
export default PlanetPage