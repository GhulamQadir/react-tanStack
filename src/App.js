import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShowData from './components/card/card';


const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowData />
    </QueryClientProvider>
  );
}

export default App;
