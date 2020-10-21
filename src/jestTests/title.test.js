import '@testing-library/jest-dom/';
import React from 'react';
import renderer from 'react-test-renderer';

import Title from '../components/Title';

it('Title renders', () => {
    const tree = renderer
        .creeate(<Title title="title" date="June 20, 1990"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});