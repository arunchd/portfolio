import { useState } from "react";

function Hooks() {
    const [search, setSearch] = useState("");

    const products = [
        "Laptop",
        "Phone",
        "Tablet",
        "Monitor",
    ];

    const filteredProducts = products.filter(product =>
        product.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="container text-center inner-page">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul className="list-style-none">
                {filteredProducts.map(product => (
                    <li key={product}>{product}</li>
                ))}
            </ul>
        </section>
    );
}
export default Hooks;