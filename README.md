# Surface Projection Color
## Description
**surface-projection-color** is a JavaScript library designed for color correction in video projection on colored surfaces. It provides a simple yet effective way to adjust the colors of your projection to account for the color of the surface, ensuring accurate and vibrant displays.

## Installation
```bash
npm install surface-projection-color
```
## Usage
Import the **adjustColorForProjection** function from the package and use it to calculate the adjusted color for projection.

```javascript
import adjustColorForProjection from 'surface-projection-color';

const inputColor = { r: 255, g: 0, b: 0 }; // Example input color (Red)
const surfaceColor = { r: 0, g: 255, b: 0 }; // Surface color (Green)

const adjustedColor = adjustColorForProjection(inputColor, surfaceColor);
console.log(adjustedColor); // Adjusted color
```
## Features
- **Complementary Color Calculation**: Calculates the complementary color of the projection surface to blend with the input color.
- **Color Blending**: Blends two colors to achieve the desired output for projection.
## API
The main function provided by this package is `adjustColorForProjection(inputColor, surfaceColor)`. It takes two color objects (with `r`, `g`, `b` properties) as input and returns the adjusted color.

## Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues on the [GitHub repository](https://github.com/ZilbaM/surface-projection-color).

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/ZilbaM/surface-projection-color/blob/main/LICENSE) file for details.

Author
ZilbaM

