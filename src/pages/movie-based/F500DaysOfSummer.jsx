import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./F500DaysOfSummer.css";

function F500DaysOfSummer() {
  return (
    <>
      <div className="title-movie">
        <h1 className="mt-5 mb-4 ">500 Days Of Summer - Collection</h1>
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
                  src="https://m.media-amazon.com/images/M/MV5BMTYyMjgxMDk0N15BMl5BanBnXkFtZTcwNTY4NDE4Mg@@._V1_.jpghttps://cdn.cliqueinc.com/posts/289620/emily-in-paris-fashion-289620-1602758636249-image.700x0c.jpg"
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
                  src="https://th.bing.com/th/id/R.62e3620e4690a0c6b6f28ac006e4db19?rik=Qcu6f0FVksmQUQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-gL1TNhY0NQs%2fUHuylveSGlI%2fAAAAAAAAAeY%2fa7TDrWGzL1g%2fs1600%2fzooey-2.jpg&ehk=GBXCR9JGUE7vuKIzzKRunuQotJ31dYcD4CkwTxhrNT0%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://s-media-cache-ak0.pinimg.com/736x/f2/4d/fb/f24dfb7870e81d53aad072e07ba166d4.jpg"
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
                  src="https://wallpapercrafter.com/desktop/412510-Movie-500-Days-Of-Summer-Phone-Wallpaper.jpg"
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
                  src="https://i.pinimg.com/originals/47/42/8a/47428ac09375392f851de83d47094af6.jpg"
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
                  src="https://i.pinimg.com/564x/f7/2d/dd/f72ddd0111e2fcdbd9a9d733c5a6238d.jpg"
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
                  src="https://i.pinimg.com/736x/6e/11/6c/6e116c4aa232fcc4eddb3f871ef46314.jpg"
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
                  src="https://i.pinimg.com/564x/7a/90/f6/7a90f69c463f6850e1517009a2832773.jpg"
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
                  src="https://i.pinimg.com/564x/8f/13/6a/8f136ac701b48fe38c3ed47ac9d359ad.jpg"
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
                  src="https://i.pinimg.com/564x/b4/8b/7c/b48b7c03bf95bfa1ce4706014245ed72.jpg"
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
                  src="https://i.pinimg.com/564x/e8/53/35/e85335a513f0ee5229408b3098b57bda.jpg"
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
                  src="https://i.pinimg.com/564x/4b/00/8b/4b008b0600a9d3f0b2102532cffc0421.jpg"
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

export default F500DaysOfSummer;
