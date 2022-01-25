import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    });
  
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "Hola mundo";
        input.simulate('change', { target: { value: value } } );

        expect(wrapper.find('p').text().trim() ).toBe(value);

    });

    test('NO debe de postear la informacion con submit', () => {
      
        wrapper.find('form').simulate('submit', {preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();

    });
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = "Hola mundo"
        wrapper.find('input').simulate('change', { target: { value: value } });

        wrapper.find('form').simulate('submit', { preventDefault(){}});

        expect(setCategories).toHaveBeenCalled(); //Esperar que se haya llamado la funcion
        // expect(setCategories).toHaveBeenCalledTimes(2);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //Esperar un funcion

        expect( wrapper.find('input').prop('value') ).toBe(''); //esperar que el valor del input sea '' despues de la llamada
      
    });
    
    
    

});
