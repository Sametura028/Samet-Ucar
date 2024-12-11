// fetch("https://pokeapi.co/api/v2/pokemon/greninja")
// .then(response=>{
//     if(!response.ok){
//         throw new Error("İstenilen Pokemon bulunamadı");
//     }
//     return response.json();
// })
// .then(data=>console.log(data))
// .catch(error=>console.log(error));
// fetchData();


async function fetchData() {
    const loader = document.getElementById("loader");
    loader.style.display = "block";

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            alert("İstenilen Pokemon bulunamadı")
            loader.style.display = "none";

            throw new Error("İstenilen Pokemon bulunamadı");

        }
        const data = await response.json();
        console.log(data)
        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.style.display = "none";
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        loader.style.display = "none";



        const pokename = data.name
        const pokeElement = document.getElementById("pokename")
        pokeElement.innerHTML = pokename
        pokeElement.style.display = "block";



        let index = 0;
        const pokeabilities = document.getElementById("abilities");
        pokeabilities.innerHTML = "";

        while (index < data.abilities.length) {
            const abilities = data.abilities[index].ability.name;
            pokeabilities.innerHTML += abilities + "  ";
            index++;

        }


        let index2 = 0;
        const poketypes = document.getElementById("pokeTypes");
        poketypes.innerHTML = "";

        while (index2 < data.types.length) {
            const poketype = data.types[index2].type.name;
            poketypes.innerHTML += poketype + "  ";
            index2++;

        }



        poketypes.style.display = "block";

    }

    catch (error) {
        console.error(error);
    }
}