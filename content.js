//Created by deepak yadav

function isBrightColor(r, g, b) {
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    console.log(`Brightness calculated: ${brightness}`);
    return brightness > 155; 
}

function getBackgroundColor() {
    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    console.log(`Background color: ${bgColor}`);
    
    if (!bgColor || bgColor === 'transparent') {
        console.log('No valid background color detected.');
        return [255, 255, 255];
    }

    const rgb = bgColor.match(/\d+/g).map(Number); 
    return rgb;
}

function toggleDarkMode(enable) {
    const existingStyle = document.querySelector('#dark-mode-style');

    if (enable && !existingStyle) {
        const css = `
            html {
                filter: invert(1) hue-rotate(180deg);
            }
            img, video {
                filter: invert(1) hue-rotate(180deg);
            }
        `;
        const style = document.createElement('style');
        style.id = 'dark-mode-style';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
        console.log("Dark mode enabled with color inversion.");
    } else if (!enable && existingStyle) {
        existingStyle.remove();
        console.log("Dark mode disabled, style removed.");
    }
}

function checkBackgroundAndEnableDarkMode() {
    const rgb = getBackgroundColor();
    const [r, g, b] = rgb;

    console.log(`Checking if background is bright for RGB(${r}, ${g}, ${b})`);

    if (isBrightColor(r, g, b)) {
        console.log("Background is bright, enabling dark mode.");
        toggleDarkMode(true);
    } else {
        console.log("Background is not bright, disabling dark mode.");
        toggleDarkMode(false);
    }
}

checkBackgroundAndEnableDarkMode();


const observer = new MutationObserver(() => {
    console.log("Detected style change, rechecking background color.");
    checkBackgroundAndEnableDarkMode();
});

observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
