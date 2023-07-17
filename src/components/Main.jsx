import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Main(){
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    )
}