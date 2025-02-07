```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>} >
          <Route path=':id' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div> }
function About() { return <div>About</div> }

function ContactLayout(){
  return(
    <div>Contact Layout</div>
  )
}

function Contact() {
  let {id} = useParams();
  return (
    <div>Contact {id}</div>
  );
}
export default App;
```