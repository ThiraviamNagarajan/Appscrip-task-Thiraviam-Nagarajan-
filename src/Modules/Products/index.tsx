import React, { useEffect, useState } from "react";
import Filter from "../SideNav";
import ProductList from "../ProductList";
import Dropdown from "../../Components/DropDown";

const Products = () => {
  const [filter, setFilter] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [selected, setSelected] = useState("Recommended");

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (filter) {
      setShowFilter(true);
    } else {
      const timeout = setTimeout(() => setShowFilter(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [filter]);

  return (
    <>
      <div style={{ padding: screenWidth<786?"0px 30px":"0px 100px" }}>
        <div
          style={{
            display: "flex",
            justifyContent:screenWidth>786? "space-between":"",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width:screenWidth>786 ?"20%":"50%",
              alignItems: "center",
            }}
          >
            {screenWidth>768 &&
            <div
              style={{
                color: "#252020",
                fontWeight: "700",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
            >
              20 items
            </div>
}
            <div
              onClick={() => setFilter(!filter)}
              style={{
                cursor: "pointer",
                fontSize:screenWidth<768?"12px": "14px",
                fontWeight: screenWidth<768?"600":"400",
                color:screenWidth<768?"#252020": "#888792",
                textTransform: "uppercase",
              }}
            >
              {  screenWidth < 768
                  ? filter
                    ? "Hide Filter"
                    : "Show Filter"  :filter?"<  Hide Filter" : ">  Show Filter"}
            </div>
          </div>
          <div style={{ width: "10%" }}>
            <Dropdown
              options={[
                "recommended",
                "popular",
                "Price : high to low",
                "Price : low to high",
              ]}
              label={selected}
              onSelect={(value) => setSelected(value)}
            />
          </div>
        </div>
        <div
  style={{
    display: "flex",
    flexDirection: screenWidth < 768 ? "column" : "row",
    width: "100%",
    position: "relative",
    overflow: screenWidth < 768 ? "hidden" : "visible",
  }}
>
          {showFilter && (
            <div
              style={{
                width:screenWidth<768?"100%" :"25%",
                backgroundColor: "#fff",
                position:screenWidth<768?"relative": "absolute",
                top: 0,
                left: 0,
                height:screenWidth>768? "100%":"",
                transition: "transform 0.3s ease",
                transform:
                screenWidth < 768
                  ? filter
                    ? "translateY(0%)"
                    : "translateY(-100%)"
                  : filter
                  ? "translateX(0%)"
                  : "translateX(-100%)",
                zIndex:screenWidth<768?0: 2,
              }}
            >
              <Filter />
            </div>
          )}

          <div
            style={{
              width: filter &&screenWidth>768? "75%" : "100%",
              marginLeft: filter&& screenWidth>768 ? "25%" : "0",
              transition: "margin-left 0.3s ease",
            }}
          >
            <ProductList filter={filter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
