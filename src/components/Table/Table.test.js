import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Table } from './Table';
import ErrorMessage from '../UI/ErrorMessage';
import Spinner from '../UI/Spinner';


configure({adapter: new Adapter()});

describe('<Table/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Table resultsLoading={true} resultsError={null} results={null} currentData={null} currencyListData={null} />);
    });

    it('should render <Spinner/> element if loading is true', () => { 
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should render <ErrorMessage/> component if there is an Error', () => { 
        wrapper.setProps({resultsError: true, resultsLoading: false });
        expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    });

});