// import { useContext } from "react";

export default function OrderButton({product}){
    const {addTocart} = useContext(CartContext);

    const handleClick = (product) => {
        console.log("Adding to cart", product);
        addTocart(product);
    }

    return(
    <a href="#0" class="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib blac" onClick={() => handleClick(product)}>Add to Cart</a>
    )
}

