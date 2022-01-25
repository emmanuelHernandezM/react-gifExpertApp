import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = "Un titulo";
    const url = "https://localhost/algo.jpg";
    const wrapper = shallow( <GifGridItem title={title} url={url}  /> );

    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    });

    test('Debe de tener la imagen igual al url y alt de los props ', () => {
        const img = wrapper.find('img');
        // console.log(img.html()); //Obtener la etiqueta html
        //console.log( img.props() ); //Obtener las props
        expect( img.props().src ).toBe(url);
        expect( img.props().alt ).toBe(title);
    });

    test('Debeb tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.html());
        // console.log(div.hasClass('animate__fadeIn'));
        const className = div.hasClass('animate__fadeIn');
        expect(className).toBe(true);
    });
  
});