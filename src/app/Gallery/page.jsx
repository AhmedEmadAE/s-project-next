import React from "react";
import Link from "next/link";

export default function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
            <ul style={{
                color: 'red'
            }}>
                <li>
                    <Link href="/Gallery/web"><h1>Web Gallery</h1></Link>
                </li>
                <li>
                    <Link href="/Gallery/mobile"><h1>Mobile Gallery</h1></Link>
                </li>
            </ul>
        </div>
    );
}