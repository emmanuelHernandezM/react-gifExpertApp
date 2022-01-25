import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
  
    test('Debe de traer 10 elementos',  async () => {

        const gifs = await getGifs('Fornite')
        expect(gifs.length).toBe(10);
    });

    test('Debe de traer 0 sin mandar categoría',  async () => {

        const gifs = await getGifs('')
        expect(gifs.length).toBe(0);
    });
    

});