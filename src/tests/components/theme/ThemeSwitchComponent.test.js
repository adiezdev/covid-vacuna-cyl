import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'

import { ThemeSwitchComponent } from '../../../components/theme/ThemeSwitchComponent'


import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



describe('Pruebas al componente <TheSwitchComponent/>', () =>{

 

    test('Debe de mostrarse correctamente', () =>{

        const wrapper = shallow(<ThemeSwitchComponent/>)

        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })

})