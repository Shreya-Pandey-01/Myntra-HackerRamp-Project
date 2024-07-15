import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./WallStreet.css";

function WallStreet() {
  return (
    <>
      <div className="title-movie">
        <h1 className="mt-5 mb-4 ">The Wolf Of Wall Street - Collection</h1>
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
                  src="https://i.pinimg.com/564x/79/6f/c3/796fc31f557dd8b63a71d43b41d7428d.jpg"
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
                  src="https://i.pinimg.com/236x/e0/12/41/e01241c574f975d1068ee4807f008c06.jpg"
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
                  src="https://i.pinimg.com/236x/26/ed/5a/26ed5a072b4d08b5fb38e56295133bbd.jpg"
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
                  src="https://i.pinimg.com/236x/88/50/e2/8850e20424d3d08aa1cb982226f16667.jpg"
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
                  src="https://i.pinimg.com/236x/17/99/28/179928f87e326a68b81cc323a88f5db8.jpg"
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
                  src="https://th.bing.com/th/id/OIP.NBAuzY-j2V0JjDZliRPrTgHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  src="https://i.pinimg.com/236x/e6/ea/a6/e6eaa60b0bf7b1bfb01da69197fd2e56.jpg"
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
                  src="https://th.bing.com/th/id/OIP.kiFZf_LZoVCI8RjrhPGhkgAAAA?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  src="https://th.bing.com/th/id/OIP.GCZ6SRLILLHN18byB070-AHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                  src="https://i.pinimg.com/originals/ce/fe/ad/cefead77e2c1b367642ef4092e371fa0.jpg"
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
                  src="https://th.bing.com/th/id/OIP.77iB3j_ZJ8j1W652reU9SAHaJI?rs=1&pid=ImgDetMain"
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
                  src="https://images2.alphacoders.com/683/thumb-1920-683357.jpg"
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

export default WallStreet;
