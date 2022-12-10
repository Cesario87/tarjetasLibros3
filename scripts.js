const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
    }]

const newElement = document.createElement("main");
document.body.appendChild(newElement);

const newElement1 = document.createElement("section");
newElement.appendChild(newElement1);
const newH2 = document.createElement("h2");
newElement1.appendChild(newH2);

const newElement2 = document.createElement("section");
newElement.appendChild(newElement2);



for (let i = 0; i < books.length; i++) {
    const newElement3 = document.createElement("article");
    newElement2.appendChild(newElement3);
    const newH3 = document.createElement("h3");
    newElement3.appendChild(newH3);
    const newP = document.createElement("p");
    newElement3.appendChild(newP);
    const newP2 = document.createElement("p");
    newElement3.appendChild(newP2);
    const newImg = document.createElement("img");
    newElement3.appendChild(newImg);
    const newP3 = document.createElement("p");
    newElement3.appendChild(newP3);
    const newP4 = document.createElement("p");
    newElement3.appendChild(newP4);
    const newP5 = document.createElement("p");
    newElement3.appendChild(newP5);
    const newA = document.createElement("a");
    newElement3.appendChild(newA);
    

    newH2.innerHTML = "BOOKS YOU MUST NOT READ BEFORE YOU DIE";
    newH3.innerHTML = books[i].title;
    newP.innerHTML = "Author: " + books[i].author;
    newP2.innerHTML = "Country: " + books[i].country;
    newImg.src = books[i].imageLink;
    newP3.innerHTML = "Language: " + books[i].language;
    newP4.innerHTML = "Year: " + books[i].year;
    newP5.innerHTML = "No. of pages: " + books[i].pages;
    //newA.innerHTML = books[i].link;

}

/* MÉTODO CORTO (NO USAR AQUÍ)
let data = {
    title:"titulo",
    author:"anonumo",
    country:"Canada",
    src:"mi_url.png",
    language:"spanish",
    year:0
}
 
let card = ` <article>
        <h3>${data.title}</h3>
        <p>${data.author}</p>
        <p>${data.country}</p>
        <img src=${data.src} alt="">
        <p>${data.language}</p>
        <p>${data.year}</p>
    </article>`
 
document.body.innerHTML = card
*/