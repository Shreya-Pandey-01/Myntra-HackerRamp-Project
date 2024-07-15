import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StyleBasedCollection.css'; 
import { Link } from 'react-router-dom';
import { Image } from "antd";


const StyleBasedCollection = () => {
  return (
    <>
      <div className='title-style'><h1 className="mt-5 mb-4 ">Style Based Collection</h1></div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-6 gy-5">
          {/* Column 1 */}
          <div className="col-md-4">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/236x/b6/c1/7b/b6c17bbc1e48f9ccc5e48896e4942124.jpg"
                />
              </div>
            <div>
                <Link to = "/style-based-collection/bohemain">
                    <button type="button" className="btn btn-style">
                        <h3><b>Bohemian</b></h3>
                    </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-4">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/236x/d6/1f/e5/d61fe5976039647ad06734c9934fca29.jpg"
                />
              </div>
              <div>
              <Link to = "/style-based-collection/edgy">
                    <button type="button" className="btn btn-style">
                        <h3><b>Edgy</b></h3>
                    </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-4">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/236x/bc/d7/d9/bcd7d9a65cfa0014cf652edd752cfa91.jpg"
                />
              </div>
              <div>
                <Link to = "/style-based-collection/sexy">
                    <button type="button" className="btn btn-style">
                        <h3><b>Sexy</b></h3>
                    </button>
                </Link>
               </div>
            </div>
          </div>

          {/* Column 1 */}
          <div className="col-md-4">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/236x/16/3b/30/163b30c76587031fd4dc47cb10c5d613.jpg"
                />
              </div>
              <div>
                <Link to = "/style-based-collection/vintage">
                    <button type="button" className="btn btn-style">
                        <h3><b>Vintage</b></h3>
                    </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-4">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/236x/e6/a3/ae/e6a3ae4976a058c9c2176e5e2e0cd74d.jpg"
                />
              </div>
              <div>
                <Link to = "/style-based-collection/romantic">
                    <button type="button" className="btn btn-style">
                        <h3><b>Romantic</b></h3>
                    </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-4">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/236x/1a/a3/4f/1aa34ff0d4ecf1e5c5aa2954a491ff1a.jpg"
                />
              </div>
              <div>
                <Link to = "/style-based-collection/gothic">
                    <button type="button" className="btn btn-style">
                        <h3><b>Gothic</b></h3>
                    </button>
                </Link>
              </div>
            </div>
          </div>

            {/* Column 1 */}
          <div className="col-md-4">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/236x/c6/ed/20/c6ed20ae5f3555e7c30c430835e966a2.jpg"
                />
              </div>
              <div>
                <Link to = "/style-based-collection/casual">
                    <button type="button" className="btn btn-style">
                        <h3><b>Casual</b></h3>
                    </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-4">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/236x/8a/85/bd/8a85bd953289e2e2d0e3bf27950c02b2.jpg"
                />
              </div>
              <div>
                <Link to = "/style-based-collection/formal">
                    <button type="button" className="btn btn-style">
                        <h3><b>Formal</b></h3>
                    </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-4">
          <div className="box-style p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/236x/a2/6a/a4/a26aa4c24c08f16d6b21411a03e8ce37.jpg"
                />
              </div>
              <div>
                <Link to = "/style-based-collection/streetwear">
                    <button type="button" className="btn btn-style">
                        <h3><b>Streetwear</b></h3>
                    </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default StyleBasedCollection;
