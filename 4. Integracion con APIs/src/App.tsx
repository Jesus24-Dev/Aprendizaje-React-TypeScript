import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BreedDetail from './pages/BreedDetail';

function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/breed/:id' element={<BreedDetail />}/>
      </Routes>
    </QueryClientProvider>
  )
}


export default App
