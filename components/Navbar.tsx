'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  return <header className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur border-b border-white/10"><nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"><Link href="/" className="font-bold text-xl gradient-text">Sunil Kumar</Link><button className="md:hidden" onClick={()=>setOpen(!open)}>☰</button><div className={`${open?'flex':'hidden'} md:flex gap-6 flex-col md:flex-row absolute md:static top-16 right-4 glass md:bg-transparent md:border-0 p-4 md:p-0`}><Link href="/">Home</Link><Link href="/projects">Projects</Link><Link href="/resume">Resume</Link><Link href="/contact">Contact</Link></div></nav></header>
}
