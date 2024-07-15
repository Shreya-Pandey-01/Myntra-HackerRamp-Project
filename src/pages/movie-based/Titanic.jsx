import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Titanic.css";

function Titanic() {
  return (
    <>
      <div className="title-movie">
        <h1 className="mt-5 mb-4 ">Titanic - Collection</h1>
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
                  src="https://i.pinimg.com/236x/eb/f9/cd/ebf9cdd277a4a44550b56dc667110b00.jpg"
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
                  src="https://i.pinimg.com/236x/9f/b9/a1/9fb9a1a7e341f1b945d5036e4a72a8a6.jpg"
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
                  src="https://i.pinimg.com/236x/57/c7/7b/57c77b0d65c7339834a3fe9872d340cd.jpg"
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
                  src="https://i.pinimg.com/236x/37/4f/09/374f0913c57d6e9bdbfa44bc5e94df9d.jpg"
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
                  src="https://i.pinimg.com/236x/cb/24/da/cb24da985c6600e0e753f01351965ab1.jpg"
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
                  src="https://i.pinimg.com/236x/8e/d6/c2/8ed6c266ab527b3744b402e6f6e4cbb9.jpg"
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
                  src="https://i.pinimg.com/564x/0b/54/e5/0b54e578ec8c5bb82e72e712ddbfce16.jpg"
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
                  src="https://i.pinimg.com/236x/6b/d9/0e/6bd90e5ed31ec699724e56f306192482.jpg"
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
                  src="https://i.pinimg.com/236x/e3/8f/6d/e38f6d635af4a4c3f9c9e0a92081ef9b.jpg"
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
                  src="https://i.pinimg.com/236x/c6/e3/3c/c6e33c5bcc7138f0d23113e4e8236135.jpg"
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
                  src="https://i.pinimg.com/236x/cf/ba/bb/cfbabbd949b25503837db72611577eab.jpg"
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
                  src="https://i.pinimg.com/236x/14/6e/35/146e351285f2da4c650319ae4d1b7897.jpg"
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

export default Titanic;
