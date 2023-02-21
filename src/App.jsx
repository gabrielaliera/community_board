import './App.css';
import Card from './components/Card';

const App = () => {

  return (
    <div className="App">
      <h1>Food Truck Favorites</h1>
      <Card event='Birra-Landia' foodType ="Mexica"/>
      <Card event = "Mysttik Masala" foodType="Indian"/>
      <Card event = "The Halal Guys" foodType= "Middle Eastern"/>
    </div>
  )
}

export default App