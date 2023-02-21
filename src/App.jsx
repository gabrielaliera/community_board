import './App.css';
import Card from './components/Card';
import Eureka from './assets/eureka.jpg'
import Creme from './assets/creme.jpg'
import Bardot from './assets/bardot.jpg'

const App = () => {

  const data = [
    {"name":"Eureka", "cuisine": "Burgers", "href": "https://thebirrialandia.com/menu/", "img":Eureka},
    {"name":"Creme Bakery", "cuisine": "French", "href": "https://indianfoodny.com/", "img": Creme},
    {"name":"Bardot", "cuisine": "California", "href": "https://thehalalguys.com/menu/", "img": Bardot},
 ]

  return (
    <div className="App">
      <h1>Claremont Restaurant Favorites</h1>
      <Card name={data[0].name} cuisine ={data[0].cuisine} img={data[0].img}/>
      <Card name={data[1].name} cuisine ={data[1].cuisine} img={data[1].img}/>
      <Card name={data[2].name} cuisine ={data[2].cuisine} img={data[2].img}/>
    </div>
  )
}

export default App