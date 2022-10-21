var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: true,
      imageSrc: "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg" ,
      
    } ,
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      imageSrc:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
      alreadyRead: false,
    },
    {
        title: 'New Life',
        author: 'Orhan Pamuk',
        imageSrc:"https://static.nadirkitap.com/fotograf/35977/8/Kitap_20170218161411_35977_8.jpg",
        alreadyRead: false,
    }
];

var bookList = document.createElement('ul');
document.body.appendChild(bookList);
    for (var i = 0; i < books.length; i++) {
      var bookItem = document.createElement('li');
      var bookImg = document.createElement('img');
      bookImg.src = books[i].imageSrc;
     
      
      bookImg.height = 150;
      bookImg.width = 180;

      bookItem.appendChild(bookImg);
      var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
      bookItem.appendChild(bookDescription);
      if (books[i].alreadyRead) {
        bookItem.style.color = 'grey';
      }
      bookList.appendChild(bookItem);
    }




  