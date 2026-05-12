const getProducts = async () => {
    const response = await fetch('http://localhost:3000/produtos');
    const products = await response.json();
    document.querySelector('#produtos').innerHTML = products;
}
getProducts();