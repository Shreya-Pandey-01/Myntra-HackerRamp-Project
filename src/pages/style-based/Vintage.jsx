import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Vintage.css";

function vintage() {
  return (
    <>
      <div className="title-style">
        <h1 className="mt-5 mb-4 ">Vintage - Collection</h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-7 gy-5">
          {/* Column 1 */}
          <div className="col-md-3">
            <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height={300}
                  src="https://cdn.shopify.com/s/files/1/0406/6925/products/1950s-Cream-Lace-Vintage-Prom-Dress-1800.jpg?v=1400776837"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-3">
            <div className="box-style p-2">
              <div className="img-container">
                <Image
                  width=  {230}
                  height={300}
                  src="https://th.bing.com/th/id/OIP.Zxpm_Ng98Wnkl356s3ITTAAAAA?rs=1&pid=ImgDetMain"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://cdn.shopify.com/s/files/1/0261/0749/products/retro-modest-tea-length-organza-wedding-dress-dv2066_1200x.jpg?v=1546811942"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/736x/f5/f4/03/f5f4036caf29e46acceb7efe74636e8a.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://static.topvintage.net/shop-product/68788-4308-ClaudiaDress-BluWht-1W-full.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://th.bing.com/th/id/OIP.6oxlspPIT2cym6rTapkFVwHaJh?rs=1&pid=ImgDetMain"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://th.bing.com/th/id/R.c237a75979cbe81599fb644287003a01?rik=otvFOHLSUrLptg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-jgliFn_tEa0%2fTy6GO85_ncI%2fAAAAAAAAAYI%2f2pGkpduwgcQ%2fs1600%2fvintage-party-dress-1.jpg&ehk=SasEbfbbsLyUmlX7zq2SgnSmAwjnP32Dc5V1SlppMXw%3d&risl=&pid=ImgRaw&r=0"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 4 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://th.bing.com/th/id/R.1f263014d91ab87711edb2201dbc6041?rik=sxGMpplo%2bdu2QA&riu=http%3a%2f%2fwww.ivnis.com%2fmedia%2fcatalog%2fproduct%2fcache%2f1%2fimage%2f1800x%2f040ec09b1e35df139433887a97daa66f%2f4%2f_%2f4.jpg&ehk=SdiZaDnIMPG%2b94p20scFRyqRFHbFo0u1EBr3dgmxF7o%3d&risl=&pid=ImgRaw&r=0"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://britishretro.co.uk/wp-content/uploads/2019/09/50s-black-pencil-dress.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://static.topvintage.net/shop-product/16810-39bf1933e4136432741d4ebd7fd76090-full.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://m.media-amazon.com/images/I/81gL9VVx6wL._AC_UL1500_.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 4 */}
          <div className="col-md-3">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://ae01.alicdn.com/kf/HTB1dpB5XBjTBKNjSZFuq6z0HFXa1/1950-Vintage-Dresses-For-Women-Fashion-Ladies-Cape-Collar-Retro-Rockabilly-Swing-Dress-Classy-Midi-Cocktail.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-style me-4">
                  <HeartOutlined className="icon-style" />
                </button>
                <button type="button" className="btn btn-style">
                  <ShoppingCartOutlined className="icon-style" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default vintage;
