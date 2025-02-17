let output;

output = document.forms[0].id;
output = document.links;

output = document.forms[0].id = 'new-id';

if (document.links.length) {
  output = document.links[0].href = 'https:://youtube.com';
  output = document.links[0].id = 'google=link';
  output = document.links[0].className = 'google-class';
  output = document.links[0].classList;
}

output = document.images;
output = document.images[0];
output = document.images[0].src;


// convert document in array before forEach
const forms = Array.from(document.forms);
forms.forEach((form) => {
  console.log(form);
});

console.log(output);