// thaw-graph/test/main.test.ts

'use strict';

// import { sayHi } from '../lib/main';
import { sayHi } from '..';

test('Nonsense', () => {
	// Arrange
	const expectedResult = 'Hello, World!';
	// Act
	const actualResult = sayHi();

	// Assert
	expect(actualResult).toBe(expectedResult);
});
