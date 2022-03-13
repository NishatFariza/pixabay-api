// const API_KEY =`26117824-f13ff962a01f2176ce08d9228`;

/* search image data  */
const searchImages = () =>{
    // console.log('Hello');
    const searchInput =document.getElementById('search-input').value;
    // console.log(searchInput);  
    const url = `https://pixabay.com/api/?key=26117824-f13ff962a01f2176ce08d9228&q=yellow+flowers&image_type=photo&pretty=true`
    fetch(url)
    .then(res =>res.json())
    .then(data =>console.log(data))

    console.log(searchInput)
}

/* display image */
