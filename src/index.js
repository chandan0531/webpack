import {navbar} from "../components/navbar";
// console.log("navbar:", navbar)

import '../styles/navbar.css';

let container = document.getElementById("navbar")
container.innerHTML = navbar();


// const url = "https://api.themoviedb.org/3/movie/popular?api_key=5147197db67754942e4353ea8fa56c34&language=en-US&page=1"
// fetch(url)
// .then(function(res) {
//     return res.json()
// })
// .then(function(res) {
//     console.log("res:", res)
// })
// .catch(function(err) {
//     console.log(err)
// })