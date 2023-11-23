import adjustColorForProjection from '../src/index.js';

describe('adjustColorForProjection', () => {
    test('correctly adjusts color for green surface', () => {
        const inputColor = { r: 255, g: 0, b: 0 }; // Red
        const surfaceColor = { r: 0, g: 255, b: 0 }; // Green
        const expected = { r: 255, g: 0, b: 128 }; // Expected result after blending with magenta
    
        expect(adjustColorForProjection(inputColor, surfaceColor)).toEqual(expected);
    });

    // More tests...
});
