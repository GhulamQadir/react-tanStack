import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShowData from './components/Card/UserCard';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './config/router';



const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
