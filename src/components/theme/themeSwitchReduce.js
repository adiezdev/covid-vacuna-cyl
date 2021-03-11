

export const themeSwitchReduce = ( state = [],action )=>{

    switch (action.type) {
        case 'light':
            
             document.documentElement.setAttribute('data-theme',action.type)
             localStorage.setItem('data-theme',action.type)
             return 'isActivated';

         case 'dark':

             document.documentElement.setAttribute('data-theme',action.type)
             localStorage.setItem('data-theme',action.type)
             return 'isActivated';

        default:
            break;
    }
}