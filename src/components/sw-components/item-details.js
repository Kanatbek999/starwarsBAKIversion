import withSwapi from '../hoc';
import { ItemDetails} from '../item-details';
//////////////////////////////////////////////////////////////////////
const personElementMethods = (swapi) => {
    return ({
        getData: swapi.getPerson,
        getImg: swapi.getPersonImage,
    })}
const PersonItemDetails = withSwapi(ItemDetails, personElementMethods)
//////////////////////////////////////////////////////////////////////
const planetElementMethods = (swapi) => {
    return ({
        getData: swapi.getPlanet,
        getImg: swapi.getPlanetImage,
    })}
const PlanetItemDetails = withSwapi(ItemDetails, planetElementMethods)
//////////////////////////////////////////////////////////////////////
const starshipElementMethods = (swapi) => {
    return ({
        getData: swapi.getStarship,
        getImg: swapi.getStarshipImage,
    })}
const StarshipItemDetails = withSwapi(ItemDetails, starshipElementMethods)
//////////////////////////////////////////////////////////////////////
export {PlanetItemDetails, PersonItemDetails, StarshipItemDetails}