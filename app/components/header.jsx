// import React from "react";
export default function Header() {
return (
<header className="border-b">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">AM</div>
<div>
<div className="font-semibold">Abdul Monhim</div>
<div className="text-xs text-slate-500">Mechanical Design Engineer</div>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
<a href="#home" className="hover:bg-gray-300  rounded-md duration-200  ease-in py-2 px-4">Home</a>
<a href="#portfolio" className="hover:bg-gray-300  rounded-md duration-200  ease-in py-2 px-4">Portfolio</a>
<a href="#skills" className="hover:bg-gray-300  rounded-md duration-200  ease-in py-2 px-4">Services</a>
<a href="#blog" className="hover:bg-gray-300  rounded-md duration-200  ease-in py-2 px-4">Blog</a>
<a href="#contact" className="hover:bg-gray-300  rounded-md duration-200  ease-in py-2 px-4">Contact</a>
</nav>
</div>
</header>
);
}