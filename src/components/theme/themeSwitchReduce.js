

export const themeSwitchReduce = ( state = [],action )=>{

    switch (action.type) {
        case 'light':

             document.documentElement.setAttribute('data-theme',action.type)
             localStorage.setItem('data-theme',action.type)


             return { type: action.type , active: 'isActivated'};

         case 'dark':

             document.documentElement.setAttribute('data-theme',action.type)
             localStorage.setItem('data-theme',action.type)


             return { type: action.type , active: 'isActivated'};

        default:

            document.documentElement.removeAttribute('data-theme')
            localStorage.removeItem('data-theme')
            
            return { type: action.type , active: 'isActivated'};
        }
}