import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Streetwear.css";

function streetwear() {
  return (
    <>
      <div className="title-style">
        <h1 className="mt-5 mb-4 ">Streetwear - Collection</h1>
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
                  src="https://th.bing.com/th/id/OIP.RuqkB6zXA7k2ZgJ6C0qqVgAAAA?rs=1&pid=ImgDetMain"
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
                  src="https://i.pinimg.com/originals/17/29/e5/1729e5da1f32fe1ebd77d613de51bb05.jpg"
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
                  src="https://th.bing.com/th/id/OIP.c6LXKevYMtmEgZjqAoE1TQAAAA?rs=1&pid=ImgDetMain"
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
                  src="https://2.bp.blogspot.com/-wc4Q8GT0FUA/VBciFrE9veI/AAAAAAAAFpc/IfBd0nr8nns/s1600/1891291_685849924818472_4350033287157742633_n.jpg"
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
                  src="https://i.pinimg.com/originals/9b/52/3b/9b523b7e16f41e6d361e62897ce9694d.jpg"
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
                  src="https://i.pinimg.com/originals/72/b7/6f/72b76fe9489f6cd5bd76f2c9b6170313.jpg"
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
                  src="https://i.pinimg.com/originals/bc/8d/56/bc8d56c28ee95c3831856707c3986495.jpg"
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
                  src="https://i.pinimg.com/originals/5b/4f/67/5b4f67e0affa47e005b360d96157c3f2.jpg"
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
                  src="https://i.pinimg.com/originals/53/83/d8/5383d8354a5237a2137d3335b1a1bd33.jpg"
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
                  src="https://i.pinimg.com/736x/9c/a6/51/9ca65178dfcb56759c1c905e9557d477.jpg"
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
                  src="https://i.pinimg.com/originals/ed/ed/99/eded994d1893cdc6b56c6064c3a1638f.jpg"
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
                  src="https://i.pinimg.com/originals/85/be/6f/85be6f0ab87867ab51a5dfe07cb0f465.jpg"
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

export default streetwear;
