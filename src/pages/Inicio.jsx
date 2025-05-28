import React from 'react'
import Layout from '../layouts/Layout'

export default function Inicio() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center h-[650px]'>
        <div class="w-80% overflow-hidden">
          <div className="flex flex-wrap justify-center gap-4">
            <div class="min-w-[200px] bg-[linear-gradient(rgba(0,0,0,0.7),rgba(139,69,19,0.7))] border rounded-2xl flex justify-center items-center text-2xl text-center p-[20px] cursor-pointer">A Nightmare on Elm Street</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
