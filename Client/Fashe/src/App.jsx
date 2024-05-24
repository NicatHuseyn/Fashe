
import './App.css'
import ClientLayout from './Pages'
import { Helmet } from "react-helmet";

function App() {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="" />
      </Helmet>
      <ClientLayout />
    </>
  )
}

export default App
