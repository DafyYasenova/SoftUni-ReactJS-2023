import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './components/UserList'

function App() {
  
  return (
    <>
 <Header />
 <main class="main">

<UserList />
 </main>
 <Footer />
    </>
  )
}

export default App
