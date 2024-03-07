import { Routes,Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { DownloadPage } from "./pages/Downloads";
import { Container } from "./AppStyle";
import { Header } from "./Components/Header";

const App = () => {
   

  return (
    <Container>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/downloads" element={<DownloadPage/>} />
        </Routes>
    </Container>
  )
}

export default App
