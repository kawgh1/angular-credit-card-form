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

- ### Reactive Forms

  - #### Form Control Properties

    - angular.io/api/forms/AbstractConrol
    - **valid** --> Angular has validated whatever the user enter successfully
    - **invalid** --> The value in the input is invalid
    - **pending** --> Validation is currently running on this field
    - **disabled** --> Ignore user input on this field and dont validate it
    - **touched** --> User click into then out of the field
    - **untouched** --> User has not clicked into then out of this field
    - **pristine** --> User has not clicked on this field at all
    - **dirty** --> User has changed the value of this field

  - #### Input Masking
    - where an input automatically enters characters that are required for the input format
    - there are many **input masking** libraries
    - npmjs.com/packages/ngx-mask
      - `npm install ngx-mask`
