
import style from "./App.module.css"
import { Menu } from "./components/menu"

function App() {


  return (
    <>
     <Menu option01='sessão 01' option02='sessão 02' option03='Contato'></Menu>
     <main>
      <section id="s1">
        <h2>sessao 1</h2>
      </section>
      <section id="s2">
        <h2>sessao 2</h2>
      </section>
      <section id="s3">
        <h2>sessao3</h2>
      </section>
     </main>
    </>
  )
}

export default App
