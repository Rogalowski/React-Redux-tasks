const init = [
    {
        id: 1,
        name: "Pomidorówka",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [1, 2, 3],
    },
    {
        id: 2,
        name: "Coś innego",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [3, 1],
    },
    {
        id: 3,
        name: "Jeszcze inny przepis",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [5, 6],
    },
];

export const recipes = (state = init, action) => {
    return state;
};
