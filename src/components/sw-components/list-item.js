import withSwapi from './../hoc/index';
import ItemList from './../item-list/item-list';
////////////////////////////////No React////////////////////////////////////
const peopleElementMethods = (swapi) => {
    return({
    getData: swapi.getAllPeople,
})}
const PeopleList = withSwapi(ItemList, peopleElementMethods)
////////////////////////////////////////////////////////////////////////////
const planetElementMethods = (swapi) => {
    return ({
        getData: swapi.getAllPlanets,
    })}
const PlanetList = withSwapi(ItemList, planetElementMethods)
////////////////////////////////////////////////////////////////////////////
const starshipsElementMethods = (swapi) => {
    return({
    getData: swapi.getAllStarships,
})}
const StarshipList = withSwapi(ItemList, starshipsElementMethods)
////////////////////////////////exports/////////////////////////////////////
export {PlanetList, PeopleList, StarshipList}