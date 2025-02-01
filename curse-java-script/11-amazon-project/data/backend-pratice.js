
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', () => {
  console.log(xhr.response)
});

// GET, POST, PUT, DELETE
// stars with 4(our problem) 5(backend problem) (400,404, 500) = failed
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
