

function get(path, callback) {
  fetch('./LessonText/hola.json')
    .then(result => {
      return result.json();
    })
    .then(result => {
      console.log('Lesson text here => ', result);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })

  // fetch(`${baseUrl}${path}`)
  //   .then(result => {
  //     return result.json();
  //   })
  //   .then(result => {
  //     callback(result);
  //   })
  //   .catch(error => {
  //     console.log(`ERROR => ${error}`);
  //   })
}


function post(path, body, callback) {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  let init = { method: 'POST',
                mode: 'cors',
                headers: headers,
                body: JSON.stringify(body)
              };

  fetch(`${baseUrl}${path}`, init)
    .then(result => {
      return result.json();
    })
    .then(result => {
      callback(result);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })
}


export { get, post };
