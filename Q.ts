import { detect } from 'detect-browser';

export const Q = {

  // COLORS
   red:     '\x1b[31m',
   green:   '\x1b[92m',
   yellow:  '\x1b[33m',
   cyan:    '\x1b[36m',
   white:   '\x1b[97m',

  // BROWSER DETECT
   browser: {
     name: detect().name,
     version: detect().version,
     os: detect().os,
    }
};

console.log('browser.name:\t\t' + Q.yellow + Q.browser.name);
console.log('browser.version:\t' + Q.yellow + Q.browser.version);
console.log('browser.os:\t\t\t' + Q.yellow + Q.browser.os);

/* COLORS *

Escape sequence	Text attributes
\x1b[0m	All attributes off(color at startup)
\x1b[1m	Bold on(enable foreground intensity)
\x1b[4m	Underline on
\x1b[5m	Blink on(enable background intensity)
\x1b[21m	Bold off(disable foreground intensity)
\x1b[24m	Underline off
\x1b[25m	Blink off(disable background intensity)
Escape sequence	Foreground colors
\x1b[30m	Black
\x1b[31m	Red
\x1b[32m	Green
\x1b[33m	Yellow
\x1b[34m	Blue
\x1b[35m	Magenta
\x1b[36m	Cyan
\x1b[37m	White
\x1b[39m	Default(foreground color at startup)
\x1b[90m	Light Gray
\x1b[91m	Light Red
\x1b[92m	Light Green
\x1b[93m	Light Yellow
\x1b[94m	Light Blue
\x1b[95m	Light Magenta
\x1b[96m	Light Cyan
\x1b[97m	Light White

*/
