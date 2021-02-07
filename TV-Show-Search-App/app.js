const form = document.querySelector('#searchForm');
const main = document.querySelector('#main');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchItem = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchItem}`);
    generateImages(res.data);
    form.elements.query.value = '';
})

const generateImages = (shows) => {
    for (let result of shows) {
        if(result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            main.append(img);
        }
        
    }
}