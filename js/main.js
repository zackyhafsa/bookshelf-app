document.addEventListener("DOMContentLoaded", function () {
  const inputBook = document.getElementById("inputBook");
  const inputSearchBook = document.getElementById("searchBook");
  const inputBookIsComplete = document.getElementById("inputBookIsComplete");

  inputBook.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  inputSearchBook.addEventListener("keyup", function (event) {
    event.preventDefault();
    searchBook();
  });

  inputSearchBook.addEventListener("submit", function (event) {
    event.preventDefault();
    searchBook();
  });

  inputBookIsComplete.addEventListener("input", function (event) {
    event.preventDefault();
    checkButton();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener("ondatasaved", () => {
  console.log("Buku Sudah Disimpan");
});

document.addEventListener("ondataloaded", () => {
  refreshDataFromBooks();
});

// javascript DOM

// storage
