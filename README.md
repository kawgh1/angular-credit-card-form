### Forms


- ### Reactive Forms
    - Most of the form logic is driven by configuration in a **component class file**
    - More appropriate for complex forms
    - Exposes some aspects of the form to us as RxJS Observables
    - We have to wire up the **Reactive Forms Module** to our App Module to use them

- ### Template Forms
    - Most of the form logic is driven by our config in our **component template file**
    - More appropriate for simple forms
    - Harder to deal with dynamic forms (adding / removing form elements)
    - We have to wire up the **Forms Module** to our App Module to use them