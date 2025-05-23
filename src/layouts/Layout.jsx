import { useState, useEffect } from 'react'
import Logo from '../assets/img/logo.jpeg'
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
    const [showSidebar, setShowSidebar] = useState(false)
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        const handleClickOutside = e => {
            if (!e.target.closest('.sidebar') && !e.target.closest('#menu')) setShowSidebar(false)
            if (!e.target.closest('#jspopup') && !e.target.closest('#popup')) setShowPopup(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <div className="relative min-h-screen md:flex">
            <div className={`sidebar bg-clim-900 text-gray-300 z-20 text-sm font-medium w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <a className="flex items-center space-x-2 px-4">
                    <img className="h-10 w-auto rounded-full" src={Logo} alt="Logo" />
                    <span className="text-xl font-bold">CLIM</span>
                </a>
                <nav className="space-y-1">
                    {['El clima', 'Mapa', 'Reporte mensual', 'Tendencias meteorológicas'].map(txt => (
                        <a key={txt} className="py-2.5 px-4 rounded transition hover:bg-clim-600 hover:text-white flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon-tabler icon-tabler-brand-tailwind w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path d="M11.667 6c-2.49 0-4.044 1.222-4.667 3.667.933-1.223 2.023-1.68 3.267-1.375.71.174 1.217.68 1.778 1.24.916.912 2 1.968 4.288 1.968 2.49 0 4.044-1.222 4.667-3.667-.933 1.223-2.023 1.68-3.267 1.375-.71-.174-1.217-.68-1.778-1.24-.916-.912-1.975-1.968-4.288-1.968zm-4 6.5c-2.49 0-4.044 1.222-4.667 3.667.933-1.223 2.023-1.68 3.267-1.375.71.174 1.217.68 1.778 1.24.916.912 1.975 1.968 4.288 1.968 2.49 0 4.044-1.222 4.667-3.667-.933 1.223-2.023 1.68-3.267 1.375-.71-.174-1.217-.68-1.778-1.24-.916-.912-1.975-1.968-4.288-1.968z" />
                            </svg>
                            <span>{txt}</span>
                        </a>
                    ))}
                </nav>
            </div>

            <div className="flex flex-col flex-1">
                <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 md:left-64 h-16 flex items-center justify-between px-4">
                    <button id="menu" className="md:hidden text-gray-500 hover:text-gray-900" onClick={e => {
                        e.stopPropagation()
                        setShowSidebar(!showSidebar)
                    }}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="font-semibold">El clima (inicio)</span>
                    <button id="popup" className="relative bg-white text-gray-700 hover:bg-gray-100 p-2 rounded-full" onClick={e => {
                        e.stopPropagation()
                        setShowPopup(!showPopup)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.75v.008m0 4.492v.008m0 4.492v.008" />
                        </svg>
                    </button>
                    <div id="jspopup" className={`absolute right-4 top-14 bg-white border rounded shadow-md ${showPopup ? '' : 'hidden'}`}>
                        <Link to={"/"}>
                            <div className="p-4 text-sm text-gray-800">Menú de usuario</div>
                        </Link>
                    </div>
                </header>

                <main className="mt-16 p-4">
                    {children}
                </main>
            </div>
        </div>
    )
}
