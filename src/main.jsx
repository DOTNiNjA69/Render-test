import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'

const root=createRoot(document.getElementById('root'))
  root.render(
    <App/>
  )

