// questions.js (FULL WORKING VERSION)
// 30 HTML + 30 CSS + 30 Easy JavaScript
// This file DEFINES window.QUESTION_BANK from scratch (no replace logic).

window.QUESTION_BANK = [];

// helper
function addQ(q) {
  window.QUESTION_BANK.push(q);
}

/* =========================
   HTML (30)
========================= */
addQ({ id:"html-01", topic:"HTML", title:"Label + Input", prompt:"Create a label and an email input. Clicking the label focuses the input.", starter:`<!-- TODO -->`, answer:`<label for="email">Email</label>
<input id="email" type="email" name="email" />`, explanation:"label for must match input id." });

addQ({ id:"html-02", topic:"HTML", title:"Accessible Image", prompt:"Write an accessible image tag with alt text.", starter:`<!-- TODO -->`, answer:`<img src="cat.jpg" alt="A cat sitting on a chair" />`, explanation:"alt provides accessible text." });

addQ({ id:"html-03", topic:"HTML", title:"Semantic Layout", prompt:"Create a semantic layout: header, nav, main, footer.", starter:`<!-- TODO -->`, answer:`<header>Header</header>
<nav>Navigation</nav>
<main>
  <h1>Title</h1>
  <p>Content</p>
</main>
<footer>Footer</footer>`, explanation:"Use semantic tags for structure." });

addQ({ id:"html-04", topic:"HTML", title:"External Link (New Tab)", prompt:"Create a link to https://example.com that opens in a new tab safely.", starter:`<!-- TODO -->`, answer:`<a href="https://example.com" target="_blank" rel="noopener noreferrer">Example</a>`, explanation:"noopener prevents tab-nabbing." });

addQ({ id:"html-05", topic:"HTML", title:"Unordered List", prompt:"Create an unordered list with 3 items: HTML, CSS, JavaScript.", starter:`<!-- TODO -->`, answer:`<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`, explanation:"Use ul + li." });

addQ({ id:"html-06", topic:"HTML", title:"Ordered List", prompt:"Create an ordered list for steps: Install, Run, Deploy.", starter:`<!-- TODO -->`, answer:`<ol>
  <li>Install</li>
  <li>Run</li>
  <li>Deploy</li>
</ol>`, explanation:"Use ol for ordered steps." });

addQ({ id:"html-07", topic:"HTML", title:"Button Type", prompt:"Create a button that does NOT submit a form by default.", starter:`<!-- TODO -->`, answer:`<button type="button">Click</button>`, explanation:"type=button prevents form submit." });

addQ({ id:"html-08", topic:"HTML", title:"Form Basics", prompt:"Create a form with action='/submit' and method='post'.", starter:`<!-- TODO -->`, answer:`<form action="/submit" method="post">
  <!-- fields here -->
</form>`, explanation:"action + method define submission." });

addQ({ id:"html-09", topic:"HTML", title:"Required Text Input", prompt:"Create a required text input for username with placeholder.", starter:`<!-- TODO -->`, answer:`<input type="text" name="username" placeholder="Username" required />`, explanation:"required forces input before submit." });

addQ({ id:"html-10", topic:"HTML", title:"Password Field", prompt:"Create a password input named 'password'.", starter:`<!-- TODO -->`, answer:`<input type="password" name="password" />`, explanation:"type=password masks characters." });

addQ({ id:"html-11", topic:"HTML", title:"Textarea", prompt:"Create a textarea named 'message' with 4 rows.", starter:`<!-- TODO -->`, answer:`<textarea name="message" rows="4"></textarea>`, explanation:"rows controls visible height." });

addQ({ id:"html-12", topic:"HTML", title:"Select Options", prompt:"Create a select named 'level' with options: Beginner, Intermediate, Advanced.", starter:`<!-- TODO -->`, answer:`<select name="level">
  <option value="beginner">Beginner</option>
  <option value="intermediate">Intermediate</option>
  <option value="advanced">Advanced</option>
</select>`, explanation:"Use select + option." });

addQ({ id:"html-13", topic:"HTML", title:"Radio Group", prompt:"Create radio buttons named 'gender' with values 'm' and 'f'.", starter:`<!-- TODO -->`, answer:`<label><input type="radio" name="gender" value="m" /> Male</label>
<label><input type="radio" name="gender" value="f" /> Female</label>`, explanation:"Same name = one selected." });

addQ({ id:"html-14", topic:"HTML", title:"Checkbox", prompt:"Create a checkbox named 'agree' with label 'I agree'.", starter:`<!-- TODO -->`, answer:`<label>
  <input type="checkbox" name="agree" />
  I agree
</label>`, explanation:"Checkbox allows true/false." });

addQ({ id:"html-15", topic:"HTML", title:"Table", prompt:"Create a table with header: Name, Age and one row: Ana, 18.", starter:`<!-- TODO -->`, answer:`<table>
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <tr><td>Ana</td><td>18</td></tr>
  </tbody>
</table>`, explanation:"Use thead/tbody for structure." });

addQ({ id:"html-16", topic:"HTML", title:"Details / Summary", prompt:"Create a collapsible section with summary 'More' and content 'Hello'.", starter:`<!-- TODO -->`, answer:`<details>
  <summary>More</summary>
  <p>Hello</p>
</details>`, explanation:"details creates built-in toggle UI." });

addQ({ id:"html-17", topic:"HTML", title:"Meta Charset", prompt:"Write the meta tag for UTF-8 charset.", starter:`<!-- TODO -->`, answer:`<meta charset="UTF-8" />`, explanation:"Correct character encoding." });

addQ({ id:"html-18", topic:"HTML", title:"Viewport Meta", prompt:"Write the viewport meta tag for responsive design.", starter:`<!-- TODO -->`, answer:`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`, explanation:"Responsive scaling on mobile." });

addQ({ id:"html-19", topic:"HTML", title:"Inline Code", prompt:"Show inline code for console.log() inside a paragraph.", starter:`<!-- TODO -->`, answer:`<p>Use <code>console.log()</code> to print.</p>`, explanation:"code tag for inline code." });

addQ({ id:"html-20", topic:"HTML", title:"Preformatted Code", prompt:"Show this code as preformatted: const x = 1;", starter:`<!-- TODO -->`, answer:`<pre><code>const x = 1;</code></pre>`, explanation:"pre preserves whitespace." });

addQ({ id:"html-21", topic:"HTML", title:"Anchor Link", prompt:"Create a link that jumps to an element with id='about'.", starter:`<!-- TODO -->`, answer:`<a href="#about">Go to About</a>`, explanation:"#id fragment navigation." });

addQ({ id:"html-22", topic:"HTML", title:"Section with id", prompt:"Create a section element with id='about' and a heading.", starter:`<!-- TODO -->`, answer:`<section id="about">
  <h2>About</h2>
</section>`, explanation:"id enables linking." });

addQ({ id:"html-23", topic:"HTML", title:"Download Link", prompt:"Create a link that downloads report.pdf.", starter:`<!-- TODO -->`, answer:`<a href="report.pdf" download>Download report</a>`, explanation:"download attribute suggests download." });

addQ({ id:"html-24", topic:"HTML", title:"Image with width/height", prompt:"Create an image with width 200 and height 150.", starter:`<!-- TODO -->`, answer:`<img src="photo.jpg" alt="Photo" width="200" height="150" />`, explanation:"width/height define display size." });

addQ({ id:"html-25", topic:"HTML", title:"Input number", prompt:"Create a number input named 'age' with min 0.", starter:`<!-- TODO -->`, answer:`<input type="number" name="age" min="0" />`, explanation:"number input with constraints." });

addQ({ id:"html-26", topic:"HTML", title:"Button Submit", prompt:"Create a submit button for a form.", starter:`<!-- TODO -->`, answer:`<button type="submit">Submit</button>`, explanation:"type=submit sends the form." });

addQ({ id:"html-27", topic:"HTML", title:"Datalist", prompt:"Create an input with datalist suggestions: Apple, Banana, Mango.", starter:`<!-- TODO -->`, answer:`<input list="fruits" name="fruit" />
<datalist id="fruits">
  <option value="Apple"></option>
  <option value="Banana"></option>
  <option value="Mango"></option>
</datalist>`, explanation:"datalist provides suggestions." });

addQ({ id:"html-28", topic:"HTML", title:"Audio Controls", prompt:"Create an audio player with controls for song.mp3.", starter:`<!-- TODO -->`, answer:`<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
</audio>`, explanation:"controls shows playback UI." });

addQ({ id:"html-29", topic:"HTML", title:"Video Controls", prompt:"Create a video player with controls and width 320 for movie.mp4.", starter:`<!-- TODO -->`, answer:`<video controls width="320">
  <source src="movie.mp4" type="video/mp4" />
</video>`, explanation:"video tag for playback." });

addQ({ id:"html-30", topic:"HTML", title:"Figure + Caption", prompt:"Create figure with image and figcaption.", starter:`<!-- TODO -->`, answer:`<figure>
  <img src="photo.jpg" alt="A beautiful view" />
  <figcaption>A beautiful view</figcaption>
</figure>`, explanation:"figure groups media + caption." });


/* =========================
   CSS (30)
========================= */
addQ({ id:"css-01", topic:"CSS", title:"Center with Flex", prompt:"Center .box in .container using flex.", starter:`.container { height:200px; border:1px solid #ccc; /* TODO */ }`, answer:`.container { display:flex; justify-content:center; align-items:center; }`, explanation:"Flex centers on both axes." });

addQ({ id:"css-02", topic:"CSS", title:"2-Column Grid", prompt:"Make .grid 2 equal columns with 12px gap.", starter:`.grid { /* TODO */ }`, answer:`.grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }`, explanation:"Grid layout." });

addQ({ id:"css-03", topic:"CSS", title:"Hover Button", prompt:"On hover, darker + slightly bigger.", starter:`.btn { transition:0.2s; } /* TODO */`, answer:`.btn:hover { filter:brightness(0.9); transform:scale(1.03); }`, explanation:"Hover effects." });

addQ({ id:"css-04", topic:"CSS", title:"Box Sizing", prompt:"Make all elements use border-box.", starter:`/* TODO */`, answer:`* { box-sizing: border-box; }`, explanation:"Better sizing calculations." });

addQ({ id:"css-05", topic:"CSS", title:"Reset body margin", prompt:"Remove default margin from body.", starter:`/* TODO */`, answer:`body { margin: 0; }`, explanation:"Reset default." });

addQ({ id:"css-06", topic:"CSS", title:"Text center", prompt:"Center text in .title.", starter:`.title { /* TODO */ }`, answer:`.title { text-align: center; }`, explanation:"text-align centers inline content." });

addQ({ id:"css-07", topic:"CSS", title:"Padding", prompt:"Add 16px padding to .box.", starter:`.box { /* TODO */ }`, answer:`.box { padding: 16px; }`, explanation:"Padding adds inner space." });

addQ({ id:"css-08", topic:"CSS", title:"Margin bottom", prompt:"Add 20px margin-bottom to .item.", starter:`.item { /* TODO */ }`, answer:`.item { margin-bottom: 20px; }`, explanation:"Margin adds outer space." });

addQ({ id:"css-09", topic:"CSS", title:"Rounded corners", prompt:"Give .card border-radius 12px.", starter:`.card { /* TODO */ }`, answer:`.card { border-radius: 12px; }`, explanation:"Rounded corners." });

addQ({ id:"css-10", topic:"CSS", title:"Shadow", prompt:"Add soft shadow to .card.", starter:`.card { /* TODO */ }`, answer:`.card { box-shadow: 0 10px 25px rgba(0,0,0,0.12); }`, explanation:"Depth effect." });

addQ({ id:"css-11", topic:"CSS", title:"Max width center", prompt:"Center .container with max-width 900px.", starter:`.container { /* TODO */ }`, answer:`.container { max-width: 900px; margin: 0 auto; }`, explanation:"Auto margins center." });

addQ({ id:"css-12", topic:"CSS", title:"Remove link underline", prompt:"Remove underline normally, show underline on hover.", starter:`a { /* TODO */ }`, answer:`a { text-decoration: none; }
a:hover { text-decoration: underline; }`, explanation:"Hover decoration." });

addQ({ id:"css-13", topic:"CSS", title:"Descendant selector", prompt:"Make p inside .box red.", starter:`/* TODO */`, answer:`.box p { color: red; }`, explanation:"Descendant selection." });

addQ({ id:"css-14", topic:"CSS", title:"Child selector", prompt:"Make only direct child p bold.", starter:`/* TODO */`, answer:`.box > p { font-weight: 700; }`, explanation:"> selects direct children." });

addQ({ id:"css-15", topic:"CSS", title:"Responsive image", prompt:"Make images responsive.", starter:`img { /* TODO */ }`, answer:`img { max-width: 100%; height: auto; }`, explanation:"Prevents overflow." });

addQ({ id:"css-16", topic:"CSS", title:"Opacity", prompt:"Make .disabled 50% opacity.", starter:`.disabled { /* TODO */ }`, answer:`.disabled { opacity: 0.5; }`, explanation:"Faded look." });

addQ({ id:"css-17", topic:"CSS", title:"Hide element", prompt:"Hide .modal using display.", starter:`.modal { /* TODO */ }`, answer:`.modal { display: none; }`, explanation:"Removed from layout." });

addQ({ id:"css-18", topic:"CSS", title:"Flex row + gap", prompt:"Make .row flex and add 10px gap.", starter:`.row { /* TODO */ }`, answer:`.row { display: flex; gap: 10px; }`, explanation:"Flex gap spacing." });

addQ({ id:"css-19", topic:"CSS", title:"Align right", prompt:"Align items to the right in .toolbar (flex).", starter:`.toolbar { display:flex; /* TODO */ }`, answer:`.toolbar { display:flex; justify-content:flex-end; }`, explanation:"End alignment." });

addQ({ id:"css-20", topic:"CSS", title:"Focus outline", prompt:"When input focused, outline blue.", starter:`input:focus { /* TODO */ }`, answer:`input:focus { outline: 2px solid #2563eb; }`, explanation:"Accessibility focus style." });

addQ({ id:"css-21", topic:"CSS", title:"List reset", prompt:"Remove bullets and padding from ul.menu.", starter:`ul.menu { /* TODO */ }`, answer:`ul.menu { list-style:none; padding:0; margin:0; }`, explanation:"Reset list defaults." });

addQ({ id:"css-22", topic:"CSS", title:"CSS variable", prompt:"Create --main color and apply to .title.", starter:`:root { /* TODO */ }
.title { /* TODO */ }`, answer:`:root { --main: #2563eb; }
.title { color: var(--main); }`, explanation:"Variables with var()." });

addQ({ id:"css-23", topic:"CSS", title:"Media query", prompt:"At max-width 600px, .grid becomes one column.", starter:`.grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
/* TODO */`, answer:`@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
}`, explanation:"Responsive change." });

addQ({ id:"css-24", topic:"CSS", title:"Pseudo before", prompt:"Add '• ' before .item text.", starter:`.item::before { /* TODO */ }`, answer:`.item::before { content: "• "; }`, explanation:"Insert content." });

addQ({ id:"css-25", topic:"CSS", title:"Sticky header", prompt:"Make header sticky at top.", starter:`header { /* TODO */ }`, answer:`header { position: sticky; top: 0; background: white; }`, explanation:"Sticky header." });

addQ({ id:"css-26", topic:"CSS", title:"Fixed footer", prompt:"Fix footer at bottom.", starter:`footer { /* TODO */ }`, answer:`footer { position: fixed; left:0; right:0; bottom:0; }`, explanation:"Fixed positioning." });

addQ({ id:"css-27", topic:"CSS", title:"Absolute center", prompt:"Center .modal using absolute + transform.", starter:`.modal { position:absolute; /* TODO */ }`, answer:`.modal { position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); }`, explanation:"Classic centering." });

addQ({ id:"css-28", topic:"CSS", title:"Z-index", prompt:"Make .overlay appear on top.", starter:`.overlay { position:fixed; /* TODO */ }`, answer:`.overlay { position: fixed; z-index: 9999; }`, explanation:"Higher z-index on top." });

addQ({ id:"css-29", topic:"CSS", title:"Clamp font size", prompt:"Set h1 font-size using clamp(24px, 5vw, 44px).", starter:`h1 { /* TODO */ }`, answer:`h1 { font-size: clamp(24px, 5vw, 44px); }`, explanation:"Responsive text." });

addQ({ id:"css-30", topic:"CSS", title:"Transition", prompt:"Add transition for transform to .btn.", starter:`.btn { /* TODO */ }`, answer:`.btn { transition: transform 0.2s; }`, explanation:"Smooth transform animation." });


/* =========================
   JavaScript (30) EASY
========================= */
addQ({ id:"js-01", topic:"JavaScript", title:"Variable (let)", prompt:"Create a variable score with value 10.", starter:`// TODO`, answer:`let score = 10;`, explanation:"Use let to define a variable." });

addQ({ id:"js-02", topic:"JavaScript", title:"Arithmetic (+)", prompt:"Create total = 7 + 5 and log it.", starter:`// TODO`, answer:`let total = 7 + 5;
console.log(total);`, explanation:"Use + to add numbers." });

addQ({ id:"js-03", topic:"JavaScript", title:"Arithmetic (* and /)", prompt:"Create result = (8 * 3) / 2 and log it.", starter:`// TODO`, answer:`let result = (8 * 3) / 2;
console.log(result);`, explanation:"Use parentheses for order." });

addQ({ id:"js-04", topic:"JavaScript", title:"String + variable", prompt:"Create message 'Hello ' + name where name='Jun'.", starter:`const name = "Jun";
// TODO`, answer:`const name = "Jun";
const message = "Hello " + name;
console.log(message);`, explanation:"Use + to join strings." });

addQ({ id:"js-05", topic:"JavaScript", title:"Template literal", prompt:"Create message: I am 20 years old using template literal.", starter:`const age = 20;
// TODO`, answer:`const age = 20;
const message = \`I am ${age} years old\`;
console.log(message);`, explanation:"Use backticks and ${}." });

addQ({ id:"js-06", topic:"JavaScript", title:"Function add", prompt:"Create function add(a,b) that returns a+b.", starter:`// TODO`, answer:`function add(a, b) {
  return a + b;
}`, explanation:"Return the sum." });

addQ({ id:"js-07", topic:"JavaScript", title:"Function square", prompt:"Create function square(n) that returns n*n.", starter:`// TODO`, answer:`function square(n) {
  return n * n;
}`, explanation:"Multiply n by itself." });

addQ({ id:"js-08", topic:"JavaScript", title:"If/else length", prompt:"If password length >= 8 log 'OK' else 'Too short'.", starter:`const password = "abc123";
// TODO`, answer:`const password = "abc123";
if (password.length >= 8) {
  console.log("OK");
} else {
  console.log("Too short");
}`, explanation:"Use if/else + .length." });

addQ({ id:"js-09", topic:"JavaScript", title:"getElementById", prompt:"Get element with id='title' and store it.", starter:`// TODO`, answer:`const titleEl = document.getElementById("title");`, explanation:"Use document.getElementById()." });

addQ({ id:"js-10", topic:"JavaScript", title:"textContent", prompt:"Set #title text to 'Welcome'.", starter:`const titleEl = document.getElementById("title");
// TODO`, answer:`const titleEl = document.getElementById("title");
titleEl.textContent = "Welcome";`, explanation:"textContent sets plain text." });

addQ({ id:"js-11", topic:"JavaScript", title:"innerHTML", prompt:"Set #box innerHTML to '<strong>Hi</strong>'.", starter:`const boxEl = document.getElementById("box");
// TODO`, answer:`const boxEl = document.getElementById("box");
boxEl.innerHTML = "<strong>Hi</strong>";`, explanation:"innerHTML inserts HTML." });

addQ({ id:"js-12", topic:"JavaScript", title:"Read input value", prompt:"Read value from input#nameInput and log it.", starter:`const input = document.getElementById("nameInput");
// TODO`, answer:`const input = document.getElementById("nameInput");
console.log(input.value);`, explanation:"Use input.value." });

addQ({ id:"js-13", topic:"JavaScript", title:"Click event", prompt:"When #btn is clicked, log 'clicked'.", starter:`const btn = document.getElementById("btn");
// TODO`, answer:`const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("clicked");
});`, explanation:"Use addEventListener." });

addQ({ id:"js-14", topic:"JavaScript", title:"Click changes text", prompt:"When #btn clicked, set #msg textContent to 'Hello!'.", starter:`const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
// TODO`, answer:`const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  msg.textContent = "Hello!";
});`, explanation:"Update textContent inside handler." });

addQ({ id:"js-15", topic:"JavaScript", title:"Add two inputs", prompt:"Get #a and #b values, convert to numbers, log sum.", starter:`const a = document.getElementById("a");
const b = document.getElementById("b");
// TODO`, answer:`const a = document.getElementById("a");
const b = document.getElementById("b");

const sum = Number(a.value) + Number(b.value);
console.log(sum);`, explanation:"Number() converts string to number." });

addQ({ id:"js-16", topic:"JavaScript", title:"Show sum on page", prompt:"Show sum of #a and #b inside #result.", starter:`const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");
// TODO`, answer:`const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");

const sum = Number(a.value) + Number(b.value);
result.textContent = String(sum);`, explanation:"Compute then display." });

addQ({ id:"js-17", topic:"JavaScript", title:"Increment variable", prompt:"Create count=0 then add 1 three times, log it.", starter:`// TODO`, answer:`let count = 0;
count += 1;
count += 1;
count += 1;
console.log(count);`, explanation:"Use += to increase." });

addQ({ id:"js-18", topic:"JavaScript", title:"Comparison", prompt:"If age >= 18 log 'adult' else 'child'.", starter:`const age = 16;
// TODO`, answer:`const age = 16;
if (age >= 18) {
  console.log("adult");
} else {
  console.log("child");
}`, explanation:"Use >= in condition." });

addQ({ id:"js-19", topic:"JavaScript", title:"Change style", prompt:"Change #box background color to yellow.", starter:`const box = document.getElementById("box");
// TODO`, answer:`const box = document.getElementById("box");
box.style.backgroundColor = "yellow";`, explanation:"Use element.style.backgroundColor." });

addQ({ id:"js-20", topic:"JavaScript", title:"Hide element", prompt:"Hide #box using display none.", starter:`const box = document.getElementById("box");
// TODO`, answer:`const box = document.getElementById("box");
box.style.display = "none";`, explanation:"display:none hides it." });

addQ({ id:"js-21", topic:"JavaScript", title:"Show element", prompt:"Show #box using display block.", starter:`const box = document.getElementById("box");
// TODO`, answer:`const box = document.getElementById("box");
box.style.display = "block";`, explanation:"display:block shows it." });

addQ({ id:"js-22", topic:"JavaScript", title:"Set image src", prompt:"Set image#photo src to 'cat.jpg'.", starter:`const img = document.getElementById("photo");
// TODO`, answer:`const img = document.getElementById("photo");
img.src = "cat.jpg";`, explanation:"img.src changes image." });

addQ({ id:"js-23", topic:"JavaScript", title:"Create + append", prompt:"Create <p>New</p> and append to #container.", starter:`const container = document.getElementById("container");
// TODO`, answer:`const container = document.getElementById("container");

const p = document.createElement("p");
p.textContent = "New";
container.appendChild(p);`, explanation:"createElement + appendChild." });

addQ({ id:"js-24", topic:"JavaScript", title:"Clear input", prompt:"Set input#nameInput value to empty.", starter:`const input = document.getElementById("nameInput");
// TODO`, answer:`const input = document.getElementById("nameInput");
input.value = "";`, explanation:"Assign empty string." });

addQ({ id:"js-25", topic:"JavaScript", title:"For loop 1-5", prompt:"Use for loop to log 1 to 5.", starter:`// TODO`, answer:`for (let i = 1; i <= 5; i++) {
  console.log(i);
}`, explanation:"Increment i each loop." });

addQ({ id:"js-26", topic:"JavaScript", title:"Array push", prompt:"Create array and push 'A' and 'B', log it.", starter:`// TODO`, answer:`const arr = [];
arr.push("A");
arr.push("B");
console.log(arr);`, explanation:"push adds to end." });

addQ({ id:"js-27", topic:"JavaScript", title:"Array length", prompt:"Log length of ['x','y','z'].", starter:`const arr = ["x", "y", "z"];
// TODO`, answer:`const arr = ["x", "y", "z"];
console.log(arr.length);`, explanation:"length is number of items." });

addQ({ id:"js-28", topic:"JavaScript", title:"Checkbox checked", prompt:"Log checkbox#agree checked value (true/false).", starter:`const cb = document.getElementById("agree");
// TODO`, answer:`const cb = document.getElementById("agree");
console.log(cb.checked);`, explanation:"checked is boolean." });

addQ({ id:"js-29", topic:"JavaScript", title:"Select value", prompt:"Get select#level and log its value.", starter:`const level = document.getElementById("level");
// TODO`, answer:`const level = document.getElementById("level");
console.log(level.value);`, explanation:"Select also uses .value." });

addQ({ id:"js-30", topic:"JavaScript", title:"Click +1", prompt:"When #plus clicked, increase #count textContent by 1.", starter:`const plus = document.getElementById("plus");
const count = document.getElementById("count");
// TODO`, answer:`const plus = document.getElementById("plus");
const count = document.getElementById("count");

plus.addEventListener("click", () => {
  const current = Number(count.textContent);
  count.textContent = String(current + 1);
});`, explanation:"Read -> convert -> add -> write back." });

// questions_add_40_each.js
// Add +40 MORE questions to each topic: HTML, CSS, JavaScript.
// Paste this at the BOTTOM of your existing questions.js (after addQ is defined).
// If your questions.js doesn't have addQ(), then replace addQ(...) with QUESTION_BANK.push(...).

/* =========================
   HTML +40 (html-31 ~ html-70)
========================= */
addQ({ id:"html-31", topic:"HTML", title:"Document Title", prompt:"Write the <title> tag with text 'My Site'.", starter:`<!-- TODO -->`, answer:`<title>My Site</title>`, explanation:"Title appears in browser tab." });
addQ({ id:"html-32", topic:"HTML", title:"Link CSS file", prompt:"Link a stylesheet named style.css.", starter:`<!-- TODO -->`, answer:`<link rel="stylesheet" href="style.css" />`, explanation:"Use link tag in head." });
addQ({ id:"html-33", topic:"HTML", title:"Script file", prompt:"Load app.js at the bottom of body.", starter:`<!-- TODO -->`, answer:`<script src="app.js"></script>`, explanation:"Placing at bottom loads after HTML." });
addQ({ id:"html-34", topic:"HTML", title:"Div with class", prompt:"Create a div with class 'card'.", starter:`<!-- TODO -->`, answer:`<div class="card"></div>`, explanation:"class is for styling/selecting." });
addQ({ id:"html-35", topic:"HTML", title:"Span inline", prompt:"Create a span with text 'New'.", starter:`<!-- TODO -->`, answer:`<span>New</span>`, explanation:"span is inline element." });
addQ({ id:"html-36", topic:"HTML", title:"Heading levels", prompt:"Write h1 'Main' and h2 'Sub'.", starter:`<!-- TODO -->`, answer:`<h1>Main</h1>
<h2>Sub</h2>`, explanation:"h1 is highest heading." });
addQ({ id:"html-37", topic:"HTML", title:"Line break", prompt:"Put a line break between 'Hello' and 'World'.", starter:`<!-- TODO -->`, answer:`Hello<br />World`, explanation:"br creates line break." });
addQ({ id:"html-38", topic:"HTML", title:"Horizontal rule", prompt:"Add a horizontal line using hr.", starter:`<!-- TODO -->`, answer:`<hr />`, explanation:"hr draws thematic break." });
addQ({ id:"html-39", topic:"HTML", title:"Strong and em", prompt:"Make 'Important' bold and 'note' italic in one sentence.", starter:`<!-- TODO -->`, answer:`<p><strong>Important</strong> <em>note</em></p>`, explanation:"strong/em add semantic emphasis." });
addQ({ id:"html-40", topic:"HTML", title:"Mail link", prompt:"Create a mailto link to test@example.com.", starter:`<!-- TODO -->`, answer:`<a href="mailto:test@example.com">Email</a>`, explanation:"mailto opens mail app." });

addQ({ id:"html-41", topic:"HTML", title:"Tel link", prompt:"Create a phone link to +250788000000.", starter:`<!-- TODO -->`, answer:`<a href="tel:+250788000000">Call</a>`, explanation:"tel link opens phone dialer." });
addQ({ id:"html-42", topic:"HTML", title:"Open in same page", prompt:"Create a link to /about without target attribute.", starter:`<!-- TODO -->`, answer:`<a href="/about">About</a>`, explanation:"Default opens in same tab." });
addQ({ id:"html-43", topic:"HTML", title:"Image lazy loading", prompt:"Create an image with loading='lazy'.", starter:`<!-- TODO -->`, answer:`<img src="photo.jpg" alt="Photo" loading="lazy" />`, explanation:"Lazy loading delays offscreen images." });
addQ({ id:"html-44", topic:"HTML", title:"Input placeholder", prompt:"Create text input with placeholder 'Type here'.", starter:`<!-- TODO -->`, answer:`<input type="text" placeholder="Type here" />`, explanation:"placeholder shows hint." });
addQ({ id:"html-45", topic:"HTML", title:"Input disabled", prompt:"Create a disabled button with text 'Disabled'.", starter:`<!-- TODO -->`, answer:`<button type="button" disabled>Disabled</button>`, explanation:"disabled prevents interaction." });
addQ({ id:"html-46", topic:"HTML", title:"Required checkbox", prompt:"Create a checkbox required for submit.", starter:`<!-- TODO -->`, answer:`<input type="checkbox" name="agree" required />`, explanation:"required forces check." });
addQ({ id:"html-47", topic:"HTML", title:"Number input range", prompt:"Create number input min 1 max 10.", starter:`<!-- TODO -->`, answer:`<input type="number" min="1" max="10" />`, explanation:"min/max constraints." });
addQ({ id:"html-48", topic:"HTML", title:"Date input", prompt:"Create input type date named 'birthday'.", starter:`<!-- TODO -->`, answer:`<input type="date" name="birthday" />`, explanation:"date input shows date picker." });
addQ({ id:"html-49", topic:"HTML", title:"File input", prompt:"Create file input named 'photo'.", starter:`<!-- TODO -->`, answer:`<input type="file" name="photo" />`, explanation:"file input allows uploads." });
addQ({ id:"html-50", topic:"HTML", title:"Form label wrap", prompt:"Wrap an input inside a label with text 'Name'.", starter:`<!-- TODO -->`, answer:`<label>
  Name
  <input type="text" name="name" />
</label>`, explanation:"Label wrapping links automatically." });

addQ({ id:"html-51", topic:"HTML", title:"Nav list", prompt:"Create a nav with links Home and Blog using ul/li.", starter:`<!-- TODO -->`, answer:`<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</nav>`, explanation:"Common nav structure." });
addQ({ id:"html-52", topic:"HTML", title:"Header logo", prompt:"Create a header with a logo link to home.", starter:`<!-- TODO -->`, answer:`<header>
  <a href="/" aria-label="Home">Logo</a>
</header>`, explanation:"aria-label helps if logo is not text." });
addQ({ id:"html-53", topic:"HTML", title:"Main landmark", prompt:"Wrap content in a main tag.", starter:`<!-- TODO -->`, answer:`<main>
  <p>Content</p>
</main>`, explanation:"main landmark for page content." });
addQ({ id:"html-54", topic:"HTML", title:"Aside", prompt:"Create an aside for 'Related links'.", starter:`<!-- TODO -->`, answer:`<aside>Related links</aside>`, explanation:"aside for complementary content." });
addQ({ id:"html-55", topic:"HTML", title:"Article", prompt:"Create an article with h2 title and paragraph.", starter:`<!-- TODO -->`, answer:`<article>
  <h2>Post title</h2>
  <p>Post content</p>
</article>`, explanation:"article for self-contained content." });
addQ({ id:"html-56", topic:"HTML", title:"Time element", prompt:"Mark date '2026-01-31' using time tag.", starter:`<!-- TODO -->`, answer:`<time datetime="2026-01-31">2026-01-31</time>`, explanation:"datetime stores machine-readable date." });
addQ({ id:"html-57", topic:"HTML", title:"Small text", prompt:"Show small text 'Terms apply'.", starter:`<!-- TODO -->`, answer:`<small>Terms apply</small>`, explanation:"small for side comments." });
addQ({ id:"html-58", topic:"HTML", title:"Code block", prompt:"Show a code block for: let x = 1;", starter:`<!-- TODO -->`, answer:`<pre><code>let x = 1;</code></pre>`, explanation:"pre preserves formatting." });
addQ({ id:"html-59", topic:"HTML", title:"Keyboard input", prompt:"Mark keyboard shortcut Ctrl+S using kbd.", starter:`<!-- TODO -->`, answer:`<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd></p>`, explanation:"kbd represents keyboard input." });
addQ({ id:"html-60", topic:"HTML", title:"Mark text", prompt:"Highlight word 'important' using mark tag.", starter:`<!-- TODO -->`, answer:`<p>This is <mark>important</mark>.</p>`, explanation:"mark highlights text." });

addQ({ id:"html-61", topic:"HTML", title:"Progress element", prompt:"Create a progress bar at 60% (value 60, max 100).", starter:`<!-- TODO -->`, answer:`<progress value="60" max="100"></progress>`, explanation:"progress shows task completion." });
addQ({ id:"html-62", topic:"HTML", title:"Meter element", prompt:"Create meter showing 3 out of 10.", starter:`<!-- TODO -->`, answer:`<meter value="3" max="10"></meter>`, explanation:"meter shows a scalar measurement." });
addQ({ id:"html-63", topic:"HTML", title:"Definition list", prompt:"Create dl for HTML: Markup language.", starter:`<!-- TODO -->`, answer:`<dl>
  <dt>HTML</dt>
  <dd>Markup language</dd>
</dl>`, explanation:"dl for terms and definitions." });
addQ({ id:"html-64", topic:"HTML", title:"Button with id", prompt:"Create button with id='saveBtn' text 'Save'.", starter:`<!-- TODO -->`, answer:`<button id="saveBtn" type="button">Save</button>`, explanation:"id for JS selection." });
addQ({ id:"html-65", topic:"HTML", title:"Input with id", prompt:"Create input with id='email' and name='email'.", starter:`<!-- TODO -->`, answer:`<input id="email" name="email" type="email" />`, explanation:"id for label/JS." });
addQ({ id:"html-66", topic:"HTML", title:"Link to section", prompt:"Create a link to #top.", starter:`<!-- TODO -->`, answer:`<a href="#top">Back to top</a>`, explanation:"Anchor to id." });
addQ({ id:"html-67", topic:"HTML", title:"Add id top", prompt:"Create an element with id='top'.", starter:`<!-- TODO -->`, answer:`<div id="top"></div>`, explanation:"Target for anchor link." });
addQ({ id:"html-68", topic:"HTML", title:"Picture element", prompt:"Create picture with img fallback photo.jpg and alt text.", starter:`<!-- TODO -->`, answer:`<picture>
  <img src="photo.jpg" alt="Photo" />
</picture>`, explanation:"picture for responsive images (simple version)." });
addQ({ id:"html-69", topic:"HTML", title:"Noscript", prompt:"Show message 'Enable JavaScript' inside noscript.", starter:`<!-- TODO -->`, answer:`<noscript>Enable JavaScript</noscript>`, explanation:"Shown if JS disabled." });
addQ({ id:"html-70", topic:"HTML", title:"Comment", prompt:"Write an HTML comment: TODO: add footer", starter:`<!-- TODO -->`, answer:`<!-- TODO: add footer -->`, explanation:"Comments are ignored by browser." });


/* =========================
   CSS +40 (css-31 ~ css-70)
========================= */
addQ({ id:"css-31", topic:"CSS", title:"Set font family", prompt:"Set body font-family to Arial, sans-serif.", starter:`body { /* TODO */ }`, answer:`body { font-family: Arial, sans-serif; }`, explanation:"Basic font stack." });
addQ({ id:"css-32", topic:"CSS", title:"Set background color", prompt:"Set page background to #f5f5f5.", starter:`body { /* TODO */ }`, answer:`body { background: #f5f5f5; }`, explanation:"Background color." });
addQ({ id:"css-33", topic:"CSS", title:"Text color", prompt:"Make all paragraphs color #333.", starter:`p { /* TODO */ }`, answer:`p { color: #333; }`, explanation:"Set text color." });
addQ({ id:"css-34", topic:"CSS", title:"Font size", prompt:"Set h1 font-size to 32px.", starter:`h1 { /* TODO */ }`, answer:`h1 { font-size: 32px; }`, explanation:"Font size in px." });
addQ({ id:"css-35", topic:"CSS", title:"Font weight", prompt:"Set .title to font-weight 700.", starter:`.title { /* TODO */ }`, answer:`.title { font-weight: 700; }`, explanation:"700 is bold." });
addQ({ id:"css-36", topic:"CSS", title:"Line height", prompt:"Set p line-height to 1.6.", starter:`p { /* TODO */ }`, answer:`p { line-height: 1.6; }`, explanation:"Improve readability." });
addQ({ id:"css-37", topic:"CSS", title:"Border", prompt:"Add 1px solid #ddd border to .box.", starter:`.box { /* TODO */ }`, answer:`.box { border: 1px solid #ddd; }`, explanation:"Simple border." });
addQ({ id:"css-38", topic:"CSS", title:"Border radius", prompt:"Set button border-radius to 8px.", starter:`button { /* TODO */ }`, answer:`button { border-radius: 8px; }`, explanation:"Rounded button." });
addQ({ id:"css-39", topic:"CSS", title:"Padding shorthand", prompt:"Set padding 10px top/bottom and 16px left/right.", starter:`.box { /* TODO */ }`, answer:`.box { padding: 10px 16px; }`, explanation:"Padding shorthand y x." });
addQ({ id:"css-40", topic:"CSS", title:"Margin shorthand", prompt:"Set margin 0 auto to center block.", starter:`.container { /* TODO */ }`, answer:`.container { margin: 0 auto; }`, explanation:"Auto left/right centers." });

addQ({ id:"css-41", topic:"CSS", title:"Width 100%", prompt:"Make img take 100% width of parent.", starter:`img { /* TODO */ }`, answer:`img { width: 100%; }`, explanation:"Full width image." });
addQ({ id:"css-42", topic:"CSS", title:"Display inline-block", prompt:"Make .badge display inline-block.", starter:`.badge { /* TODO */ }`, answer:`.badge { display: inline-block; }`, explanation:"Inline + accepts width/padding." });
addQ({ id:"css-43", topic:"CSS", title:"Cursor pointer", prompt:"Make .btn show pointer cursor.", starter:`.btn { /* TODO */ }`, answer:`.btn { cursor: pointer; }`, explanation:"Indicates clickable." });
addQ({ id:"css-44", topic:"CSS", title:"Remove outline (not recommended)", prompt:"Remove outline from button on focus (example only).", starter:`button:focus { /* TODO */ }`, answer:`button:focus { outline: none; }`, explanation:"Note: accessibility risk." });
addQ({ id:"css-45", topic:"CSS", title:"Text transform uppercase", prompt:"Make .tag uppercase.", starter:`.tag { /* TODO */ }`, answer:`.tag { text-transform: uppercase; }`, explanation:"Uppercase display." });
addQ({ id:"css-46", topic:"CSS", title:"Letter spacing", prompt:"Add letter-spacing 1px to h1.", starter:`h1 { /* TODO */ }`, answer:`h1 { letter-spacing: 1px; }`, explanation:"Spacing between letters." });
addQ({ id:"css-47", topic:"CSS", title:"Align items center (flex)", prompt:"In .row flex container, align items center vertically.", starter:`.row { display:flex; /* TODO */ }`, answer:`.row { display:flex; align-items: center; }`, explanation:"Cross-axis alignment." });
addQ({ id:"css-48", topic:"CSS", title:"Space between (flex)", prompt:"In .bar, put items at both ends.", starter:`.bar { display:flex; /* TODO */ }`, answer:`.bar { display:flex; justify-content: space-between; }`, explanation:"Space between items." });
addQ({ id:"css-49", topic:"CSS", title:"Gap in grid", prompt:"Add gap 20px to .grid.", starter:`.grid { display:grid; /* TODO */ }`, answer:`.grid { display:grid; gap: 20px; }`, explanation:"Gap sets spacing." });
addQ({ id:"css-50", topic:"CSS", title:"Grid 3 columns", prompt:"Make .grid have 3 equal columns.", starter:`.grid { /* TODO */ }`, answer:`.grid { display:grid; grid-template-columns: 1fr 1fr 1fr; }`, explanation:"3 columns." });

addQ({ id:"css-51", topic:"CSS", title:"Min-height", prompt:"Set .hero min-height 300px.", starter:`.hero { /* TODO */ }`, answer:`.hero { min-height: 300px; }`, explanation:"Minimum height." });
addQ({ id:"css-52", topic:"CSS", title:"Overflow hidden", prompt:"Hide overflow in .card.", starter:`.card { /* TODO */ }`, answer:`.card { overflow: hidden; }`, explanation:"Clips overflow." });
addQ({ id:"css-53", topic:"CSS", title:"Text ellipsis", prompt:"Make .title single line with ... if too long.", starter:`.title { /* TODO */ }`, answer:`.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`, explanation:"Ellipsis setup." });
addQ({ id:"css-54", topic:"CSS", title:"Position relative", prompt:"Set .box position relative.", starter:`.box { /* TODO */ }`, answer:`.box { position: relative; }`, explanation:"Reference for absolute children." });
addQ({ id:"css-55", topic:"CSS", title:"Position absolute top-right", prompt:"Place .badge at top-right inside relative parent.", starter:`.badge { position:absolute; /* TODO */ }`, answer:`.badge { position:absolute; top: 0; right: 0; }`, explanation:"Absolute positioning." });
addQ({ id:"css-56", topic:"CSS", title:"Set height", prompt:"Set .avatar height and width to 48px.", starter:`.avatar { /* TODO */ }`, answer:`.avatar { width: 48px; height: 48px; }`, explanation:"Fixed size." });
addQ({ id:"css-57", topic:"CSS", title:"Circle image", prompt:"Make .avatar a circle.", starter:`.avatar { width:48px; height:48px; /* TODO */ }`, answer:`.avatar { width:48px; height:48px; border-radius: 50%; }`, explanation:"50% makes circle." });
addQ({ id:"css-58", topic:"CSS", title:"Object-fit cover", prompt:"Make img cover its box without distortion.", starter:`img { width:200px; height:200px; /* TODO */ }`, answer:`img { width:200px; height:200px; object-fit: cover; }`, explanation:"Cover crops nicely." });
addQ({ id:"css-59", topic:"CSS", title:"Background image cover", prompt:"Set background image cover on .hero.", starter:`.hero { background-image:url("hero.jpg"); /* TODO */ }`, answer:`.hero { background-image:url("hero.jpg"); background-size: cover; background-position: center; }`, explanation:"Cover + center." });
addQ({ id:"css-60", topic:"CSS", title:"Border-bottom only", prompt:"Add only bottom border to .item.", starter:`.item { /* TODO */ }`, answer:`.item { border-bottom: 1px solid #ddd; }`, explanation:"Bottom divider." });

addQ({ id:"css-61", topic:"CSS", title:"Hover underline", prompt:"Underline .link on hover.", starter:`.link { text-decoration:none; } /* TODO */`, answer:`.link:hover { text-decoration: underline; }`, explanation:"Hover pseudo-class." });
addQ({ id:"css-62", topic:"CSS", title:"Active state", prompt:"Make .btn:active move down 1px.", starter:`.btn:active { /* TODO */ }`, answer:`.btn:active { transform: translateY(1px); }`, explanation:"Active feedback." });
addQ({ id:"css-63", topic:"CSS", title:"Disabled look", prompt:"Make button:disabled gray and not-allowed cursor.", starter:`button:disabled { /* TODO */ }`, answer:`button:disabled { opacity: 0.6; cursor: not-allowed; }`, explanation:"Disabled styling." });
addQ({ id:"css-64", topic:"CSS", title:"Media: hide sidebar", prompt:"At max-width 700px, hide .sidebar.", starter:`/* TODO */`, answer:`@media (max-width: 700px) {
  .sidebar { display: none; }
}`, explanation:"Responsive hide." });
addQ({ id:"css-65", topic:"CSS", title:"Media: padding smaller", prompt:"At max-width 700px, set .container padding 8px.", starter:`/* TODO */`, answer:`@media (max-width: 700px) {
  .container { padding: 8px; }
}`, explanation:"Responsive padding." });
addQ({ id:"css-66", topic:"CSS", title:"Sticky sidebar", prompt:"Make .sidebar sticky with top 16px.", starter:`.sidebar { /* TODO */ }`, answer:`.sidebar { position: sticky; top: 16px; }`, explanation:"Sticky element." });
addQ({ id:"css-67", topic:"CSS", title:"Simple animation", prompt:"Animate .dot opacity (blink) using keyframes.", starter:`/* TODO */`, answer:`@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}
.dot { animation: blink 1s infinite; }`, explanation:"Keyframes animation." });
addQ({ id:"css-68", topic:"CSS", title:"Grid auto-fit", prompt:"Make responsive grid using repeat(auto-fit, minmax(200px,1fr)).", starter:`.grid { /* TODO */ }`, answer:`.grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; }`, explanation:"Auto responsive columns." });
addQ({ id:"css-69", topic:"CSS", title:"Clamp padding", prompt:"Set .card padding using clamp(12px, 2vw, 24px).", starter:`.card { /* TODO */ }`, answer:`.card { padding: clamp(12px, 2vw, 24px); }`, explanation:"Responsive spacing." });
addQ({ id:"css-70", topic:"CSS", title:"Aspect ratio", prompt:"Make .thumb keep 16/9 aspect ratio.", starter:`.thumb { /* TODO */ }`, answer:`.thumb { aspect-ratio: 16 / 9; }`, explanation:"Keeps consistent ratio." });


/* =========================
   JavaScript +40 EASY (js-31 ~ js-70)
========================= */
addQ({ id:"js-31", topic:"JavaScript", title:"const variable", prompt:"Create const siteName = 'Quiz'.", starter:`// TODO`, answer:`const siteName = "Quiz";`, explanation:"const is not reassigned." });
addQ({ id:"js-32", topic:"JavaScript", title:"Update let", prompt:"Create let x=1 then set x=5 and log it.", starter:`// TODO`, answer:`let x = 1;
x = 5;
console.log(x);`, explanation:"let can be reassigned." });
addQ({ id:"js-33", topic:"JavaScript", title:"Subtract", prompt:"Compute 20 - 8 and log it.", starter:`// TODO`, answer:`const result = 20 - 8;
console.log(result);`, explanation:"- operator subtracts." });
addQ({ id:"js-34", topic:"JavaScript", title:"Remainder (%)", prompt:"Compute 10 % 3 and log it.", starter:`// TODO`, answer:`const r = 10 % 3;
console.log(r);`, explanation:"% gives remainder." });
addQ({ id:"js-35", topic:"JavaScript", title:"String length", prompt:"Log the length of 'hello'.", starter:`// TODO`, answer:`console.log("hello".length);`, explanation:".length gives character count." });
addQ({ id:"js-36", topic:"JavaScript", title:"Uppercase", prompt:"Convert 'jun' to uppercase and log it.", starter:`// TODO`, answer:`console.log("jun".toUpperCase());`, explanation:"toUpperCase converts letters." });
addQ({ id:"js-37", topic:"JavaScript", title:"Lowercase", prompt:"Convert 'ABC' to lowercase and log it.", starter:`// TODO`, answer:`console.log("ABC".toLowerCase());`, explanation:"toLowerCase converts letters." });
addQ({ id:"js-38", topic:"JavaScript", title:"Trim", prompt:"Trim spaces from '  hi  ' and log it.", starter:`// TODO`, answer:`console.log("  hi  ".trim());`, explanation:"trim removes both ends spaces." });
addQ({ id:"js-39", topic:"JavaScript", title:"Boolean comparison", prompt:"Log whether 5 > 3 is true.", starter:`// TODO`, answer:`console.log(5 > 3);`, explanation:"Comparison returns boolean." });
addQ({ id:"js-40", topic:"JavaScript", title:"Equality (== vs ===)", prompt:"Write code that checks if num === 10 and logs 'yes'.", starter:`const num = 10;
// TODO`, answer:`const num = 10;
if (num === 10) {
  console.log("yes");
}`, explanation:"Use strict equality ===." });

addQ({ id:"js-41", topic:"JavaScript", title:"Query selector", prompt:"Select first element with class 'item'.", starter:`// TODO`, answer:`const item = document.querySelector(".item");`, explanation:"querySelector selects first match." });
addQ({ id:"js-42", topic:"JavaScript", title:"Query selector all", prompt:"Select all elements with class 'item'.", starter:`// TODO`, answer:`const items = document.querySelectorAll(".item");`, explanation:"querySelectorAll returns NodeList." });
addQ({ id:"js-43", topic:"JavaScript", title:"Change textContent from input", prompt:"Set #output textContent to #nameInput value.", starter:`const input = document.getElementById("nameInput");
const out = document.getElementById("output");
// TODO`, answer:`const input = document.getElementById("nameInput");
const out = document.getElementById("output");
out.textContent = input.value;`, explanation:"Read value then write textContent." });
addQ({ id:"js-44", topic:"JavaScript", title:"Click: copy input to output", prompt:"On click #btn, copy input#nameInput value to #output.", starter:`const btn = document.getElementById("btn");
const input = document.getElementById("nameInput");
const out = document.getElementById("output");
// TODO`, answer:`const btn = document.getElementById("btn");
const input = document.getElementById("nameInput");
const out = document.getElementById("output");

btn.addEventListener("click", () => {
  out.textContent = input.value;
});`, explanation:"Event handler updates output." });
addQ({ id:"js-45", topic:"JavaScript", title:"Clear output", prompt:"Set #output textContent to empty string.", starter:`const out = document.getElementById("output");
// TODO`, answer:`const out = document.getElementById("output");
out.textContent = "";`, explanation:"Empty string clears text." });
addQ({ id:"js-46", topic:"JavaScript", title:"Toggle textContent", prompt:"If #status text is 'ON', change to 'OFF', else 'ON'.", starter:`const status = document.getElementById("status");
// TODO`, answer:`const status = document.getElementById("status");
if (status.textContent === "ON") {
  status.textContent = "OFF";
} else {
  status.textContent = "ON";
}`, explanation:"Simple toggle using if/else." });
addQ({ id:"js-47", topic:"JavaScript", title:"Click: toggle status", prompt:"When #toggle clicked, toggle #status between ON/OFF.", starter:`const btn = document.getElementById("toggle");
const status = document.getElementById("status");
// TODO`, answer:`const btn = document.getElementById("toggle");
const status = document.getElementById("status");

btn.addEventListener("click", () => {
  status.textContent = status.textContent === "ON" ? "OFF" : "ON";
});`, explanation:"Ternary operator toggle." });
addQ({ id:"js-48", topic:"JavaScript", title:"Add class", prompt:"Add class 'active' to #box.", starter:`const box = document.getElementById("box");
// TODO`, answer:`const box = document.getElementById("box");
box.classList.add("active");`, explanation:"classList.add adds class." });
addQ({ id:"js-49", topic:"JavaScript", title:"Remove class", prompt:"Remove class 'active' from #box.", starter:`const box = document.getElementById("box");
// TODO`, answer:`const box = document.getElementById("box");
box.classList.remove("active");`, explanation:"classList.remove removes class." });
addQ({ id:"js-50", topic:"JavaScript", title:"Toggle class", prompt:"Toggle class 'active' on #box.", starter:`const box = document.getElementById("box");
// TODO`, answer:`const box = document.getElementById("box");
box.classList.toggle("active");`, explanation:"toggle adds/removes automatically." });

addQ({ id:"js-51", topic:"JavaScript", title:"Create button", prompt:"Create a button element and set its text to 'Save'.", starter:`// TODO`, answer:`const btn = document.createElement("button");
btn.textContent = "Save";`, explanation:"createElement makes new element." });
addQ({ id:"js-52", topic:"JavaScript", title:"Append to body", prompt:"Append a new <p>Hello</p> to document.body.", starter:`// TODO`, answer:`const p = document.createElement("p");
p.textContent = "Hello";
document.body.appendChild(p);`, explanation:"appendChild inserts to body." });
addQ({ id:"js-53", topic:"JavaScript", title:"Simple function greet", prompt:"Write greet(name) that logs 'Hi, name'.", starter:`// TODO`, answer:`function greet(name) {
  console.log("Hi, " + name);
}`, explanation:"Concatenate inside console.log." });
addQ({ id:"js-54", topic:"JavaScript", title:"Return value", prompt:"Write function minus(a,b) that returns a-b.", starter:`// TODO`, answer:`function minus(a, b) {
  return a - b;
}`, explanation:"Return subtraction." });
addQ({ id:"js-55", topic:"JavaScript", title:"Parse int", prompt:"Convert '12' to number using Number() and log it.", starter:`const s = "12";
// TODO`, answer:`const s = "12";
console.log(Number(s));`, explanation:"Number converts to number." });
addQ({ id:"js-56", topic:"JavaScript", title:"Input arithmetic", prompt:"Multiply #price value by 2 and show in #out.", starter:`const price = document.getElementById("price");
const out = document.getElementById("out");
// TODO`, answer:`const price = document.getElementById("price");
const out = document.getElementById("out");

out.textContent = String(Number(price.value) * 2);`, explanation:"Convert then multiply then display." });
addQ({ id:"js-57", topic:"JavaScript", title:"If empty input", prompt:"If input#nameInput is empty, set #error text 'Required'.", starter:`const input = document.getElementById("nameInput");
const err = document.getElementById("error");
// TODO`, answer:`const input = document.getElementById("nameInput");
const err = document.getElementById("error");

if (input.value === "") {
  err.textContent = "Required";
}`, explanation:"Check empty string." });
addQ({ id:"js-58", topic:"JavaScript", title:"Else clear error", prompt:"If input not empty, clear #error text.", starter:`const input = document.getElementById("nameInput");
const err = document.getElementById("error");
// TODO`, answer:`const input = document.getElementById("nameInput");
const err = document.getElementById("error");

if (input.value === "") {
  err.textContent = "Required";
} else {
  err.textContent = "";
}`, explanation:"Use else to clear error." });
addQ({ id:"js-59", topic:"JavaScript", title:"Click validate", prompt:"On click #checkBtn, if input empty show 'Required' else 'OK'.", starter:`const btn = document.getElementById("checkBtn");
const input = document.getElementById("nameInput");
const out = document.getElementById("out");
// TODO`, answer:`const btn = document.getElementById("checkBtn");
const input = document.getElementById("nameInput");
const out = document.getElementById("out");

btn.addEventListener("click", () => {
  out.textContent = input.value === "" ? "Required" : "OK";
});`, explanation:"Ternary outputs one of two strings." });
addQ({ id:"js-60", topic:"JavaScript", title:"Simple array", prompt:"Create array of 3 strings: 'a','b','c' and log it.", starter:`// TODO`, answer:`const arr = ["a", "b", "c"];
console.log(arr);`, explanation:"Array literal []" });

addQ({ id:"js-61", topic:"JavaScript", title:"Array first item", prompt:"Log first item of ['x','y','z'].", starter:`const arr = ["x","y","z"];
// TODO`, answer:`const arr = ["x","y","z"];
console.log(arr[0]);`, explanation:"Index starts at 0." });
addQ({ id:"js-62", topic:"JavaScript", title:"Array last item", prompt:"Log last item of arr using arr.length-1.", starter:`const arr = ["x","y","z"];
// TODO`, answer:`const arr = ["x","y","z"];
console.log(arr[arr.length - 1]);`, explanation:"Last index is length-1." });
addQ({ id:"js-63", topic:"JavaScript", title:"For loop array", prompt:"Use for loop to log each item in arr.", starter:`const arr = ["a","b","c"];
// TODO`, answer:`const arr = ["a","b","c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`, explanation:"Loop through indexes." });
addQ({ id:"js-64", topic:"JavaScript", title:"For..of loop", prompt:"Use for..of to log each item in arr.", starter:`const arr = ["a","b","c"];
// TODO`, answer:`const arr = ["a","b","c"];
for (const item of arr) {
  console.log(item);
}`, explanation:"for..of loops values." });
addQ({ id:"js-65", topic:"JavaScript", title:"Change input on click", prompt:"On click #clearBtn, clear #nameInput value.", starter:`const btn = document.getElementById("clearBtn");
const input = document.getElementById("nameInput");
// TODO`, answer:`const btn = document.getElementById("clearBtn");
const input = document.getElementById("nameInput");

btn.addEventListener("click", () => {
  input.value = "";
});`, explanation:"Set value to empty in handler." });
addQ({ id:"js-66", topic:"JavaScript", title:"Set attribute", prompt:"Set #link href to 'https://example.com'.", starter:`const link = document.getElementById("link");
// TODO`, answer:`const link = document.getElementById("link");
link.href = "https://example.com";`, explanation:"Properties map to attributes." });
addQ({ id:"js-67", topic:"JavaScript", title:"Change image alt", prompt:"Set #photo alt to 'Cat'.", starter:`const img = document.getElementById("photo");
// TODO`, answer:`const img = document.getElementById("photo");
img.alt = "Cat";`, explanation:"alt is also a property." });
addQ({ id:"js-68", topic:"JavaScript", title:"Simple counter variable", prompt:"Create count=0; then count++; log count.", starter:`// TODO`, answer:`let count = 0;
count++;
console.log(count);`, explanation:"++ adds 1." });
addQ({ id:"js-69", topic:"JavaScript", title:"Click counter", prompt:"On click #plus, increment a variable count and show in #count.", starter:`let count = 0;
const plus = document.getElementById("plus");
const out = document.getElementById("count");
// TODO`, answer:`let count = 0;
const plus = document.getElementById("plus");
const out = document.getElementById("count");

plus.addEventListener("click", () => {
  count++;
  out.textContent = String(count);
});`, explanation:"Update variable then display." });
addQ({ id:"js-70", topic:"JavaScript", title:"Reset counter", prompt:"On click #reset, set count=0 and show it in #count.", starter:`let count = 5;
const reset = document.getElementById("reset");
const out = document.getElementById("count");
// TODO`, answer:`let count = 5;
const reset = document.getElementById("reset");
const out = document.getElementById("count");

reset.addEventListener("click", () => {
  count = 0;
  out.textContent = String(count);
});`, explanation:"Reset variable to 0." });

