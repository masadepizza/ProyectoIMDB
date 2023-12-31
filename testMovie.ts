//Paso 4: Fichero testMovie.ts

// 1. Tomando estas clases crear el fichero testMovie.ts que muestre todos los datos de las
// películas.

// 2. Actualizar el GIT con esta nueva versión de la app

import { Movie } from "./Movie";
import { Professional } from "./Professional";


//Datos de la Primera Película//

let actor1 = new Professional("Ron Perlman",73, 90, 185, false, "American", 0, "Actor");
let actor2 = new Professional("David Bradley", 81, 75, 180, false, "British", 0, "Actor");
let director1 = new Professional("Guillermo Del Toro", 58, 91, 178, false, "Mexican", 3, "Director");
let writer1 = new Professional("Gris Grimly", 48, 60, 168, false, "American", 0, "Writer");
let mymovie = new Movie("Pinocchio", 2022, "American", "Animación");


//mymovie.actors.push(actor1, actor2);
mymovie.actors=[actor1, actor2];
mymovie.director = director1;
mymovie.writer = writer1;
mymovie.language = "English";
mymovie.isMCU = false;
mymovie.mainCharacterName = "Gregory Mann";
mymovie.producer = " Alexander Bulkley";
mymovie.distributor = "TriPictures";
mymovie.plataforma = "Netflix";

console.log(mymovie.mostrarMovies());


//Datos de la Segunda Película//
let actress1 = new Professional("Scarlett Johansson",38, 58, 160, false, "American", 0, "Actress");
let actor3 = new Professional("David Harbour", 48, 90, 185, false, "American", 0, "Actor");
let director2 = new Professional("Cate Shortland", 54, 60, 162, false, "Australian", 0, "Director");
let writer3 = new Professional("Jac Schaeffer", 44, 65, 172, false, "American", 0, "Writer");
let mymovie2 = new Movie("Black Widow", 2021, "American", "Ciencia Ficción");


//mymovie2.actors.push(actress1, actor3);
mymovie2.actors=[actress1, actor3];
mymovie2.director = director2;
mymovie2.writer = writer3;
mymovie2.language = "English";
mymovie2.isMCU = true;
mymovie2.mainCharacterName = "Scarlett Johansson";
mymovie2.producer = "Kevin Feige";
mymovie2.distributor = "Walt Disney Studios Motion Pictures";
mymovie2.plataforma = "Disney+";

console.log(mymovie2.mostrarMovies());

//Datos de la Tercera Película//
let actress2 = new Professional("Michelle Yeoh",60, 55, 163, false, "Malaysian", 1, "Actress");
let actor4 = new Professional("Ke Huy Quan", 51, 58, 163, false, "Vietnamese", 1, "Actor");
let director3 = new Professional("Daniel Kwan", 34, 60, 162, false, "American", 1, "Director");
let writer5 = new Professional("Daniel Kwan", 34, 60, 162, false, "American", 1, "Writer");
let mymovie3 = new Movie("Todo a la vez en todas partes", 2022, "American", "Comedia Dramática");

//mymovie3.actors.push(actress2, actor4);
mymovie3.actors=[actress2, actor4];
mymovie3.director = director3;
mymovie3.writer = writer5;
mymovie3.language = "English";
mymovie3.isMCU = false;
mymovie3.mainCharacterName = "Michelle Yeoh";
mymovie3.producer = "Anthony y Joe Russo";
mymovie3.distributor = "YouPlanet Pictures";
mymovie3.plataforma = "Movistar+";

console.log(mymovie3.mostrarMovies());