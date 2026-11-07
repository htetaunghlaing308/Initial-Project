/*fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
    return response;
}).then((data)=>{
    return console.log(data);
}).catch((error)=>{
    console.log('error');
});*/

//async await

/*async function fetchData(params) {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        return data;
    }catch(error){
        console.log("error");
    }
    
}

console.log(fetchData());*/

// asyne await pratical

let table = document.querySelector(".table");
async function dataFetch() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);

    for(i=0;i < data.length; i++){
        console.log(i);
        //console.log(data[0].description);
        table.innerHTML += 
        `
        <tr>
            <td>${data[i].id}</td>
            <td><img src="${data[i].image}"/></td>
            <td>${data[i].title}</td>
            <td>$ ${data[i].price}</td>
        </tr>`;
    }
    console.log(table);
    
}
dataFetch();

