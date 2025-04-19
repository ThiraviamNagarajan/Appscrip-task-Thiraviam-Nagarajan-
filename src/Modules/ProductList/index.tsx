import React, { useEffect, useRef, useState } from "react";
import heartfill from "../../assets/heartfill.png";
import heart from "../../assets/heartnav.png";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ProductList({ filter }: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [isFavouriteID, setIsfavouriteId] = useState<any>(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFlexBasis = () => {
    if (screenWidth >= 900)
      return `${filter ? "calc(33.33333% - 20px)" : "calc(25% - 20px)"}`;
    if (screenWidth >= 600) return "calc(50% - 20px)";
    return "100%";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Network response was not ok");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleMouseEnter = (id: number) => {
    setHoveredProductId(id);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              flexBasis: getFlexBasis(),
              padding: "20px",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
              marginTop: "20px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              cursor: "pointer",
            }}
          >
            <div style={{ padding: "20px" }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
              />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  color: "#252020",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "80%",
                  height: "25px",
                }}
              >
                {product.title}
              </p>

              <p
                style={{
                  fontSize: "12px",
                  color: "#888792",
                  fontWeight: "400",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "80%",
                  height: "35px",
                }}
              >
                {product.description}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {" "}
              <p>{product.price + 80} ₹</p>
              <div
                style={{
                  color: "#888792",
                  fontSize: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <p style={{ fontWeight: "600" }}>
                  {product.rating.rate} ratings
                </p>{" "}
                <p style={{ fontWeight: "600" }}>
                  of {product.rating.count} users
                </p>
                <div
                  onClick={() => {
                    setIsFavourite((prev) => !prev);
                    setIsfavouriteId(product.id);
                  }}
                  style={{ textAlign: "end" }}
                >
                  {isFavourite && product.id === isFavouriteID ? (
                    <img src={heartfill} width={12} height={12} />
                  ) : (
                    <img src={heart} width={12} height={12} />
                  )}
                </div>
              </div>
            </div>
            {hoveredProductId === product.id && (
              <div
                style={{
                  position: "absolute",
                  top: "40%",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  color: "#252020",
                  padding: "20px",
                  overflow: "auto",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  pointerEvents: "none",
                }}
              >
                <h3 style={{ fontSize: "18px" }}>{product.title}</h3>
                <p style={{ fontSize: "12px" }}>{product.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
