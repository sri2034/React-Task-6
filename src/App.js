import './App.css';
import 'bootstrap/dist/js/bootstrap';
import './components/css_js/style.css';
import './components/css_js/flaticon.css';
import './components/css_js/animate.css';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Blog from './components/blog';
import Contact from './components/contact';

function App() {
  return (
    <div className="App" data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
