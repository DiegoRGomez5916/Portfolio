const mainHeading = document.getElementById("main-heading");
const mainSubheading = document.getElementById("main-subheading");

const typingContent = [mainHeading.textContent, mainSubheading.textContent];

mainHeading.textContent = "";
mainSubheading.textContent = "";

const typingSpeed = 50;

function typeWriter(text, element, i = 0, callback = null) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        setTimeout(() => typeWriter(text, element, i + 1, callback), typingSpeed);
    } else if (callback) {
        callback();
    }
}

typeWriter(typingContent[0], mainHeading, 0, () => {
    typeWriter(typingContent[1], mainSubheading);
});
