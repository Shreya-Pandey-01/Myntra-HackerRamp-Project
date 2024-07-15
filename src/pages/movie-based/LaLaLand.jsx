import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./LaLaLand.css";

function LaLaLand() {
  return (
    <>
      <div className="title-movie">
        <h1 className="mt-5 mb-4 ">La La Land - Collection</h1>
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
                  src="https://www.gotceleb.com/wp-content/uploads/photos/emma-stone/filming-la-la-land-in-la/Emma-Stone-in-Yellow-Dress-on-La-La-Land-set--15.jpg"
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
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmmYLIQ9WOTIlevG-gxNUJ_Ujm5XXMei-fGlzFxHZxkUVTiU_pJWXWJ4RdgHVmcHg8_9bVoocdojA12iGEes31OkGGjD04lvMsVpHlQWtkiKEAaTPLt-IeuLc1XSWX0B8JNxtcNhFUPBw/s1600/la_la_land_-_sketch_1_-_embed+copia.jpg"
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
                  src="https://www.thecelebritydresses.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/e/m/emma_stone_green_cap_sleeves_short_dress_in_movie_la_la_land_mia_1__2.jpg"
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
                  src="https://i.pinimg.com/originals/22/79/8d/22798d2ca05a37bb2d4c2273a89b7757.jpg"
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
                  src="https://th.bing.com/th/id/OIP.Jh2PsDwu9c5vQiAhBw6cgAHaJw?w=607&h=800&rs=1&pid=ImgDetMain"
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
                  src="https://i.pinimg.com/originals/0a/7c/7a/0a7c7a7983aba381d2ad0cf53f9d24b4.jpg"
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
                  src="https://celebmafia.com/wp-content/uploads/2015/09/emma-stone-la-la-land-set-pics-pasedena-september-2015_11.jpg"
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
                  src="https://cdn.justjaredjr.com/wp-content/uploads/2015/08/emma-hat/ryan-gosling-hat-tricks-emma-stone-lala-land-filming-john-legend-08.jpg"
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
                  src="https://i.pinimg.com/originals/51/2e/63/512e6392fb336b708c60b9228953f5e4.jpg"
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
                  src="https://i.pinimg.com/originals/cb/1c/e0/cb1ce0e783e440314d5d648e3a6be034.jpg"
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
                  src="https://s3-ap-southeast-1.amazonaws.com/a2.datacaciques.com/17/04/18/831182b9f4gbw5dy/6d6c9684e94ee3c4.jpg"
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
                  src="https://i.pinimg.com/736x/02/bf/ce/02bfcebbd26afce73f5b38e4bd776f24.jpg"
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

export default LaLaLand;
