var recipe = {
    'title': 'Menemen',
    'servings': 2,
    'ingredients': ['onion ', ' tomato ', ' egg ']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}