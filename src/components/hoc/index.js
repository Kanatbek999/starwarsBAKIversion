import React from 'react'
import { Consumer } from '../swapi-context'

const withSwapi = (View, parseFunc) => {
    const Wrapper = (props) => {
       return( 
        <Consumer>
            {
                (swapi) => {
                    const methods = parseFunc(swapi)
                    return <View {...props} {...methods}/>
                }
            }
        </Consumer>
    )}
    return Wrapper
}

export default withSwapi


// import React from 'react'
// import { Consumer } from '../swapi-context'

// const withSwapi = (View) => {

//     const Wrapper = (props) => {
//         return (
//             <Consumer>
//             {    
//                 function (swapi) {
//                     // const methods = parseFunc(swapi)
//                     return <View {...props} swapi={swapi}/>
//                  }
//             }
//             </Consumer>
//         )
//     }
//     return Wrapper
// }

// export default withSwapi