import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Romantic.css";

function romantic() {
  return (
    <>
      <div className="title-style">
        <h1 className="mt-5 mb-4 ">Romantic - Collection</h1>
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
                  src="https://i.etsystatic.com/27852593/r/il/dca493/4207267494/il_1588xN.4207267494_4lb0.jpg"
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
                  src="https://1.bp.blogspot.com/-6XvGQ3dhJd8/Xhp5ft_-PSI/AAAAAAAADHw/q4c36iKFgv8hN4iA6jRt6makgFiHtIyOwCLcBGAsYHQ/s1600/d46.jpg"
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
                  src="https://i.pinimg.com/originals/7c/ac/10/7cac10ba47a5bd7d71eff8f9bcc63d6d.jpg"
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
                  src="https://i.pinimg.com/originals/41/77/ce/4177cec1d939ee7e058a62ab888d1907.jpg"
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
                  src="https://2.bp.blogspot.com/-iOsgA9Gq2DI/WKLNjWS91GI/AAAAAAAAB60/RZhVSYZMPqUci-qjqUWWlsSYs8A2ciC5QCLcB/s1600/5.jpg"
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
                  src="https://1.bp.blogspot.com/-S1-Dih8uGIw/XKdcUlWzA5I/AAAAAAAH2sg/-xjCkNVKRFg4EisHA_IQdAvU7O7KJBUugCLcBGAs/s1600/telmadiniz__1551807886.jpg"
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
                  src="https://i.pinimg.com/originals/66/86/4d/66864d7e59c0b921e46e57f0f206ce58.png"
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
                  src="https://yourclassylook.com/wp-content/uploads/2022/06/IMG_4890.jpg"
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
                  src="https://i.pinimg.com/736x/f1/22/2b/f1222b9a2b9e902e9b9a71d4351759ac.jpg"
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
                  src="https://i.pinimg.com/originals/70/07/73/7007735568dc9c6090e9336a0534cab8.jpg"
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
                  src="https://th.bing.com/th/id/OIP.9CsWScHUQEwzQfRBpGYqogAAAA?rs=1&pid=ImgDetMain"
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

export default romantic;
