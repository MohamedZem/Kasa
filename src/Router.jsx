import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout.jsx';

import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/Error';

function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="housing/:id" element={<Housing />} />
                    <Route path="error" element={<Error />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default Router;