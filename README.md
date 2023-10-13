# Humanitarian Operations - Basic test

To Do List done in React.

App Deployed by Netify, please visit: https://gorka-todo-list.netlify.app/

Find the source code in src folder where the main file App.js renders all the components.

I also created a Project at https://github.com/users/GorkaEchavarri/projects/2/views/1
Here pending work and finished features can be checked for future reference.

## Description

To Do list done in React.

-Ability to add new tasks to the list.

-Ability to mark tasks as completed.

-Ability to remove tasks from the list.

-Display the total number of tasks remaining.

-Add filtering functionality to show completed tasks only or all tasks 

### Pending or Future functionalities

-Store tasks in the browser's local storage, so that they persist after the page is reloaded.

-Add drag and drop functionality for tasks.

-Allow tasks to be edited after they have been added.

-Add search functionality to search for tasks by name.


## Getting Started

### Dependencies

react: Version 18.2.0

react-dom: Version 18.2.0

react-scripts: Version 5.0.1

### Executing program

Please visit: https://gorka-todo-list.netlify.app/


To run the site in the localhost run:
```
npm start
```

## Noted issues

-When selecting the "Pending" or "Done" filter in the app, a problematic behavior occurs. If a user clicks a checkbox while using filters, the displayed tasks are updated and the rest are deleted. This issue stems from the way React handles state when rendering tasks. It erroneously considers the current filtered tasks as the previous state, leading to unintended deletions.


## Authors

Gorka Echavarri


