function doStuffWithBook(book){
  console.log(book);
  const {title, numberOfPages, downloads, rating, isPublic} = book;
  console.log(title);
  console.log(numberOfPages);
}

doStuffWithBook({
  title: "The Last Kingdom",
  downloads: 10283,
  numberOfPages: 736,
  rating: 8.38,
  isPublic: true,
});

