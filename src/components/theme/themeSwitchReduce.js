
/**
 * Switch that composes each activation case, in which the predefined theme of your choice is stored. 
*/
export const themeSwitchReduce = ( state = [],action )=>{

    switch (action.type) {
        case 'light':

             document.documentElement.setAttribute('data-theme',action.type)
             
             return { type: action.type , active: 'isActivated'};

         case 'dark':

             document.documentElement.setAttribute('data-theme',action.type)

             return { type: action.type , active: 'isActivated'};

        default:

            document.documentElement.removeAttribute('data-theme')

            return { type: action.type , active: 'isActivated'};
        }
}