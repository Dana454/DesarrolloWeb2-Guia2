import { useState } from "react"
import { Footer } from "./components/Footer"
import { Guitar } from "./components/Guitar"
import { Header } from "./components/Header"
import { db } from "./data/db"



export const App = () => {
    const [data, setData] = useState(db);
    console.log(data);
  return (
    <>
        <Header/>
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5"> 
                <Guitar nombre="Guitarra 1"/>
                <Guitar nombre="Guitarra 2"/>
                <Guitar nombre="Guitarra 3"/>
            </div>
        </main>
        <Footer/>
    
    </>
  )
}


