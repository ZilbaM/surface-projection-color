// Function to calculate the complementary color of the projection surface
function calculateComplementaryColor(surfaceColor) {
    return {
        r: 255 - surfaceColor.r,
        g: 255 - surfaceColor.g,
        b: 255 - surfaceColor.b
    };
}

// Function to blend two colors
function blendColors(color1, color2) {
    return {
        r: Math.round((color1.r + color2.r) / 2),
        g: Math.round((color1.g + color2.g) / 2),
        b: Math.round((color1.b + color2.b) / 2)
    };
}

// Main function to adjust color for projection
function adjustColorForProjection(inputColor, surfaceColor) {
    const complementarySurfaceColor = calculateComplementaryColor(surfaceColor);
    return blendColors(inputColor, complementarySurfaceColor);
}


export default adjustColorForProjection

