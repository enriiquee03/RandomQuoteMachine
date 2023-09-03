
import './App.css';
import Counter from './components/container/wrapper';
import useColorStore from './colorStore';

function App() {

  const lcolor =  useColorStore((state) =>state.color)
  return (
    <div className="App grid h-screen place-items-center" style={{backgroundColor : lcolor}}>
      <Counter/>
    </div>
  );
}

export default App;
