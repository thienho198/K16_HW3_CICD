import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormAddToCart from './FormAddToCart';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// jest.mock('react-router-dom', () => ({
//     __esModule: true,
//     useLocation: jest.fn().mockReturnValue({
//       pathname: '/another-route',
//       search: '',
//       hash: '',
//       state: null,
//       key: '5nvxpbdafa',
//     }),
//   }));

Enzyme.configure({ adapter: new Adapter() });


describe('Test Case SearchPage Have Label SEARCH FILTER ', () => {
    it('should show the text', () => {
        const store = mockStore({}); 
        const formWrapper = shallow(<Provider store={store}><FormAddToCart /></Provider>);
        const element = formWrapper.render().find('.shoper-form-add-to-cart__content__buttonadd')
           expect(element.text()).toBe('Add To Cart');
        // console.log(element); 
   });
});