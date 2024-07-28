export const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allBook = [...state.books, action.payload];
    return {
      ...state,
      books: allBook,
      modalText: "books is added.",
      isModalOpen: true,
    };
  }
  if (action.type === "REMOVE") {
    const filteredBooks = [...state.books].filter((book) => book.id !== action.payload);
    return {
      ...state,
      books: filteredBooks,
      modalText: "books is removed",
      isModalOpen: true,
    };
  }
  return state;
};
