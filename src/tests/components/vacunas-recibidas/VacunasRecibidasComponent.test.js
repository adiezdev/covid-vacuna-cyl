import Enzyme, { shallow } from "enzyme";
import {render} from '@testing-library/react'
import { VacunasRecibidasComponent } from "../../../components/vacunas-recibidas/VacunasRecibidasComponent";

import "@testing-library/jest-dom/extend-expect";


import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas unitarias sobre el compoenete <VacunasRecibidasComponent/>',() => {

    
    const wrapper = shallow( <VacunasRecibidasComponent/> )

    test('Spiner enconrado antes de hacer la peticion del datos',async () => {


        const { findByTestId  } = render(<VacunasRecibidasComponent />);

        const loading = await findByTestId("loading");
        expect(loading).toBeInTheDocument();
    })



})

