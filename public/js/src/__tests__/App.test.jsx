import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import App from '../App';

describe('App', () => {
	it('should render without crashing', () => {
		const app = shallow(<App />);

		expect(app.contains('Learn React')).toBe(true);
	});

	it('should have the App CSS class', () => {
		const app = shallow(<App />);

		expect(app.is('.App')).toBe(true);
	});
});
