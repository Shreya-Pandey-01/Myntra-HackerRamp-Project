import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Edgy.css";

function edgy() {
  return (
    <>
      <div className="title-style">
        <h1 className="mt-5 mb-4 ">Edgy - Collection</h1>
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
                  src="https://th.bing.com/th/id/OIP.azfKWjxB0K12_Kgkk2wNrwHaLH?rs=1&pid=ImgDetMain"
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
                  src="https://th.bing.com/th/id/R.e8c68b91d1558d706e713ac140211293?rik=%2fjlqTlEP530DtQ&riu=http%3a%2f%2fwww.fenzyme.com%2fwp-content%2fuploads%2f2015%2f12%2fEdgy-Fashion-Outfits-5-5.jpg&ehk=zWnNmkB4FzlQih%2bSq%2f2uN0XamV%2bdO7y7yF45k7%2fnbnc%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://i.pinimg.com/originals/49/18/c9/4918c947c2821cedc845da17b44d7029.jpg"
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
                  src="https://i.pinimg.com/originals/37/d7/4a/37d74a3c4bff97fbeb5089cec3d8b1bb.jpg"
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
                  src="https://th.bing.com/th/id/R.20df0c930afa21a6a772d24cc5afa764?rik=W8ME3q2sXxRLYQ&riu=http%3a%2f%2fwww.lovethispic.com%2fuploaded_images%2fblogs%2f36-1425580882-14-3.jpg&ehk=TpglxCvRyJw3CMSt3AUrr%2f24crk02cWYMkFA2V8dF9k%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://i.pinimg.com/originals/c6/03/23/c603231afdfd5019c9f77b8df5bfced2.jpg"
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
                  src="https://th.bing.com/th/id/R.a28b9ed2751d4104ff832daec6d8e7f8?rik=GME7aDaJpoVOZg&riu=http%3a%2f%2finstaloverz.com%2fwp-content%2fuploads%2f2016%2f07%2f1-edgy-womens-fashion.jpg&ehk=B8MjL7k25Mwq5%2fjtXewwB4bZ%2fjzmPvyCP82JocKF4cU%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://th.bing.com/th/id/R.ee62691329ad1d5d7123f0ceb8124c8a?rik=JprnJG3ptk14Dw&riu=http%3a%2f%2fwww.instaloverz.com%2fwp-content%2fuploads%2f2016%2f07%2f29-edgy-womens-fashion.jpg&ehk=M%2fRaV9TyljYj5fZVaIbzQwVOQZ%2f%2fk2mzOVWcSThbK%2fQ%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://th.bing.com/th/id/R.eb442a80b368767af32fc713af2ff5c5?rik=c7Qnjc%2bp4ZJanQ&riu=http%3a%2f%2finstaloverz.com%2fwp-content%2fuploads%2f2016%2f07%2f8-edgy-womens-fashion.jpg&ehk=oMFrWRxXTVsBt6aijZGoQGZY63JHVapMtaM7BumxPdA%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://www.instaloverz.com/wp-content/uploads/2016/07/16-edgy-womens-fashion.jpg"
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
                  src="https://th.bing.com/th/id/R.b4184edcf3e3d334fe67fd096fbc6706?rik=xu29J16yErQsgg&riu=http%3a%2f%2ffashioncorner.net%2fwp-content%2fuploads%2f2016%2f11%2f1-Embrace-the-Edgy-Look-9-Must-Have-Wardrobe-Essentials-fashioncorner.jpg&ehk=aK9uejZ5Eqh7718dEnLW1Pg2uc1tt0wnxfzFRR9i4zA%3d&risl=&pid=ImgRaw&r=0"
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
                  src="https://th.bing.com/th/id/R.73c32ba221ad6a30f0da688cf613a07c?rik=U8MYxn1lECA56w&riu=http%3a%2f%2ffashioncorner.net%2fwp-content%2fuploads%2f2016%2f11%2f11-Embrace-the-Edgy-Look-9-Must-Have-Wardrobe-Essentials-fashioncorner.jpg&ehk=vfShiWtulIJ%2fP7Rgxg2yjG%2f42ZQQeYoVvCR3AGJarDU%3d&risl=&pid=ImgRaw&r=0"
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

export default edgy;
