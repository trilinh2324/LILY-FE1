// import { Link } from "react-router-dom";
import logosp2 from "../Image/logofrom/logo-sp2.jpg";
import Imagelogo from "../Image/from/daychuyen.jpg";
import "../User/BodyHeader.css";

// export default function BodyHeader() {
//   return (
//     <div className="container BodyHeader">
//       <div className="HeaderImage">
//         <Link to={"/"}>
//           <img style={{ marginTop: '130px' }} src={logosp2} alt="" />
//         </Link>
//       </div>

//       <div>
//         <div>
//           <h2 className="ShopCategoryH3">
//             <div className="hr-container">
//               <div className="hr-text">XU HƯỚNG TÌM KIẾM</div>
//             </div>
//           </h2>
//         </div>

//         <div className="row BestSellCategory">
//           {["/bed", "/table", "/chair", "/products"].map((link, index) => (
//             <div className="col-sm-6 col-md-3" key={index}>
//               <Link to={link} className="BestSellimageContainer linkWithoutDecoration">
//                 <img src={Imagelogo} alt="" />
//                 <h4>{["Beds with Box Storage", "Modern Writing Tables", "Ergonomic Chairs", "Shoe Cabinets"][index]}</h4>
//                 <p className="BestSellP">{["300 + Options, Starting ₹10710", "180+ Options, Starting ₹2799", "250+ Options, Starting ₹3799", "95+ Options, Starting ₹3499"][index]}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
       
//       </div>

//       <div>
//         <div>
//           <h3 className="BestSellerH3">
//             <div className="hr-container">
//               <div className="hr-text">SẢN PHẨM YÊU THÍCH NHẤT</div>
//             </div>
//           </h3>
//         </div>
//         <div className="row BestSellCategory">
//           {["/bed", "/table", "/chair", "/products"].map((link, index) => (
//             <div className="col-sm-6 col-md-3" key={index}>
//               <Link to={link} className="BestSellimageContainer linkWithoutDecoration">
//                 <img src={Imagelogo} alt="" />
//                 <h4>{["Beds with Box Storage", "Modern Writing Tables", "Ergonomic Chairs", "Shoe Cabinets"][index]}</h4>
//                 <p className="BestSellP">{["300 + Options, Starting ₹10710", "180+ Options, Starting ₹2799", "250+ Options, Starting ₹3799", "95+ Options, Starting ₹3499"][index]}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <div>
//           <h3 className="BestSellerH3">
//             <div className="hr-container">
//               <div className="hr-text">SẢN PHẨM MỚI</div>
//             </div>
//           </h3>
//         </div>

//         <div className="row BestSellCategory">
//           {["/bed", "/table", "/chair", "/products"].map((link, index) => (
//             <div className="col-sm-6 col-md-3" key={index}>
//               <Link to={link} className="BestSellimageContainer linkWithoutDecoration">
//                 <img src={Imagelogo} alt="" />
//                 <h4>{["Beds with Box Storage", "Modern Writing Tables", "Ergonomic Chairs", "Shoe Cabinets"][index]}</h4>
//                 <p className="BestSellP">{["300 + Options, Starting ₹10710", "180+ Options, Starting ₹2799", "250+ Options, Starting ₹3799", "95+ Options, Starting ₹3499"][index]}</p>
//               </Link>
//             </div>
//           ))}
//         </div>

        
//       </div>

//       <div>
//         <div>
//           <h3 className="BestSellerH3">
//             <div className="hr-container">
//               <div className="hr-text">SẢN PHẨM KHUYẾN MÃI</div>
//             </div>
//           </h3>
//         </div>
//         <div className="row BestSellCategory">
//           {["/bed", "/table", "/chair", "/products"].map((link, index) => (
//             <div className="col-sm-6 col-md-3" key={index}>
//               <Link to={link} className="BestSellimageContainer linkWithoutDecoration">
//                 <img src={Imagelogo} alt="" />
//                 <h4>{["Beds with Box Storage", "Modern Writing Tables", "Ergonomic Chairs", "Shoe Cabinets"][index]}</h4>
//                 <p className="BestSellP">{["300 + Options, Starting ₹10710", "180+ Options, Starting ₹2799", "250+ Options, Starting ₹3799", "95+ Options, Starting ₹3499"][index]}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../ProductService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts().then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.error("There was an error fetching the products!", error);
    });
  }, []);

  const rows = [];
  const chunkSize = 4;
  const displayedProducts = products.slice(0, 8); // Get only the first 8 products

  for (let i = 0; i < displayedProducts.length; i += chunkSize) {
    const chunk = displayedProducts.slice(i, i + chunkSize);
    rows.push(chunk);
  }

  return (
    <div>
      <h3 className="BestSellerH3"> 
        <div className="hr-container">
          <div className="hr-text">SẢN PHẨM MỚI</div>
        </div>
      </h3>
              
      <div>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row BestSellCategory" style={{ marginBottom: '20px' }}>
            {row.map((product) => (
              <div key={product.id} className="col-6 col-md-3" style={{ backgroundColor: 'rgb(243 240 240)', margin: '10px', borderRadius: '10px', width: '350px', height: '400px' }}>
                <Link to={`/product/${product.id}`} className="BestSellimageContainer linkWithoutDecoration" style={{ display: 'block', height: '100%', borderRadius: '10px' }}>
                <img
  className="image-click-effect"
  style={{ width: '100%', height: '60%', borderRadius: '10px 10px 0 0', objectFit: 'cover' }}
  src={`http://localhost:8080/Image/${product.image}`}
  alt={product.name}
/>
                  <div style={{ padding: '10px', width: '100%' }}>
                    <h4>{product.name}</h4>
                    <p style={{ color: 'red' }}>{product.formattedPrice} ₫</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default function BodyHeader() {
  return (
    <div className="container BodyHeader">
      <div className="HeaderImage">
        <Link to={"/"}>
          <img style={{ marginTop: '130px' }} src={logosp2} alt="" />
        </Link>
      </div>

      <div>
        <div>
          <h2 className="ShopCategoryH3">
            <div className="hr-container">
              <div className="hr-text">XU HƯỚNG TÌM KIẾM</div>
            </div>
          </h2>
        </div>

        <div className="row BestSellCategory">
          {["/bed", "/table", "/chair", "/products","/bed"].map((link, index) => (
            <div className="col-sm-6 col-md-3" key={index}>
              <Link to={link} className="BestSellimageContainer linkWithoutDecoration">
                <img style={{borderRadius:'10px'}} src={Imagelogo} alt="" />
                <h4>{["VÒNG - LẮC", "NHẪN", "DÂY CHUYỀN", "BÔNG TAI","KHUYÊN XỎ"][index]}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* chứa thông tin  list sản phẩm mới */}
      <ProductList />
    </div>
  );
}
