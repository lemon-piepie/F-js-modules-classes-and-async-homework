export const getPoetry = () =>
    fetch("https://v1.jinrishici.com/all.json", {
        method: "GET",
        headers: {
            "accept": "text/html"
        },
        credentials: "same-origin"
    })
    .then(response => response.json())
    .then((text) => {
      return [text.origin, text.author, text.content];
    })
    .catch((error) => {
      error.message;
    });

