import React from 'react';
import ReactTestUtils from 'react-test-renderer'
import Shell from './shell.jsx'

it('renders without crashing', () => {
    const component = ReactTestUtils.create(<Shell />)
})