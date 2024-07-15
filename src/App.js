import {Navbar } from './components/index.js';
import {Modal,SimilarProductsContainer} from './containers/index.js';
import {HomePage , ProductPage} from './pages/index.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import {Page404} from './components/index.js';

import StyleBasedCollection from './pages/StyleBasedCollection';
import MovieBasedCollection from './pages/MovieBasedCollection' ;
import 'bootstrap/dist/css/bootstrap.min.css';

// Style-based
import Bohemian from './pages/style-based/Bohemian';
import Edgy from './pages/style-based/Edgy';
import Casual from './pages/style-based/Casual';
import Formal from './pages/style-based/Formal';
import Gothic from './pages/style-based/Gothic';
import Romantic from './pages/style-based/Romantic';
import Vintage from './pages/style-based/Vintage';
import Streetwear from './pages/style-based/Streetwear';
import Sexy from './pages/style-based/Sexy';

//movie-based
import LaLaLand from './pages/movie-based/LaLaLand';
import Clueless from './pages/movie-based/Clueless';
import F500DaysOfSummer from './pages/movie-based/F500DaysOfSummer';
import TheDevilWearsPrada from './pages/movie-based/TheDevilWearsPrada';
import EmilyInParis from './pages/movie-based/EmilyInParis';
import Titanic from './pages/movie-based/Titanic';
import WallStreet from './pages/movie-based/WallStreet';
import MeanGirls from './pages/movie-based/MeanGirls';
import Atonement from './pages/movie-based/Atonement';

import More from './pages/More.js';
import ChatBot from './pages/Chatbot.js'

import SocialLookBook from '../src/components/SocialLookBook'
import StyleFeed from '../src/components/StyleFeed';
import SocialChallenges from '../src/components/SocialChallenges'


function App() {
  
  const { modals , similarProducts } = useSelector(state => ({
      modals : state.modalsStore,
      similarProducts : state.similarProductsStore
  }));

  return (
    <div className="App" >
      <BrowserRouter>
        {similarProducts.isActive && <SimilarProductsContainer/>}
        {modals.isActive && <Modal/>}
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/:productID" element={<ProductPage/>} />
          <Route path="*" element={<Page404/>} />
          <Route path="/style-based-collection" element={<StyleBasedCollection />}/>
          <Route path="/movie-based-collection" element={<MovieBasedCollection />}/>

          <Route exact path="/More" element={<More />} />
          <Route exact path="/FashionAI" element={< ChatBot />} />

          <Route exact path="/style-based-collection/bohemain" element={<Bohemian />}/>
          <Route exact path="/style-based-collection/edgy" element={<Edgy />}/>
          <Route exact path="/style-based-collection/sexy" element={<Sexy />}/>
          <Route exact path="/style-based-collection/vintage" element={<Vintage />}/>
          <Route exact path="/style-based-collection/romantic" element={<Romantic />}/>
          <Route exact path="/style-based-collection/gothic" element={<Gothic />}/>
          <Route exact path="/style-based-collection/casual" element={<Casual />}/>
          <Route exact path="/style-based-collection/formal" element={<Formal />}/>
          <Route exact path="/style-based-collection/streetwear" element={<Streetwear />}/>

          <Route exact path="/movie-based-collection/la-la-land" element={<LaLaLand />}/>
          <Route exact path="/movie-based-collection/clueless" element={<Clueless />}/>
          <Route exact path="/movie-based-collection/500-days-of-summer" element={<F500DaysOfSummer />}/>
          <Route exact path="/movie-based-collection/the-devil-wears-prada" element={<TheDevilWearsPrada />}/>
          <Route exact path="/movie-based-collection/emily-in-paris" element={<EmilyInParis />}/>
          <Route exact path="/movie-based-collection/titanic" element={<Titanic />}/>
          <Route exact path="/movie-based-collection/wall-street" element={<WallStreet />}/>
          <Route exact path="/movie-based-collection/mean-girls" element={<MeanGirls />}/>
          <Route exact path="/movie-based-collection/atonement" element={<Atonement />}/>

          <Route exact path="/social-look" element={<SocialLookBook/>}/>
          <Route exact path="/social-challenges" element={<SocialChallenges/>}/>
          <Route exact path="/style-feed" element={<StyleFeed/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
