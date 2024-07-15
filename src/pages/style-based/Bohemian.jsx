import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Bohemian.css";

function bohemian() {
  return (
    <>
      <div className="title-style">
        <h1 className="mt-5 mb-4 ">Bohemian - Collection</h1>
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
                  src="https://i.pinimg.com/originals/67/03/41/6703410ab03550e5062636b1981f23f0.jpg"
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
                  src="https://th.bing.com/th/id/R.2d7f35903ea67228b7b0684df145e998?rik=7F%2bowG2gJQBDtQ&riu=http%3a%2f%2fwww.designerzcentral.com%2fwp-content%2fuploads%2f2017%2f07%2fBoho-Dresses-9.jpg&ehk=3LoE4hRBRsGoqUZJyeqneCU%2bmEu8VEGevCANW8PZsng%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://i.pinimg.com/originals/50/70/28/507028f3d1bb510c482a8216b7aa261e.jpg"
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
                  src="https://stopdropandvogue.com/wp-content/uploads/2019/02/Bohemian-Dress-Free-People-Boho-Maxi-Fort-Vancouver-National-Historic-Site-Washington-11-1440x2160.jpg"
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
                  src="https://th.bing.com/th/id/R.75ad682ab531f6271e8e92ea11d619ad?rik=P1Qr%2bsM6GFy9ww&riu=http%3a%2f%2fimage26.stylesimo.com%2fo_img%2f2016%2f01%2f01%2f223134-10288696%2fwomen-s-bohemian-halter-backless-floral-printed-split-maxi-dress.jpg&ehk=BkIyDtvvBgIQLCTiXFnhCNzZOJt9OrhF3nS1DZrdrto%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2016/05/14/source-img/20160514103336_64129.jpg"
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
                  src="https://th.bing.com/th/id/R.a49828b4221cd7d2fe6ef0a12c815ce9?rik=XSXWrSQ5IFUsdA&riu=http%3a%2f%2ffashiongum.com%2fwp-content%2fuploads%2f2015%2f05%2fBoho-Bohemian-Chic-Wedding-Dresses-For-Summer-2015-1.jpg&ehk=pvqtT14etQ%2beUd8ipgk9X3Ssn2p7MUWTQ4O2s8fTweI%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://th.bing.com/th/id/OIP.nJg8SDpn5EcFiWGrdHv57QHaOd?rs=1&pid=ImgDetMain"
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
                  src="https://th.bing.com/th/id/OIP.DWf8hF7wFGPxfdAxVXaVPgHaJ4?rs=1&pid=ImgDetMain"
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
                  src="https://th.bing.com/th/id/OIP.PG5kUIc4jazH4tqdm2adFwHaLs?rs=1&pid=ImgDetMain"
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
                  src="https://i.pinimg.com/originals/2f/40/6e/2f406ee40525c3a8d87a5bc3db9ab2e6.jpg"
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
                  src="https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2017/05/18/source-img/20170518113631_33536.jpg"
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

export default bohemian;
