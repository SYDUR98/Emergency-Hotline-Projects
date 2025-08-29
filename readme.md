
Answer the following questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: ***(1.1)- getElementById: getElementById is a DOM Method that used to search and get a element by id(unique).
***(1.2)- getElementsByClassName: getElementsByClassName is a DOM Method that used to search and get same element (class name) by class.
***(1.3)- querySelector: querySelector is a DOM Method that use to search and get the first maching element by css selector.
***(1.4)- querySelectorAll: querySelectorAll is a DOM Method that use to search and get the all the maching element by css selector.


2. How do you **create and insert a new element into the DOM**?
***(2)- html code :
 <div id="container">
    
  </div> 
  js code : 
  const parentElement = document.getElementById("container");
  const newElement = document.createElement("p");
  newElement.innerText = 'insert text new element'
  newElement.appendChild(parentElement)


3. What is **Event Bubbling** and how does it work?
***(3)- Event Bubbling is a process the DOM where an event triggered on a child element bubbles up (propagates) through it's ancestors.


4. What is **Event Delegation** in JavaScript? Why is it useful?
***(4)- Event Delegation is a concept that used to adding event listener in parent element without adding child element. Then event can reached child to parent by event bubbling and know which event occer in child form parents.
***(4.1)- It is use full because - 1.we can use one event listener without adding each child element. 2.Can handle dynamic elements.3. Better performance, 4. Code simple and easy maintainable. 


5. What is the difference between **preventDefault() and stopPropagation()** methods?
***(5)- preventDefault()=> 1. Stop the Browser default action Example: Form submit and link redirect
        stopPropagation() => 2. Stop Event bubbling/capturing Example: When we want to handle only the child element’s event and don’t want to  it propagate of the parent.


Technology Stack
- HTML
- CSS ( Tailwind CSS , DaisyUI )
- JavaScript ( Vanilla only )
- Font Awesome (Icons)




