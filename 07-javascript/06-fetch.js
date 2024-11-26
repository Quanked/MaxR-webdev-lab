const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");
const loading = document.querySelector("#loading");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data", data);
      data.forEach((item) => {
        const books = document.createElement("div");

        const title = document.createElement("h2");
        title.textContent = item.name;
        books.appendChild(title);

        const author = document.createElement("p");
        author.textContent = item.authors;
        books.appendChild(author);

        const publish = document.createElement("p");
        publish.textContent = new Date(item.released).getFullYear();
        books.appendChild(publish);

        const pages = document.createElement("p");
        pages.textContent = `${item.numberOfPages} Pages`;
        books.appendChild(pages);

        app.appendChild(books);
      });
      app.style.display = "flex";
      app.style.flexDirection = "column";
      app.style.alignItems = "center";
      app.style.justifyContent = "center";
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
