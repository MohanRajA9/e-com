import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ProductList } from './components/ProductList.js';
import { Home } from './components/Home.js';
import { ProductDetailPage } from './components/ProductDetailPage.js';
import { AddProduct } from './components/AddProduct.js';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { dark } from '@mui/material/styles/createPalette.js';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { EditProdut } from './components/EditProdut.js';
import Signup from './components/Signup.js';


export const INITIAL_PRODUCT_LIST = [
  {
    "name": "Motivational Poster Frame",
    "poster": "https://m.media-amazon.com/images/I/71kb+LvPEsL._SX425_.jpg",
    "price": "₹874",
    "summary": "For Home & Office Decor: An Aesthetic Wall Decorations Paintings For Living Room, Bedroom, Kitchen, Office, Hotel, Restaurant, Dining Area, Kids Room, Bathroom, Bar, Gym, etc. A Great Gift For Art Lovers, Decorators, Interior Designers, Family, Friends And More",
    "ratings": 4
  },
  {
    "name": "Apple iPhone 15 Pro Max (256 GB)",
    "poster": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "price": "₹1,56,990",
    "summary": "FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
    "ratings": 3.9,
    "trailer": "https://www.youtube.com/embed/xqyUdNxWazA"
  },
  {
    "name": "Apple 2022 MacBook Pro Laptop with M2 chip",
    "poster": "https://m.media-amazon.com/images/I/71WtFY52CeL._SX679_.jpg",
    "price": "₹1,40,990",
    "summary": "SUPERCHARGED BY M2 – The 13-inch MacBook Pro laptop is a portable powerhouse. Get more done faster with a next-generation 8-core CPU, 10-core GPU and up to 24GB of unified memory.",
    "ratings": 4.9,
    "trailer": "https://www.youtube.com/embed/0pg_Y41waaE"
  },
  {
    "name": " iPhone 15 (128 GB)",
    "poster": "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    "price": "₹77,900 ",
    "ratings": 3,
    "summary": "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more."
  },
  {
    "name": "iPhone 15 Pro (128 GB) ",
    "poster": "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    "price": "₹1,34,900 ",
    "ratings": 3.5,
    "summary": " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant."
  },
  {
    "name": "Samsung Galaxy S23 5G (256GB Storage) ",
    "poster": "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    "price": "₹65,320",
    "ratings": 4.7,
    "summary": "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever."
  },
  {
    "name": "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
    "poster": "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    "price": "₹1,00,000",
    "ratings": 5.0,
    "summary": "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice.",
    "trailer": "https://www.youtube.com/embed/BSYsXVFzmKA"
  },
  {
    "name": "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
    "poster": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    "price": "₹20,999 ",
    "ratings": 4.8,
    "summary": "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you."
  },
  {
    "name": " Apple Watch Series 9 [GPS + Cellular 41mm] ",
    "poster": "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    "price": "₹75,900 ",
    "ratings": 4.9,
    "summary": "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
  },
  {
    "name": " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
    "poster": "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
    "price": "₹22,999",
    "ratings": 4.5,
    "summary": "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress."
  },
  {
    "name": "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
    "poster": "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
    "price": "₹27,141",
    "ratings": 4.3,
    "summary": "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you"
  },
  {
    "name": "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    "poster": "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    "price": "₹84,990",
    "ratings": 5.0,
    "summary": "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power."
  },
  {
    "name": "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
    "poster": "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
    "price": "₹1,10,790",
    "ratings": 4.9,
    "summary": " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
  }
]

function App() {

  // const [productList, setProductList] = useState([])
  const [mode, setMode] = useState("light")
  // console.log(productList)
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  console.log(token)
  // useEffect(() => {
  //   fetch("https://660cf69d3a0766e85dbf0f53.mockapi.io/products")
  //     .then((res) => res.json())
  //     .then((data) => setProductList(data))
  // }, [])

  //1.creating - createcontext
  //2.publisher - provider - context.provider
  //3.subscriber - usecontext - useContext(context)

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user_data")
    navigate("/")
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" >
            <Toolbar>
              {!token ? <div><Button color="inherit" onClick={() => navigate("/")} >Home</Button></div> : null}

              {token ? <div>
                <Button color="inherit" onClick={() => navigate("/products")}>Products</Button>
                <Button color="inherit" onClick={() => navigate("/products/add")} sx={{ flexGrow: 1 }} >Add Products</Button>
                <Button color="inherit" endIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}  >
                  {mode === "light" ? "dark" : "light"} mode</Button>

              </div> : null}
              <Typography sx={{ flexGrow: 1 }} ></Typography>
              {token ? <div><Button color="inherit" onClick={logout} >Logout</Button></div> : null}
            </Toolbar>
          </AppBar>


        </Box>

        {/* <nav>
        <ul>
          <li><Link to = "/" >Home</Link></li>
          <li><Link to = "/products" >products</Link></li>
          <li><Link to = "/products/add" >Add Product</Link></li>
          
          <li><Link to = "color-game" >Add color</Link></li>
          <li><Link to = "/superHero" >Super Heros</Link></li>
          </ul> 
      </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/product/:productid" element={<ProductDetailPage />} />
          <Route path="/products/edit/:productid" element={<EditProdut />} />

          {/* <Route path="/tic-tac-toe" element={<TicTacToe />} /> */}
          {/* <Route path="/context" element={<ExampleContext />} /> */}
          {/* <Route path="/class" element={<LifeCycleA />} /> */}
          {/* <Route path="/form" element={<BasicForm />} /> */}
          {/* <Route path="/color-game" element={<AddColor />} /> */}

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;


