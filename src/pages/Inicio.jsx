import React from 'react'
import Layout from '../layouts/Layout'
import Tarjeta from '../components/Tarjeta'

export default function Inicio() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center h-[650px]'>
        <div class="w-80% overflow-hidden">
          <div className="flex flex-wrap justify-center gap-4">
            <Tarjeta contenido='Hola mundo' />
            <Tarjeta contenido='Hola mundo' />
            <Tarjeta contenido='Hola mundo' />
            <Tarjeta contenido='Hola mundo' />
          </div>
        </div>
      </div>
    </Layout>
  )
}
