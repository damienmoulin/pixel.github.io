# Pixel Color energy for OLED

## Running

In the project directory, you can run:

### `npm i & npm start`

## Explication
Based on research: https://www.researchgate.net/figure/Commercially-available-LEDs-with-colors-wavelength-range-and-material-used_tbl1_257761181

## Demo at: https://damienmoulin.github.io/pixel.github.io/

This is only a matter of thinking, I expect opinions and feedback on it. The goal is not to define the consumption of a pixel in Watt but to compare the relative energy consumed between several colors. In addition the consumption also depends on the hardware, the LEDs of each slab do not all have the same consumption

For begin OLED technology uses 3 LEDs (R,G,B) per pixel
Thank to this the black color is possible by switching off the 3 LEDs(R,G,B)
* Black: 0 V

From the research doc of light by led we know that:
* Red: 1.8V
* Green: 3.9V
* Blue: 4.35V

But, hight frequency = hight consumption
The white is generate when blue, green, red is full of power
* White: 4.35V + 3.9V + 1.8V => 10.05V

We have deduced that 
(E is relative energy consumption)

* Black = 0 E
* Red = X E
* Green = X E
* Blue = X E
* White = 100 E 

By doing a simple calculation (color / 10.05 * 100 )

|Color|Frequency|Relative Energy| RGB |
|--|--|--|--|
|Black   | 0    | 0   | rgb(0,0,0)|
|Red  | 442  | 18  | rgb(255,0,0)|
|Green   | 555  | 39  | rgb(0,255,0)|
|Blue   | 635  | 43  | rgb(0,0,255)|
|White   | 1632 | 100 | rgb(255,255,255)|