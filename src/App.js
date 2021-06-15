import './style.css';

function App() {
  return (
    <div className="wrapper">
      <h1>This is heading 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta, ex dolorem accusantium, in veniam laborum
        qui ratione consequatur, doloremque minima explicabo optio! Asperiores quos hic numquam, cum id doloribus!</p>

        <form action="./submit/">
          <input placeholder="email" type="email"/>
          <br/>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;