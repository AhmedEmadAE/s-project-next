import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                backgroundColor: '#09c'
            }}
        >
            <div>NEXT JS</div>
            <ul
                style={{
                    display: 'flex',
                    listStyle: 'none',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >

                <li><Link href="/Home">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="Gallery">Gallery</Link></li>
            </ul>
        </div>
    )
}