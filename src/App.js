import { Fragment } from 'react';
import Header from './Components/Layout/Header/Header';
import Effect from './Components/UI/BackgroundEffect/Effect';
import Input from './Components/UI/Form/Input';
import './App.css';
import Footer from './Components/Layout/Footer/Footer';


function App() {
  return (
      <Fragment>
        {/* The Header Component with Wobot Logo */}
        <Header />
        {/* The Background Effect Component */}
        <Effect />
        {/* The Form Input Component */}
        <Input />
        {/* The Footer Component */}
        <Footer />
      </Fragment>
  );
}

export default App;
