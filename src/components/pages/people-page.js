import React, { useState } from "react";
import ItemList from './../item-list/item-list';
import {ItemDetails, Record} from './../item-details/index';
import Row from './../row/row';
import withSwapi from './../hoc/index';
//////////////////////////////////////////////////////////


//Knopku sdelat ne mogu :(
let changer = 1
//tolko tak rabotaet 


const leftElementMethods = (swapi) => {
    const perOrPlanList = changer === 2 ? swapi.getAllPlanets : swapi.getAllPeople
    return({
    getData: perOrPlanList,
})}
const NewItemList = withSwapi(ItemList, leftElementMethods)
//////////////////////////////////////////////////////////
const rightElementMethods = (swapi) => {
    const perOrPlanInfo = changer === 2 ? swapi.getPlanet : swapi.getPerson
    const perOrPlanImg = changer === 2 ? swapi.getPlanetImage : swapi.getPersonImage
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
        {(choto) => `${choto.name} - ${changer === 1 ? choto.birthYear : choto.rotationPeriod}`}
    </NewItemList>
    const rightElement = <NewItemDetails itemId={state.itemId}>
            <Record label={changer === 1 ? `Gender: ` : `Population: `} label_key={changer === 1 ? `gender` : `population`}/>
            <Record label={changer === 1 ? `Birth Year: ` : `Rotation Period: `} label_key={changer === 1 ? `birthYear` : `rotationPeriod`}/>
            <Record label={changer === 1 ? `Eye Color: `: `Diameter: `} label_key={changer === 1 ? `eyeColor` : `diameter`}/>
    </NewItemDetails>

    return (
        <>
            <Row left={leftElement} right={rightElement} />
        </>
    )
}
//////////////////////////////////////////////////////////
export default PeoplePage