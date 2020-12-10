import logo from './logo.svg';
import './App.css';
import { PlantProvider } from './Plants/PlantProvider';
import { PlantList } from './Plants/PlantList';
import { PlotProvider } from './Plots/PlotProvider';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Dig-It!</h1>
      <h4>Plants</h4>
      <PlantProvider>
        <PlotProvider>
        <PlantList />

        </PlotProvider>
      </PlantProvider>
     
    </div>
  );
}

export default App;
