import Enzyme, { shallow } from "enzyme";
import {cleanup, render, waitFor, waitForElement} from '@testing-library/react'
import { VacunasRecibidasComponent } from "../../../components/vacunas-recibidas/VacunasRecibidasComponent";

import "@testing-library/jest-dom/extend-expect";


import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas unitarias sobre el compoenete <VacunasRecibidasComponent/>',() => {

    
    test('Spiner enconrado antes de hacer la peticion del datos',async () => {


        const { findByTestId  } = render(<VacunasRecibidasComponent />);

        const loading = await findByTestId("loading");
        expect(loading).toBeInTheDocument();

        cleanup()
    })


    it('Cuando el fetch ha acabado de recibir datos', async() =>{
        const { findByTestId  } = render(<VacunasRecibidasComponent />);

        const list = await  findByTestId('list');
        expect(list).toBeInTheDocument();
        
    })

})

