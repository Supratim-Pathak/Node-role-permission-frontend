import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './Router';
import './App.css'
const route = createBrowserRouter(routes)

function App() {
  return (
    <>
      <RouterProvider router={route}/>
    </>
  );
}

export default App;
