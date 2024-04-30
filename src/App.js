import Footer from './Footer';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import { Route , Routes} from 'react-router-dom';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';

function App() {
 

  return (
    <div className="App">
      <DataProvider>
        <Header title = "Demo Social Media"/>
        <Nav />
        <Routes>
        <Route path="/" element= {<Home/> } />
        <Route path="post" element = {<NewPost />} />  
        <Route path="/post/:id" element = {<PostPage /> } />
        <Route path="/edit/:id" element = {<EditPost/>}/>
        <Route path="about" element = {<About />} />
        <Route path = "*" element= {<Missing /> } />
        </Routes>
        
        <Footer /> 
      </DataProvider>
    </div>
  );
}

export default App;
