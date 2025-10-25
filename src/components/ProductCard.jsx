import "./ProductCard.css";

export default function ProductCard({ product, addToCart }) {
  const { title, image, price, rating } = product;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating?.rate || 0);
    const hasHalf = rating?.rate % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (hasHalf) stars.push("☆");
    while (stars.length < 5) stars.push("✩");
    return stars.join(" ");
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title.length > 40 ? title.slice(0, 40) + "..." : title}</h4>

      <p className="price">${price.toFixed(2)}</p>

      <div className="rating">
        <span className="stars">{renderStars()}</span>
        <span className="rating-value">
          {rating?.rate ? rating.rate.toFixed(1) : "N/A"} / 5
        </span>
      </div>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
