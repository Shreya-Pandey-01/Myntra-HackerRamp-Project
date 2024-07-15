import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Atonement.css";

function Atonement() {
  return (
    <>
      <div className="title-movie">
        <h1 className="mt-5 mb-4 ">Atonement - Collection</h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-7 gy-5">
          {/* Column 1 */}
          <div className="col-md-3">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height={300}
                  src="https://i.pinimg.com/236x/38/ea/53/38ea531e12f951d82c0d5469d65fdcdf.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-3">
            <div className="box-movie p-2">
              <div className="img-container">
                <Image
                  width=  {230}
                  height={300}
                  src="https://i.pinimg.com/236x/6a/f8/cf/6af8cf496e5aacced09a6d445c3e0a0a.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/236x/77/86/d8/7786d803c50426bec0398ed7b523c35f.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/236x/d8/18/93/d818931faa6b4726ad51f790da97638e.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/236x/3d/8b/2c/3d8b2c8134060fb2346091e34eed5d85.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/236x/10/0e/c3/100ec335ee6143ef85d05869a23acfb8.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/236x/4c/2b/8c/4c2b8cfaeb6aa4f94886e078a28efc6b.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 4 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/236x/77/38/75/773875da8aae1aab0a0f10e23a52f845.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/236x/08/8c/5c/088c5c03943e402d6a128d4b391b00d4.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/236x/bf/3c/cc/bf3cccb5a6d33df9dda14bd95605d843.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://i.pinimg.com/236x/3b/f0/d8/3bf0d8d94dae4a59d773fe475a2bfb51.jpg"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>
          {/* Column 4 */}
          <div className="col-md-3">
          <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width=  {230}
                  height ={300}
                  src="https://th.bing.com/th/id/OIP.MIHjq4Lw0e6CR8DswQWDEQHaKe?w=495&h=700&rs=1&pid=ImgDetMain"
                />
              </div>
              <div>
                <button type="button" className="btn btn-movie me-4">
                  <HeartOutlined className="icon-movie" />
                </button>
                <button type="button" className="btn btn-movie">
                  <ShoppingCartOutlined className="icon-movie" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Atonement;
