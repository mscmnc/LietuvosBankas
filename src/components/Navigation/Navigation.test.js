import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Navigation } from './Navigation';
import ErrorMessage from '../UI/ErrorMessage';
import Spinner from '../UI/Spinner';

configure({adapter: new Adapter()});

describe('<Navigation/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navigation onGetCurrencyList={() => {}} loading={true} error={null} currencyListData={null}/>);
    });

    it('should render <Spinner/> element if loading is true', () => {
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should render <ErrorMessage/> if there is an Error', () => { 
        wrapper.setProps({error: true, loading: false });
        expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    });

});