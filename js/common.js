const loadCategorie = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const res = await fetch(url);
    const data = await res.json();
    displayCategorie(data.data.news_category);

}
const displayCategorie = categorie => {
    // console.log(categorie);
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
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
    const res = await fetch(url);
    const data = await res.json();
    catagoriItem(data.data);
}

const catagoriItem = item => {
    console.log(item);
    const items = document.getElementById('card');
    item.forEach(itemCard => {

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
                            <p class="card-text">${itemCard.details} </p>
                        </div>
                        <div class="px-3">
                            <ul class="nav nav-pills nav-fill">
                                <li class="nav-item">
                                    <div class="d-flex align-self-center">
                                        <img src="${itemCard.author.img}"
                                            class="rounded-circle" style="height: 40px; width: 40px;" alt="">
                                        <h5 class="card-text px-2">${itemCard.author.name}</h5>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <h5 class="card-text text-bold"><i class="fa-regular fa-eye fs-5 me-2"></i>${itemCard.total_view
            }</h5>
                                </li>
                                <li class="nav-item">

                                    <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                            class="fa-sharp fa-solid fa-arrow-right fs-3"></i></a>
                                </li>
                            </ul>
                            <!-- Button trigger modal -->


                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Details</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
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


}


// ${catagori.category_id}
// console.log(itemCard.author.name);

loadCategorie();
displayId()