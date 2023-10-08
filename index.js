

//
// container.innerHTML="";
let search=document.querySelector("#search");
let container=document.querySelector("#container");
let form=document.querySelector(".myform");
// console.log(form);
let btn=document.getElementById("btn");
let heading=document.getElementById("heading");
form.addEventListener("submit",(ev)=>{
   
    ev.preventDefault();
    let text=search.value;
    heading.innerText=`Search "${text}"`;
    let url=`http://www.omdbapi.com/?s=${text}&apikey=92d6a9d5`;
    //console.log(url);
    fetchdata(url);
    search.value="";

    })



async function fetchdata(url){
    let response= await axios.get(url);
    console.log(response.data.Search);
    let results=response.data.Search
    showData(results);
}
function showData(results){
    container.innerHTML="";
results.forEach(element => {
       console.log(element);
       let div=document.createElement("div");
       div.classList.add("card")
      
       div.classList.add("w-60");
       
       div.classList.add("m-2");
       div.classList.add("hover:scale-75");
       div.classList.add("cursor-pointer")

       div.innerHTML=`<img src="${element.Poster}" class="card-img-top" alt="${element.Title}">
       <div class="card-body">
         <h5 class="card-title font-serif text-xl">${element.Title}</h5>
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item font-serif">${element.Year}</li>
         <li class="list-group-item font-serif">${element.Type}</li>
       </ul>`
       container.append(div);


});
}


