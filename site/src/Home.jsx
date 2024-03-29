import { Header } from './components/Header/Header.jsx'
import { Main } from './components/Main/Main.jsx'

export function Home() {
  return (
    <>
      <div style={{
        height: '100px',
        width: '100%',
      }}>
        <Header />
      </div>
      <div style={{
        height: '823px',
        width: '100%',
      }}>
        <Main />
      </div>
    </>
  )
}