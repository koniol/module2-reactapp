
var favFilms = [
    {
        id : 1,
        title : "Karmazynowy przypływ",
        price : '25.99',
        img : './img/krp.jpeg',
    },
    {
        id : 2,
        title : "Cube",
        price : '15.99',
        img : './img/cube.jpeg'
    },
    {
        id : 3,
        title : "Resident evil",
        price : '15.99',
        img : './img/resident.jpeg'
    },
    {
        id : 4,
        title : "Władca pirścieni osiem wierz",
        price : '225.99',
        img : './img/wlad.jpeg'
    }
];

var films = favFilms.map(movie =>{
    return React.createElement('li', {key: movie.id, className: 'noDecoration'}, 
            React.createElement('h1', {className: 'title'}, movie.title),
            React.createElement('p', {}, 'Cena ' + movie.price),
            React.createElement('img', {src: movie.img})
        );
});


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, films)
  );

ReactDOM.render(element, document.getElementById('react-app'));