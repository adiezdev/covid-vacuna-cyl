import Enzyme, { shallow } from "enzyme";
import { VacunasRecibidasComponent } from "../../../components/vacunas-recibidas/VacunasRecibidasComponent";

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas unitarias sobre el compoenete <VacunasRecibidasComponent/>',() => {

    const mockConfig = {
        data: "mock data",
        isLogin: false
    };

    jest.mock("../../../hooks/useFetch", () => ({
        useFetch: () => mockConfig
    }));
    
    const wrapper = shallow( <VacunasRecibidasComponent/> )

    test('Debe de mostrarse la carga antes de la llamada a la Api', () => {
        expect(wrapper.find('SpinnerComponent').length).toBe(1)
    })


})