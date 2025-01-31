//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { BrowserRouter, Route} from 'react-router-dom'
import './index.css'

import AuthProvider from './providers/AuthProvider.tsx'
import Routes from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
    /*
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="meetings" element={<ListMeetings />} />
                <Route path="staffs" element={<ListStaffs />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
    */
   <AuthProvider>
        <Routes />
   </AuthProvider>
)
