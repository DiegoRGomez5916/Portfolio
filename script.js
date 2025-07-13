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

function typeWriter(text, element, i = 0, callback = null) {
    console.log("callback")
    if (i < text.length) {
        element.textContent += text.charAt(i);
        setTimeout(() => typeWriter(text, element, i + 1, callback), typingSpeed);
    } else if (callback) {
        setTimeout(() => callback(), newLineSpeed);
    }
}

typeWriter(bootSequence, document.getElementById("boot-sequence"), 0, () => {
    bodyElement.innerHTML = `
        <header class="hero-container">
            <div class="hero-heading-container">
                <h1 id="main-heading">> SYSTEM ONLINE</h1>
                <h3 id="main-subheading">> // compiling creativity</h3>
            </div>
            <pre>
  _____ _____ ______ _____  ____    
 |  __ |_   _|  ____/ ____|/ __ \\   
 | |  | || | | |__ | |  __| |  | |  
 | |  | || | |  __|| | |_ | |  | |  
 | |__| _| |_| |___| |__| | |__| |  
 |_____|_____|______\\_____|\\____/___
  / ____|/ __ \\|  \\/  |  ____|___  /
 | |  __| |  | | \\  / | |__     / / 
 | | |_ | |  | | |\\/| |  __|   / /  
 | |__| | |__| | |  | | |____ / /__ 
  \\_____|\\____/|_|  |_|______/_____|
 |  __ \\|  ____\\ \\    / /           
 | |  | | |__   \\ \\  / /            
 | |  | |  __|   \\ \\/ /             
 | |__| | |____   \\  /              
 |_____/|______|   \\/               
            </pre>
        </header>
        <nav class="navigation">
            <a>Home</a>
            <a>Projects</a>
            <a>About</a>
            <a>Contact</a>
        </nav>
        <main class="website-body">
            <section class="project-container">
                <article class="project-card">
                    <h1>[Project Title]</h1>
                    <p>[Project Description]</p>
                    <p>[Project Stack]</p>
                    <p>[Link]</p>
                    <p>[GitHub Repo]</p>
                </article>
            </section>
            <section class="about-container">
                <h1>> Who_Am_I.exe</h1>
                <h3>// returning user profile...</h3>
                <h3>> echo "Hello, I'm Diego Gomez"</h3>
                <h3>> bio.log:</h3>
                <p>"Passionate about building clean, user-friendly projects that solve real problems."</p>
                <p>"Skilled in HTML, CSS, JavaScript, and Python."</p>
                <p>"Learning every day and ready for my first dev role."</p>
                <h3>> hobbies:</h3>
                <p>"gaming, gardening, cooking, coffee"</p>
                <h3>> dev.philosophy:</h3>
                <p>"Code with purpose. Design matters. Debug like a gardener."</p>
                <h3>> END OF LINE _</h3>
            </section>
            <section class="contact-container">
                    <h1>> Connect.exe</h1>
                    <h3>// scanning for active channels...</h3>
                    <h3>> echo "Reach out to Diego Gomez"</h3>
                    <h3>> contact.log:</h3>
                    <p>"Whether you have a project, a question, or just want to say hi."</p>
                    <p>"I'm always open to chat and collaborate."</p>
                    <p>"Response time: quick — unless I'm deep in code or making coffee."</p>
                    <h3>> available_on:</h3>
                    <p>"email: diego.dev@example.com"</p>
                    <p>"github: github.com/diegogomez"</p>
                    <p>"linkedin: linkedin.com/in/diegogomez"</p>
                    <h3>> ping -c 1 diego</h3>
                    <p>"message sent. awaiting response..."</p>
                    <h3>> END OF LINE _</h3>
            </section>
        </main>
        <footer>
        </footer>
        <script src="script.js"></script>`;
        const mainHeading = document.getElementById("main-heading");
        const mainSubheading = document.getElementById("main-subheading");
        const typingContent = [mainHeading.textContent, mainSubheading.textContent];
        mainHeading.textContent = "";
        mainSubheading.textContent = "";
        typingSpeed = 50;
        newLineSpeed = 500
        typeWriter(typingContent[0], mainHeading, 0, () => {
            typeWriter(typingContent[1], mainSubheading);
        });
});
