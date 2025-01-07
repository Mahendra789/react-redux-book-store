## Project Brief: A Simple React and Redux Bookstore Application

- A simple application built using React (18), Redux (9), and Bootstrap.
- Core functionality includes listing books, managing a cart, and displaying purchase confirmations.

### Run the Project:

1. Run npm i to install all dependencies.
2. Start the JSON server to load data using npm run json-server.
3. Launch the project with npm run dev.

### Features:

- Book Listing: Displays a list of books for users to browse.
- Add to Cart: Users can add books to their cart.
- Cart Management:
  - Adjust product quantities (increase or decrease).
  - Remove items from the cart.
- Purchase Flow:

  - On clicking the "Purchase" button:

    - A popup appears saying "Thanks for your purchase!".
    - If the cart is empty, a message "Cart is empty" is shown, and the user is redirected to the product listing page.

### Live demo:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/Mahendra789/react-redux-book-store)
