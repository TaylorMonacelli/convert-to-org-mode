const publish = async (url, options) => {
  return new Promise((resolve, reject) => {
    fetchAsync(url, options)
      .then(data => {
        console.log(data);
        resolve(data);
      })
      .catch(reason => {
        console.log(reason.message);
        reject(reason.message);
      });
  });
};

function cssElement(url) {
  var link = document.createElement("link");
  link.href = url;
  link.rel = "stylesheet";
  link.type = "text/css";
  return link;
}

async function fetchAsync(url, options) {
  // await response of fetch call
  let response = await fetch(url, options);
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}
