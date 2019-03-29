 What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
Proptypes let's you specify what kind of data you are expecting in props and allows you to put console logs or alerts when it's not what you expected. Having incorrect data types can make debugging wrong outputs very challenging.

 Describe a life-cycle event in React?
In all three stages of the lifecycle a component can also construct, run a lifecycle method and then render. During the mounting stage constuctor is run componentDidMount is run and then render is run. During the update stage render can be run again if setState is used or if render is called. And during the unmount stage ComponentDidUnmount is run to make sure there is nothing left running in the DOM.

 Explain the details of a Higher Order Component?
A higher order component can add logic or reusability to a more generic component. For example a button component can be used in a different higher order components to make them do different things.

 What are three different ways to style components in React? Explain some of the benefits of each.

Vanilla css, SCSS/LESS, and styled components. CSS is basic and easy to write and there are plenty of resources online. SCSS/LESS can be written more efficiently and there are more libraries available. And styled components offer the most efficient stying because Javascript can be written right in with the CSS.
