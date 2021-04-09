import Enzyme, { shallow } from "enzyme";
import { DosisAdministradasComponent } from "../../../components/vacunas-administradas/DosisAdministradasComponent";
import { data } from "../../fixtures/data";


import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Pruebas <DosisAdministradasComponent/>',() =>{

    const warpper = shallow( <DosisAdministradasComponent/> )

    test('Debe de mostrarse correctamente',() =>{
        warpper.setProps( data )
        expect(warpper).toMatchInlineSnapshot()
    })
})