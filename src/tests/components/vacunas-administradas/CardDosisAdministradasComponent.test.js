import Enzyme , { shallow } from "enzyme";
import { shallowToJson } from 'enzyme-to-json'

import { CardDosisAdministradasComponent } from "../../../components/vacunas-administradas/CardDosisAdministradasComponent";
import { informations } from "../../fixtures/data";

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas unitarias para <CardDosisAdministradasComponent/>',() =>{

    const wrapper = shallow( 
    <CardDosisAdministradasComponent 
        total={informations[0].sumaReduce} 
        title={informations[0].title} 
        img={informations[0].img}
        loading={false}/>)

        
    test('Renderizar correctamente el componente',()=>{
        expect( shallowToJson(wrapper) ).toMatchSnapshot()
    })
   
    test('Debe de mostrar el total correctamente', ()=>{

        const div = wrapper.find('.data')
        expect(div.text()).toBe(`${informations[0].sumaReduce}`)
    })

    test('No debe de cargar el total y debe de mostrarse el spinner',()=>{

        const wrapper = shallow(
            <CardDosisAdministradasComponent 
        total={informations[0].sumaReduce} 
        title={informations[0].title} 
        img={informations[0].img}
        loading={true}/>)

        expect(wrapper.find('SpinnerComponent').length ).toBe( 1 )
    })
})