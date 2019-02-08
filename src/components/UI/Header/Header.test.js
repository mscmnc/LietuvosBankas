import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from './Header';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage';

configure({adapter: new Adapter()});

describe('<Header/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header onGetCurrencyList={() => {}} loading={true} error={null} currencyListData={null}/>);
    });

    it('should render <Spinner/> element if loading is true', () => {
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should render <ErrorMessage/> if there is an Error', () => { 
        wrapper.setProps({error: true, loading: false });
        expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    });

});