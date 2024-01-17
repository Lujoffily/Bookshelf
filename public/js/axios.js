let searchBtn = document.getElementById("searchBtn");
let paramsBtn = document.getElementById("paramsBtn");

const bookURL = () => {
    let search = document.getElementById('searchInput').value;
    const bookKey = "AIzaSyCWP2wkkvDpkqCGnXd_GS6WWc-tI6DKZtM";
    let poster = "";
    let descript = "";
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}=all&key=${bookKey}`)
        .then(response => {
            var book = response.data.items[0].id
            console.log(response.data.items)
            // const bookID = book.id
            poster += book.volumeInfo.imageLinks.thumbnail;
            descript += book.volumeInfo.description
        })

}

const videoURL = () => {
    const videoKey = "ohYP4vnMNvPPW1O0egOBVQfqKwvQqDOTKITGb4cI";
    let params = document.getElementById('paramsInput').value;
    let poster = "";
    let descript = "";
    let genres = " ";
    const OT = "";
    const title = "";
    const OL = "";
    let us_rating = "";
    axios.get(`https://api.watchmode.com/v1/search/?apiKey=${videoKey}&search_field=name&search_value=${params}`)
        .then(async response => {
            console.log(response)
            var videoResults = response.data.title_results;
            for(var i = 0; i<videoResults.length; i++){
                await axios.get(`https://api.watchmode.com/v1/title/${videoResults[i].id}/details/?apiKey=${videoKey}&append_to_response=sources`)
                .then(data => {
                    console.log(data)
                    poster += data.poster
                    descript += data.plot_overview
                    genres += data.genre_names[10]
                    OT += data.original_title;
                    OL += data.original_language;
                    title = data.title;
                    us_rating = data.usrating;
                }).catch(err => {
                    console.log(err)
                })}
        })
}

searchBtn.addEventListener('click', bookURL);
paramsBtn.addEventListener('click', videoURL);

let card = document.querySelector(".card")
let books = [
    {
        id: 0,
        name: 'Movie name',
        image: 'public/assest/download.jpeg'
    }
];

function initApp() {
    books.forEach((value, key) => {
        let newCard = document.createElement('div');
        newCard.innerHTML = `
            <img src="image/${value.image}"/>
            <div class="title">${value.name}</div>
        `
        card.appendChild(newCard);
    })
}

initApp();