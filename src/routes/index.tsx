import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Mural } from '@/pages/Mural';

const Root = () => {
    return(
        <Router>

            <Routes>
                <Route path='/extranet/mural' element={<Mural />} />
            </Routes>

        </Router>
    );
}

export { Root };