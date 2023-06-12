// Repositories Fetch
fetch("https://api.github.com/users/lily-fitz/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// Repository Language Url Fetch
fetch(
  "https://api.github.com/repos/lily-fitz/classic-wordpress-theme-wordpress-scripts/languages"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// Repository Language Url Fetch w/ Object.keys
fetch(
  "https://api.github.com/repos/lily-fitz/classic-wordpress-theme-wordpress-scripts/languages"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(Object.keys(data));
  });

// Repository Language Url Fetch, adding languages to the page
fetch(
  "https://api.github.com/repos/lily-fitz/classic-wordpress-theme-wordpress-scripts/languages"
)
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data).forEach((language) => {
      const newLanguageElement = document.createElement("p");
      newLanguageElement.textContent = language;
      document.body.appendChild(newLanguageElement);
    });
  });
