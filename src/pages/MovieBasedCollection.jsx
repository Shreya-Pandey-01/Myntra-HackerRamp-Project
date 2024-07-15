import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieBasedCollection.css";
import { Link } from "react-router-dom";
import { Image } from "antd";

const MovieBasedCollection = () => {
  return (
    <>
      <div className="title-movie">
        <h1 className="mt-5 mb-4 ">Movie Based Collection</h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-6 gy-5">
          {/* Column 1 */}
          <div className="col-md-4">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/originals/42/c6/9d/42c69d47ba8ee6a246c10a60d579c42f.png"
                />
              </div>
              <div>
                <Link to="/movie-based-collection/la-la-land">
                  <button type="button" className="btn btn-movie">
                    <h3>
                      <b>La La Land</b>
                    </h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-4">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://resizing.flixster.com/EjpS81EeQamDZMNGo5BxH4B-EiU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMTgyN2FiOWItZDJmYS00MjEwLThmODUtMjRjOTZhNzkxMWNlLmpwZw=="
                />
              </div>
              <div>
                <Link to="/movie-based-collection/emily-in-paris">
                  <button type="button" className="btn btn-movie">
                    <h3>
                      <b>Emily In Paris</b>
                    </h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-4">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://th.bing.com/th/id/OIP.6hiWLY1brczDUi9u9q_L7AHaLH?rs=1&pid=ImgDetMain"
                />
              </div>
              <div>
                <Link to="/movie-based-collection/500-days-of-summer">
                  <button type="button" className="btn btn-movie">
                    <h3>
                      <b>500 Days Of Summer</b>
                    </h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 1 */}
          <div className="col-md-4">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://c8.alamy.com/comp/2MTWXCH/the-devil-wears-prada-year-2006-usa-director-david-frankel-meryl-streep-anne-hathaway-american-poster-2MTWXCH.jpg"
                />
              </div>
              <div>
                <Link to="/movie-based-collection/the-devil-wears-prada">
                  <button type="button" className="btn btn-movie">
                    <h3>
                      <b>The Devil Wears Prada</b>
                    </h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-4">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://i.pinimg.com/originals/cf/e0/5c/cfe05c87d380aee0ce781c11ecb79f88.jpg"
                />
              </div>
              <div>
                <Link to="/movie-based-collection/wall-street">
                  <button type="button" className="btn btn-movie">
                    <h3>
                      <b>The Wolf Of Wall Street</b>
                    </h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-4">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://www.themoviedb.org/t/p/original/nLomwFOhwKYANCBlMtDoqlwkkdc.jpg"
                />
              </div>
              <div>
                <Link to="/movie-based-collection/atonement">
                  <button type="button" className="btn btn-movie">
                    <h3>
                      <b>Atonement</b>
                    </h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div className="col-md-4">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://th.bing.com/th/id/OIP.QYraUxXt55Xuw-1scEyeUwAAAA?rs=1&pid=ImgDetMain"
                />
              </div>
              <div>
                <Link to="/movie-based-collection/mean-girls">
                  <button type="button" className="btn btn-movie">
                    <h3>
                      <b>Mean Girls</b>
                    </h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-4">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://www.themoviedb.org/t/p/original/kHWAsGu23tVSc8DDdgbRsa63C3b.jpg"
                />
              </div>
              <div>
                <Link to="/movie-based-collection/clueless">
                  <button type="button" className="btn btn-movie">
                    <h3>
                      <b>Clueless</b>
                    </h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Column 3 */}
          <div className="col-md-4">
            <div className="box-movie p-2  g-7 gy-5">
              <div className="img-container">
                <Image
                  width={230}
                  height={300}
                  src="https://picfiles.alphacoders.com/140/thumb-1920-140026.jpg"
                />
              </div>
              <div>
                <Link to="/movie-based-collection/titanic">
                  <button type="button" className="btn btn-movie">
                    <h3>
                      <b>Titanic</b>
                    </h3>
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

export default MovieBasedCollection;
