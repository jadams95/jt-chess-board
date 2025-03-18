import Board from './components/Board'
import { createRoot } from 'react-dom/client'

 export default function engineDriver({Board}){
    return (
    <html>
    <head></head>
    <body>
        <main>
            <Board />
        </main>
    </body>
    </html>)
}