import "./ProductCard.css"

function ProductCard(propiedades) {
    console.log("las propiedades de product card son:", propiedades)
    const product = {
        title: "Tv Samsung 32",
        price: 400000,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur magni ipsa corrupti temporibus tenetur deleniti impedit voluptates? Vero ab doloribus sint quas iste asperiores illo, provident iure dolore est dicta."
    }
    return (
        <div className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>Precio: ${product.price} ARG</div>
            <button>Comprar</button>
            <hr />
        </div>
    )
}
export default ProductCard