import Product from "./Product";

function Gallery() {
  const products = [
    { id: 1, name: "Books", image: "/assets/product1.jpeg", price: "$20" },
    { id: 2, name: "Movies", image: "/assets/product2.jpeg", price: "$15" },
    { id: 3, name: "Paintings", image: "/assets/product3.jpeg", price: "$25" },
    { id: 4, name: "Musical Instruments", image: "/assets/product4.jpeg", price: "$100" },
    { id: 5, name: "Swimming Tools", image: "/assets/product5.jpeg", price: "$50" },
  ];

  return (
    <div className="gallery">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Gallery;
