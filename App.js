import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Navigation from "./Navigation/Navigation"

const initialState = {
  // add random initial data as an example
  tasks_raw: [
    { text: "Start making a presentation", type: "inbox" },
    { text: "Pay for rent", type: "work" },
    { text: "Buy a milk", type: "shopping" },
    { text: "Don’t forget to pick up Mickael from school", type: "family" },
    { text: "Buy a chocolate for Charlotte", type: "personal" },
  ],
  categories_raw: [
    { title: "Inbox", tasksNumber: 1, type: "inbox" },
    { title: "Work", tasksNumber: 1, type: "work" },
    { title: "Shopping", tasksNumber: 1, type: "shopping" },
    { title: "Family", tasksNumber: 1, type: "family" },
    { title: "Personal", tasksNumber: 1, type: "personal" },
  ],
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}