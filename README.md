# ⚙️ Mechanical Engineering Portfolio

A modern, responsive portfolio website built with **Next.js 13 (App Router)**, **Tailwind CSS**, and **Framer Motion**.  
This portfolio showcases CAD models, FEA, CFD, MATLAB/Python/C++ projects, and other engineering skills with animations and category-based pages.

---

## 📂 Features
- ✅ **Next.js 13 App Router** for modern architecture & routing  
- 🎨 **Tailwind CSS** for styling and custom themes  
- ✨ **Framer Motion animations** for smooth transitions  
- 🖼️ **Dynamic portfolio categories** (CAD, FEA, CFD, Programming/Math)  
- 📑 **Project detail pages** with equations, descriptions, and images  
- 📱 **Responsive design** (works on desktop, tablet, and mobile)  
- ⚡ Easy to expand with new projects, skills, or categories  

---

## 📁 Folder Structure

```bash
app/
 ├─ layout.js        # Root layout (applies globally)
 ├─ page.js          # Home page (hero, about, services, etc.)
 ├─ about/           # About page
 ├─ skills/          # Skills page
 ├─ services/        # Services page
 ├─ projects/        # General projects page
 ├─ contact/         # Contact form page
 ├─ portfolio/       
 │   ├─ cad/         # CAD portfolio & details
 │   ├─ fea/         # FEA portfolio & details
 │   ├─ cfd/         # CFD portfolio & details
 │   ├─ programming/ # MATLAB, Python, C++ projects
 │   └─ math/        # ODE, PDE, Numerical analysis projects
 └─ components/      # Reusable UI components (Header, Footer, Hero, etc.)
