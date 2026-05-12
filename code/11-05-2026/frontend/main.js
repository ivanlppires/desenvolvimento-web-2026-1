const el = document.querySelector('#produtos');
const getProducts = async () => {
    const response = await fetch('http://localhost:3000/produtos');
    const products = await response.json();

    for (const p of products) {
        el.innerHTML += '<P>' + p + '</P>';
    }
}
getProducts();