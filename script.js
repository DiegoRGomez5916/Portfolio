const bodyElement = document.getElementById("body")
const bodyContent = bodyElement.innerHTML

const bootSequence = `[BOOTING D.G.T.B.O.S...]\n
-----------------------------------------\n
Diego Gomez Terminal Blog OS v3.1.4\n
(C) 1985–2025 Gomez Softworks\n
\n
> Initializing subsystems...\n
   - Memory..............OK\n
   - Display.............OK\n
   - Thought Engine......READY\n
   - Blog Drive..........MOUNTED\n
\n
> Authenticating...\n
   User: diego.gomez\n
   Access Level: AUTHOR+\n
\n
> Loading modules...\n
   - tech_insights.sys......LOADED\n
   - code_notes.bin.........LOADED\n
   - brain_dump.log.........OK\n
   - vibes.css..............APPLIED\n
\n
> CRT effects: SCANLINES ACTIVE | VIGNETTE ENABLED\n
\n
System ready.`



bodyElement.innerHTML = `<pre id="boot-sequence"></pre>`

let typingSpeed = 10;
let newLineSpeed = 2000;

function scrollToBottom(char) {
    if (char == `\n`) {
        window.scrollTo(0, document.body.scrollHeight)
    }
}

function typeWriter(text, element, i = 0, callback = null) {
    console.log("callback")
    if (i < text.length) {
        element.textContent += text.charAt(i);
        scrollToBottom(text.charAt(i));
        setTimeout(() => typeWriter(text, element, i + 1, callback), typingSpeed);
    } else if (callback) {
        setTimeout(() => callback(), newLineSpeed);
    }
}

typeWriter(bootSequence, document.getElementById("boot-sequence"), 0, () => {
    window.scrollTo(0, 0)
    bodyElement.innerHTML = bodyContent;
        const mainHeading = document.getElementById("main-heading");
        const mainSubheading = document.getElementById("main-subheading");
        const typingContent = [mainHeading.textContent, mainSubheading.textContent];
        mainHeading.textContent = "";
        mainSubheading.textContent = "";
        typingSpeed = 50;
        newLineSpeed = 250;
        typeWriter(typingContent[0], mainHeading, 0, () => {
            typeWriter(typingContent[1], mainSubheading);
        });
});
