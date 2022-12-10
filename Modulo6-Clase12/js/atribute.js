const message = document.querySelector('#message');
console.log(message.value);

const activelink = document.querySelector('.btn.active');
console.log(activelink.href);
activelink.href = "https://goit.global/mx/";
console.log(activelink.href);

const image = document.querySelector(".image");
console.log(image.src);

image.src = 'https://placeimg.com/640/480/tech';