// thaw-graph/test/main.test.ts

'use strict';

import { sayHi } from '../lib/main';

// 	// Assert
// 	// test.expect(1);
// 	// assert.deepEqual(resultThaw, resultD3fc);
// 	expect(resultThaw).toStrictEqual(resultD3fc);
// });

test('Nonsense', () => {
	// Arrange
	const expectedResult = 'Hello, World!';
	// Act
	const actualResult = sayHi();

	// Assert
	expect(actualResult).toBe(expectedResult);
});
