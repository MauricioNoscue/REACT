import React from 'React'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const rott = createRoot(document.getElementById('root'))

rott.render(
  <App/>
)



