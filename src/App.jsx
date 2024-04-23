import { Footer } from "./Components/Layouts/Footer/Footer"
import { Header } from "./Components/Layouts/Header/Header"
import { Main } from "./Components/Layouts/Main/Main"
import { News } from "./Components/News/News"
import { NewsTwo } from "./Components/NewsTwo/NewsTwo"
import { Home } from "./Components/Page/Home/Home"


function App() {

  return (
  
    <Home>
      <Header/>
      <Main>
        <News/>
        <NewsTwo/>
      </Main>
      <Footer/>
    </Home>
  )
}

export default App
