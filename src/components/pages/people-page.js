import React, { useState } from "react";
import {Record} from './../item-details/index';
import Row from './../row/row';
import {PeopleList, PersonItemDetails} from '../sw-components/index'
/////////////////////////My Changer/////////////////////////////////////////
// let c = true
///////////////////////////leftElementMethods///////////////////////////////
// const leftElementMethods = (swapi) => {
//     // const perOrPlanList = c === false ? swapi.getAllPlanets : swapi.getAllPeople
//     return({
//     getData: swapi.getAllPeople,
// })}
// const NewItemList = withSwapi(ItemList, leftElementMethods)
///////////////////////////rightElementMethods///////////////////////////////
// const rightElementMethods = (swapi) => {
//     // const perOrPlanInfo = c === false ? swapi.getPlanet : swapi.getPerson
//     // const perOrPlanImg = c === false ? swapi.getPlanetImage : swapi.getPersonImage
//     return ({
//         getData: swapi.getPerson,
//         getImg: swapi.getPersonImage,
//     })}
// const NewItemDetails = withSwapi(ItemDetails, rightElementMethods)
//////////////////////////PeoplePage/////////////////////////////////////////
const PeoplePage = ({prop}) => {
    // console.log(itemId);
    const [state, setState] = useState({itemId: prop}) 
    const leftElement = (
    <PeopleList setItemId={id=>setState({itemId: id})}>
        {/* {(choto) => `${choto.name} - ${c === true ? choto.birthYear : choto.rotationPeriod}`} */}
        {(choto) => `${choto.name} - ${choto.birthYear}`}
    </PeopleList>
    )
    const rightElement = (
    <PersonItemDetails itemId={state.itemId}>
            {/* <Record label={c === true ? `Gender: ` : `Population: `} label_key={c === true ? `gender` : `population`}/>
            <Record label={c === true ? `Birth Year: ` : `Rotation Period: `} label_key={c === true ? `birthYear` : `rotationPeriod`}/>
            <Record label={c === true ? `Eye Color: `: `Diameter: `} label_key={c === true ? `eyeColor` : `diameter`}/> */}
            <Record label={`Gender: `} label_key={`gender`}/>
            <Record label={`Birth Year: `} label_key={`birthYear`}/>
            <Record label={`Eye Color: `} label_key={`eyeColor`}/>
    </PersonItemDetails>
    )
    return (
        <>
            <Row left={leftElement} right={rightElement} />
        </>
    )
}
//////////////////////////exports////////////////////////////////////////////
export default PeoplePage