import { useReducer, useState } from "react";

import { reducer } from "./reducer";

// bokks, modalText, isModalOpen
// add book -> modalText
// remove book -> modalText

const booksData = [
  {
    id: 1,
    name: "Pather Panchal",
  },
  {
    id: 2,
    name: "Padma Nadir Majhi",
  },
  {
    id: 3,
    name: "Srikanta",
  },
];

const initialState = {
  books: booksData,
  modalText: "",
  isModalOpen: false,
};

const UseReducer = () => {
  const [bookState, dispatch] = useReducer(reducer, initialState);
  const [bookName, setBookName] = useState("");

  const Modal = ({ modalText }) => {
    return <p>{modalText}</p>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h1>Books List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button>Add Book</button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name}
            <button
              onClick={() => {
                handleRemove(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default UseReducer;
