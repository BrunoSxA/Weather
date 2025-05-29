import React from 'react'

export default function Tarjeta({ contenido }) {
    return (
        <div
            className="card-hover min-w-[200px] border rounded-2xl flex justify-center items-center text-2xl text-center p-[20px] cursor-pointer h-[300px]"
        >
            {contenido}
        </div>
    )
}
