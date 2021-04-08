import {themeSwitchReduce} from '../../../components/theme/themeSwitchReduce'

describe('Prebas en el reducer de theme',() =>{

    const defaultActivate = {type: null }
    const darkActivate = {type: 'dark' }
    const lightActivate = {type: 'light' }

    test('debe de retornar el estado por defecto',()=>{

        const state = themeSwitchReduce([],defaultActivate)
        expect( state ).toEqual( {type: null , active: 'isActivated'} )
    })
    
    test('debe de retornar el estado dark',()=>{

        const state = themeSwitchReduce([], darkActivate)
        expect( state ).toEqual( {type: 'dark' , active: 'isActivated'} )
    })

    test('debe de retornar el estado light',()=>{

        const state = themeSwitchReduce([], lightActivate)
        expect( state ).toEqual( {type: 'light' , active: 'isActivated'} )
    })
})