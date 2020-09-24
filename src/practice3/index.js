export const getPoetry = () =>
  // TODO feedback：fetch的第二个参数可以不传，用默认的就可以
  // TODO feedback：代码缩进尽量和其他文件一样
    fetch("https://v1.jinrishici.com/all.json", {
        method: "GET",
        headers: {
            "accept": "text/html"
        },
        credentials: "same-origin"
    })
    .then(response => response.json())
    .then((text) => {
      // TODO feedback：命名为text不太合理，用data或者类似的会好些
      return [text.origin, text.author, text.content];
    })
    .catch((error) => {
      error.message;
    });

