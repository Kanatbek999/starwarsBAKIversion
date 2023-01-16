import React, { useState } from "react";
import ItemList from './../item-list/item-list';
import {ItemDetails, Record} from './../item-details/index';
import Row from './../row/row';
import withSwapi from './../hoc/index';
//////////////////////////////////////////////////////////
let c = false
const leftElementMethods = (swapi) => {
    const perOrPlanList = c === false ? swapi.getAllPlanets : swapi.getAllPeople
    return({
    getData: perOrPlanList,
})}
const NewItemList = withSwapi(ItemList, leftElementMethods)
//////////////////////////////////////////////////////////
const rightElementMethods = (swapi) => {
    const perOrPlanInfo = c === false ? swapi.getPlanet : swapi.getPerson
    const perOrPlanImg = c === false ? swapi.getPlanetImage : swapi.getPersonImage
    return ({
        getData: perOrPlanInfo,
        getImg: perOrPlanImg,
    })}
    const NewItemDetails = withSwapi(ItemDetails, rightElementMethods)
    //////////////////////////////////////////////////////////
    const PeoplePage = () => {
    const [state, setState] = useState({itemId: 2})        

    const leftElement = 
    <NewItemList setItemId={id=>setState({itemId: id})}>
        {(choto) => `${choto.name} - ${c === true ? choto.birthYear : choto.rotationPeriod}`}
    </NewItemList>
    const rightElement = <NewItemDetails itemId={state.itemId}>
            <Record label={c === true ? `Gender: ` : `Population: `} label_key={c === true ? `gender` : `population`}/>
            <Record label={c === true ? `Birth Year: ` : `Rotation Period: `} label_key={c === true ? `birthYear` : `rotationPeriod`}/>
            <Record label={c === true ? `Eye Color: `: `Diameter: `} label_key={c === true ? `eyeColor` : `diameter`}/>
    </NewItemDetails>

    return (
        <>
            <Row left={leftElement} right={rightElement} />
        </>
    )
}
//////////////////////////////////////////////////////////
export default PeoplePage