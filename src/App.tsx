import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Label } from './components/Label'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Label />
    </QueryClientProvider>
  )
}

export default App
