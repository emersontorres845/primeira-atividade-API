
const sampleRecipes = [
    {
        label: "Espaguete a Bolonhesa",
        image: "https://img.cybercook.com.br/receitas/610/espaguete-com-molho-a-bolonhesa-ou-ragu-bolognese-1.jpeg", 
        source: "Cozinha Teste",
        calories: 500,
        url: "https://www.tudogostoso.com.br/receita/91293-espaguete-a-bolonhesa.html" 
    },
    {
        label: "Salada de Frango",
        image: "https://folhago.com.br/wp-content/uploads/2020/10/salada-0ceasar-com-frango.jpg", 
        source: "Receitas Saudáveis",
        calories: 300,
        url: "https://www.tudoreceitas.com/receita-de-salada-de-frango-fit-9697.html" 
    },
    {
        label: "Bolo de Chocolate",
        image: "https://dicasturismo.com.br/wp-content/uploads/2022/05/Copia-de-Bolo-Low-Carb-de-Chocolate-com-calda-de-Chocolate-1-1360x765.jpg", 
        source: "Doces Delícias",
        calories: 450,
        url: "https://www.tudogostoso.com.br/receita/309779-bolo-de-chocolate-simples.html" 
    },
    {
        label: "Feijoada",
        image: "https://receitasdemae.net/wp-content/uploads/2022/10/Feijoada-Tradicional-Deliciosa-1024x768.jpg", 
        source: "Delicia Tradicional",
        calories: 750,
        url: "https://www.tudogostoso.com.br/receita/2998-feijoada.html"
    }
];


document.getElementById('search-button').addEventListener('click', searchLocalRecipes);


function searchLocalRecipes() {
    const recipeName = document.getElementById('search').value.toLowerCase();
    if (!recipeName) {
        alert('Por favor, insira o nome de um ingrediente ou prato');
        return;
    }

    
    const filteredRecipes = sampleRecipes.filter(recipe =>
        recipe.label.toLowerCase().includes(recipeName)
    );

   
    displayRecipes({ hits: filteredRecipes.map(recipe => ({ recipe })) });
}


function displayRecipes(data) {
    const recipeContainer = document.getElementById('receitacontainer');
    recipeContainer.innerHTML = '';

    if (data.hits.length === 0) {
        recipeContainer.innerHTML = '<p>Nenhuma receita encontrada. Tente uma nova busca.</p>';
        return;
    }

    data.hits.forEach(hit => {
        const recipe = hit.recipe;
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <h2>${recipe.label}</h2>
            <img src="${recipe.image}" alt="${recipe.label}" style="max-width: 100%;">
            <p><strong>Fonte:</strong> ${recipe.source}</p>
            <p><strong>Calorias:</strong> ${Math.round(recipe.calories)}</p>
            <a href="${recipe.url}" target="_blank">Ver Receita</a>
        `;

        recipeContainer.appendChild(recipeElement);
    });
}