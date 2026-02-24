
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. Answer: It's also some parts make with me & ai generated.

1.getElementById()
It selects a single element using its id.
Since an id should be unique, it always returns one element.
It returns a single HTML element, not a collection.

2.getElementsByClassName()
It selects elements using a class name.
Multiple elements can have the same class.
It returns an HTMLCollection.
HTMLCollection is live, meaning if the DOM changes, the collection updates automatically.

3.querySelector()
It selects the first matching element using a CSS selector (id, class, tag, etc.).
It returns a single element.

4.querySelectorAll()
It selects all matching elements using a CSS selector.
It returns a NodeList.
NodeList looks like an array but it is not a real array.
NodeList is not live (it does not update automatically).

### 2. How do you create and insert a new element into the DOM?
2. Answer: When I am create a new element I will use it: example- 

const headerContainer = document.getElementById('header')
const div = document.createElement('div'); 
div.innerHTML = `<h1>Hello World</h1>`;
div.innerText = 'Welcome to PH madness dom project'

then i will append or appendChild connect this element:
headerContainer.append(div);
headerContainer.appendChild(div);

### 3. What is Event Bubbling? And how does it work?
3. Answer: it's ai generated answer. I don't know it's proper correct answer but when I see this module this time I know this answer.

Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements.

How it works:

When if I click on a button inside a div:

First, the button's event runs.
Then the event moves to the parent div.
Then it goes to the body.
Then to the html element.
This upward movement is called Event Bubbling.

### 4. What is Event Delegation in JavaScript? Why is it useful?
4.Answer: it's ai generated answer. I don't know it's proper correct answer but when I see this module this time I know this answer. I can use event delegation but totally not.

Event Delegation is a technique where we add an event listener to a parent element instead of adding it to multiple child elements.
Because of event bubbling, the parent can detect events from its child elements.

Why is it useful?
Improves performance.
Uses less memory.
Works for dynamically added elements.
Cleaner and shorter code.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
5.Answer: it's ai generated answer. I don't know it's proper correct answer but when I see this module this time I know this answer.

1.preventDefault()
It prevents the default behavior of an element.
Example: Stop a form from submitting.
event.preventDefault();

2.stopPropagation()
It stops the event from bubbling up to parent elements.
event.stopPropagation();

🔥 Main Difference:
preventDefault() → Stops default browser behavior.
stopPropagation() → Stops event bubbling.
---







Ai milestone 4 a 60-65% er moto bujji ar ta onek kisui buji nai bishesh kore conceptual session gulay shomossha beshi hoitase.

jani nah agamite kamon hoibe but pisoner gula akhon nijeke abar oi milestone dekhe recap korte hobe time manege korte kosto hoiyya jaitese.

ar akta nijer vul hoise practice khub kom kora hoise ar support session a join mote korai hoitase.

sorry airokom ulta palta vabe submit korar jonno. kisu korar nai vul to hoiyya gase ar support session a nai akhon.