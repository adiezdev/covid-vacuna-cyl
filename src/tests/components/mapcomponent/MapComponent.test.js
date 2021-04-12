import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
;
import { MapComponent } from "../../../components/MapComponent";

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas unitarias parel componente <MapComponent/>',()=>{
    
    test('Renderizar correctamente', () => {
        const wrapper = shallow(<MapComponent/>)
        expect(shallowToJson(wrapper)).toMatchSnapshot()

    })
    
})