import { getVacunasCyL } from "../../helpers/getVacunasCyL";




describe('Testeo del hook useFect',()=>{

    test('Que devuelva un dato de personas vacunadas',async()=>{

        const  data = getVacunasCyL( 1 , 'personas-vacunadas-covid')
        expect(await data).toEqual([{
            id: '848839a4931164a503c4fee8ec56df74669ad122',
            fields: {
              provincia: 'León',
              personas_vacunadas_1a_dosis: 0,
              porcentaje_residentes_1a_dosis: 44.82088516,
              fecha: '2021-05-30',
              porcentaje_residentes_2a_dosis: 27.90449545,
              dosis_administradas: 2,
              personas_vacunadas_ciclo_completo: 2
            }
          }])
    })
})