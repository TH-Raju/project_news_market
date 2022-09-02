const loadCategorie = async () => {
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
        <a class="nav-link" href="#">${catagori.category_name}</a>
        `
        catagories.appendChild(catagoriLi);
    })
}
loadCategorie();