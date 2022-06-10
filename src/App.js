import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Shop } from './components/Shop'
import { ContextProvider } from './context'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Description } from './pages/Descriprion'
import { NotFound } from './pages/NotFound'

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route exact path='/react-shop-refact'>
                            <ContextProvider>
                                <Shop />
                            </ContextProvider>
                        </Route>
                        <Route path='/react-shop-refact/contact' component={Contact} />
                        <Route path='/react-shop-refact/about' component={About} />
                        <Route path='/react-shop-refact/goods/:id' component={Description} />
                        <Route component={NotFound} />
                    </Switch>
                    {/* <ContextProvider>
                        <Shop />
                    </ContextProvider> */}
                </main>
                <Footer />
            </Router>
        </>
    )
}

export default App
