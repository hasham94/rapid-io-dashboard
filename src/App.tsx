import { BrowserRouter } from "react-router-dom";
import DefaultLayout from './layouts/default'
import HomePage from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <DefaultLayout>
          <HomePage />
        </DefaultLayout>
      </BrowserRouter>
    </>
  )
}

export default App
