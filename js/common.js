const loadCategorie = async () => {
    toggleLoader(true);
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayCategorie(data.data.news_category);

}
const displayCategorie = categorie => {
    const catagories = document.getElementById("catagories");
    categorie.forEach(catagori => {
        const catagoriLi = document.createElement('li');
        catagoriLi.classList.add('nav-item');
        catagoriLi.innerHTML = `
        <a class="nav-link" href="#" onclick="displayId(${catagori.category_id})">${catagori.category_name}</a>
        `
        catagories.appendChild(catagoriLi);
    })
}

const displayId = async (id) => {
    toggleLoader(true);
    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
    const res = await fetch(url);
    const data = await res.json();
    catagoriItem(data.data);
    const h = document.getElementById('hf');
    h.innerText = data.data.length;

}


const catagoriItem = item => {
    const items = document.getElementById('card');
    items.innerHTML = '';
    const arr = [];
    const result = item.sort((a, b) => (b.total_view - a.total_view));

    result.forEach(itemCard => {
        // let array = itemCard.total_view === null ? '0' : itemCard.total_view;
        let array = arr.push(itemCard.total_view);


        const catagoriCard = document.createElement('div');
        catagoriCard.classList.add('row')
        catagoriCard.innerHTML = `
        <div class="col-md-4 my-5">
                        <img src="${itemCard.image_url}"
                            class="img-fluid rounded-start" style="max-width: 100%;" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${itemCard.title}</h5>
                            <p class="card-text">${itemCard.details.slice(0, 350)},...<small>read more.</small> </p>
                        </div>
                        <div class="px-3">
                            <ul class="nav nav-pills nav-fill">
                                <li class="nav-item">
                                    <div class="d-flex align-self-center">
                                        <img src="${itemCard.author.img}"
                                            class="rounded-circle" style="height: 50px; width: 50px;" alt="">
                                        <div>
                                        <h5 class="card-text px-2">${itemCard.author.name === null ? "No active data" : itemCard.author.name}</h5>
                                        <p class="card-text"><span class="card-text ms-4"></span>${itemCard.author.published_date}</p></div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <h5 class="card-text text-bold"><i class="fa-regular fa-eye fs-5 me-2"></i>${itemCard.total_view === null ? "No View" : itemCard.total_view
            }</h5>
                                </li>
                                <li class="nav-item">

                                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal_${itemCard._id}"><i
                                            class="fa-sharp fa-solid fa-arrow-right fs-3"></i></a>
                                </li>
                            </ul>
                            <!-- Button trigger modal -->
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal_${itemCard._id}" tabindex="-1" aria-labelledby="exampleModalLabel_${itemCard._id}"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel_${itemCard._id}">Details</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="card" style="width: 18rem;">
                                        <img src="${itemCard.author.img}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                          <h2 class="card-text fs-4">Name: ${itemCard.author.name === null ? "No active data" : itemCard.author.name}</h2>
                                          <p class="card-text"><span class="card-text text-bolder">Publishe Date: </span>${itemCard.author.published_date}</p>
                                          <p class="card-text"><span class="card-text text-bolder fs-5">Rating's: </span>${itemCard.rating.number}</p>
                                          <h5 class="card-text text-bold"><i class="fa-regular fa-eye fs-5 me-2"></i>${itemCard.total_view === null ? "No View" : itemCard.total_view
            }</h5>
                                        </div>
                                      </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal Close  -->


                        </div>
                    </div>`
        items.appendChild(catagoriCard);


    })


    //stop loader
    toggleLoader(false);

}



const toggleLoader = load => {
    const loadSection = document.getElementById('loader');
    if (load) {
        loadSection.classList.remove('d-none');
    } else {
        loadSection.classList.add('d-none');
    }
}

loadCategorie();
displayId(8);
