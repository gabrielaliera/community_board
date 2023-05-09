import './App.css';
import Card from './components/Card';
import Eureka from './assets/eureka.jpg'
import Creme from './assets/creme.jpg'
import Bardot from './assets/bardot.jpg'
import Madrid from './assets/madrid.jpg'
import Quarter from './assets/quarter.jpg'

const App = () => {

  const data = [
    {"name":"Eureka", "cuisine": "Burgers", "href": "https://eurekarestaurantgroup.com/locations/claremont", "img":Eureka},
    {"name":"Creme Bakery", "cuisine": "French", "href": "http://bakerycreme.com/", "img": Creme},
    {"name":"Bardot", "cuisine": "California", "href": "https://bardotrestaurant.com/about/", "img": Bardot},
    {"name":"Viva Marid", "cuisine": "Spanish", "href": "http://www.vivamadrid.com/", "img": Madrid},
    {"name":"The Quarter Creole Cuisine", "cuisine": "Creole", "href": "https://www.thequartercreole.com/contact-us", "img": Quarter},
    {"name":"Ling's Sweet Mini Cakes", "cuisine": "Chinese", "href": "https://canalstreet.market/", "img": "https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg"},
    {"name":"Uncle Gussy's", "cuisine": "Greek", "href": "https://unclegussys.com/menus/", "img": "https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg"},
    {"name":"Patacon Pisao", "cuisine": "Venezuelan", "href": "https://www.pataconpisaonyc.com/menus/", "img": "https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg"},
    {"name":"Mom's Mono", "cuisine": "Tibetan", "href": "https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/", "img": "https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png"},
    {"name":"Makina Cafe", "cuisine": "Ethiopian", "href": "https://makinacafenyc.com/", "img": "https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg"},

 ]

  return (
    <div className="App">
      <h1>Claremont's Favorites</h1>
      <div className='container'>
        <Card name={data[0].name} cuisine={data[0].cuisine} href={data[0].href} img={data[0].img} />
        <Card name={data[1].name} cuisine={data[1].cuisine} href={data[1].href} img={data[1].img} />
        <Card name={data[2].name} cuisine={data[2].cuisine} href={data[2].href} img={data[2].img} />
        <Card name={data[3].name} cuisine={data[3].cuisine} href={data[3].href} img={data[3].img} />
        <Card name={data[4].name} cuisine={data[4].cuisine} href={data[4].href} img={data[4].img} />
        <Card name={data[5].name} cuisine={data[5].cuisine} href={data[5].href} img={data[5].img} />
        <Card name={data[6].name} cuisine={data[6].cuisine} href={data[6].href} img={data[6].img} />
        <Card name={data[7].name} cuisine={data[7].cuisine} href={data[7].href} img={data[7].img} />
        <Card name={data[8].name} cuisine={data[8].cuisine} href={data[8].href} img={data[8].img} />
        <Card name={data[9].name} cuisine={data[9].cuisine} href={data[9].href} img={data[9].img} />
      </div>
    </div>
  )
}

export default App