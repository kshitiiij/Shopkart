const Products = [
    {
        id: "price_1Ne0EKSAEVuXTV4aoxJ0xqOR",
        title: "Coffee",
        price:190
    },
    {
        id: "price_1Ne0HKSAEVuXTV4alLx3UBqE",
        title: "Specs",
        price:1200
    },
    {
        id: "price_1Ne0HySAEVuXTV4a2h9FWORb",
        title: "Camera",
        price:67000
    },
    {
        id: "price_1NvO8BSAEVuXTV4ahPyHSyUR",
        title: "Porsche 911 GT3RS",
        price:32500000
    },
    {
        id: "price_1NvO9aSAEVuXTV4ayVuZyILI",
        title: "Pixel 8 Pro",
        price:85000
    },
    {
        id: "price_1NvOA7SAEVuXTV4a6dXQJn85",
        title: "DJI Mavic 3",
        price:232000
    },
    {
        id: "price_1NvOAuSAEVuXTV4aGLUyV23C",
        title: "Unistellar Evscope",
        price:680000
    }
]

const getData = (id) => {
    const prodData = Products.find(prod => prod.id === id);
    if(prodData === undefined) {
        console.log("product does not exist!");
        return undefined;
    }
    return prodData;

}

export {Products,getData};