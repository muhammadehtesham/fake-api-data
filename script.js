const fetchingData = async () => {
    const id = document.getElementById("id")
    const category = document.getElementById("category")
    const description = document.getElementById("description")
    const price = document.getElementById("price")
    const rating = document.getElementById("rating")
    const image = document.getElementById("image")

    // console.log(id.textContent);
    // console.log(button.textContent);
    // console.log(description.textContent);
    // console.log(price.textContent);
    // console.log(rating.textContent);
    // console.log(image.src);



    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();




    data.forEach((product) => {
        const newRow = document.createElement("tr");

        const id = document.createElement("td");
        id.textContent = product.id;

        const category = document.createElement("td");
        category.textContent = product.category;

        const description = document.createElement("td");
        description.textContent = product.description;

        const price = document.createElement("td");
        price.textContent = `$${product.price}`;

        const rating = document.createElement("td");
        rating.textContent = product.rating.count;

        const image = document.createElement("img");
        image.style.width = "70px"
        image.src = product.image;





        newRow.appendChild(id);
        newRow.appendChild(category);
        newRow.appendChild(description);
        newRow.appendChild(price);
        newRow.appendChild(rating);
        newRow.appendChild(image);

        const table = document.getElementsByTagName('tbody')[0]
        table.appendChild(newRow);
    });


};

fetchingData();