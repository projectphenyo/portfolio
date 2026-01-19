import React from 'react'




const Projects = () => {
  return (
    <div className="container mx-auto max-w-6xl bg-white border-border p-10 rounded-t-4xl shadow-lg my-20">
  <h2 className="text-4xl sm:text-5xl font-semibold mb-12 text-balance text-center">
    My Projects
  </h2>

  {/* Grid wrapper */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div
      data-slot="card"
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 hover:border-foreground transition-colors overflow-hidden"
    >
      <div className="relative w-full h-48 bg-secondary overflow-hidden">
        <img
          alt="Aircraft G700 preview"
          loading="lazy"
          decoding="async"
          className="object-cover hover:scale-105 transition-transform duration-300 absolute inset-0 w-full h-full"
          src="/assets/Gulfstream.png"/>
      </div>
      <div
        data-slot="card-header"
        className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6"
      >
        <div data-slot="card-title" className="font-semibold text-2xl">
          Gulfstream Website
        </div>
        <div
          data-slot="card-description"
          className="text-muted-foreground text-base leading-relaxed"
        >
          Welcome to a mobile-responsive website showcasing a Gulfstream Aircraft G700
        </div>
      </div>
      <div data-slot="card-content" className="px-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
            Bootstrap
          </span>
          <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
            HTML
          </span>
          <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
            CSS
          </span>
        </div>
        <button
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border shadow-xs h-9 px-4 py-2 group bg-transparent hover:bg-accent hover:text-accent-foreground transition-all bg-yellow-500"
        >
          <a href="https://github.com/projectphenyo/Gulfstream-Website" target="_blank" rel="noopener noreferrer">
           View Project on GitHub</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div
      data-slot="card"
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 hover:border-foreground transition-colors overflow-hidden"
    >
      <div className="relative w-full h-48 bg-secondary overflow-hidden">
        <img
          alt="Digital Clock App preview"
          loading="lazy"
          decoding="async"
          className="object-cover hover:scale-105 transition-transform duration-300 absolute inset-0 w-full h-full"
          src="/assets/clock.png"
        />
      </div>
      <div
        data-slot="card-header"
        className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6"
      >
        <div data-slot="card-title" className="font-semibold text-2xl">
          Digital Clock App
        </div>
        <div
          data-slot="card-description"
          className="text-muted-foreground text-base leading-relaxed"
        >
          A mobile-responsive South African Standard Time (SAST) digital clock.
        </div>
      </div>
      <div data-slot="card-content" className="px-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
            JavaScript
          </span>
          <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
            CSS
          </span>
          <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
            HTML
          </span>
        </div>
        <button
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border shadow-xs h-9 px-4 py-2 group bg-transparent hover:bg-accent hover:text-accent-foreground transition-all bg-yellow-500">
              <a href="https://github.com/projectphenyo/Digital-Clock" target="_blank" rel="noopener noreferrer">
           View Project on GitHub</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div
      data-slot="card"
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 hover:border-foreground transition-colors overflow-hidden"
    >
      <div className="relative w-full h-48 bg-secondary overflow-hidden">
        <img
          alt="CryptX Platform preview"
          loading="lazy"
          decoding="async"
          className="object-cover hover:scale-105 transition-transform duration-300 absolute inset-0 w-full h-full"
          src="/assets/cryptx.png"
        />
      </div>
      <div
        data-slot="card-header"
        className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6"
      >
        <div data-slot="card-title" className="font-semibold text-2xl">
          CryptX Platform
        </div>
        <div
          data-slot="card-description"
          className="text-muted-foreground text-base leading-relaxed"
        >
          A responsive Single-Page Application (SPA) fintech/crypto platform.
        </div>
      </div>
      <div data-slot="card-content" className="px-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
            JavaScript
          </span>
          <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
            HTML & CSS
          </span>
        
        </div>
        <button
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border shadow-xs h-9 px-4 py-2 group bg-transparent hover:bg-accent hover:text-accent-foreground transition-all bg-yellow-500"
        >
         <a href="https://github.com/projectphenyo/CryptX-" target="_blank" rel="noopener noreferrer">
         View Project on GitHub</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
//     <div className="container mx-auto max-w-6xl">
// <h2 className="text-4xl sm:text-5xl font-semibold mb-12 text-balance">My Projects</h2>
// <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// <div
//       data-slot="card"
//       className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 hover:border-foreground transition-colors overflow-hidden"
//     >
//       {/* Image */}
//       <div className="relative w-full h-48 bg-secondary overflow-hidden">
//         <img
//           alt="E-Commerce Platform preview"
//           loading="lazy"
//           decoding="async"
//           className="object-cover hover:scale-105 transition-transform duration-300 absolute inset-0 w-full h-full"
//           src="/modern-ecommerce-interface.png"
//         />
//       </div>

//       {/* Header */}
//       <div
//         data-slot="card-header"
//         className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
//       >
//         <div data-slot="card-title" className="font-semibold text-2xl">
//           Gulfstream Website
//         </div>
//         <div
//           data-slot="card-description"
//           className="text-muted-foreground text-base leading-relaxed"
//         >
//           A full-stack
//         </div>
//       </div>

//       {/* Content */}
//       <div data-slot="card-content" className="px-6">
//         <div className="flex flex-wrap gap-2 mb-4">
//           <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
//             Bootstrap
//           </span>
//           <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
//             HTML & CSS
//           </span>
//           <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
//             PostgreSQL
//           </span>
//         </div>

//         {/* Button */}
//         <button
//           data-slot="button"
//           className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 group bg-transparent"
//         >
//           View Project
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-external-link ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//           >
//             <path d="M15 3h6v6" />
//             <path d="M10 14 21 3" />
//             <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//           </svg>
//         </button>
//       </div>
//     </div>

// </div>

// {/* Time app */}
// <div
//       data-slot="card"
//       className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 hover:border-foreground transition-colors overflow-hidden"
//     >
//       {/* Image */}
//       <div className="relative w-full h-48 bg-secondary overflow-hidden">
//         <img
//           alt="E-Commerce Platform preview"
//           loading="lazy"
//           decoding="async"
//           className="object-cover hover:scale-105 transition-transform duration-300 absolute inset-0 w-full h-full"
//           src="/modern-ecommerce-interface.png"
//         />
//       </div>

//       {/* Header */}
//       <div
//         data-slot="card-header"
//         className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
//       >
//         <div data-slot="card-title" className="font-semibold text-2xl">
//           Gulfstream Website
//         </div>
//         <div
//           data-slot="card-description"
//           className="text-muted-foreground text-base leading-relaxed"
//         >
//           A full-stack
//         </div>
//       </div>

//       {/* Content */}
//       <div data-slot="card-content" className="px-6">
//         <div className="flex flex-wrap gap-2 mb-4">
//           <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
//             Bootstrap
//           </span>
//           <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
//             HTML & CSS
//           </span>
//           <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
//             PostgreSQL
//           </span>
//         </div>

//         {/* Button */}
//         <button
//           data-slot="button"
//           className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 group bg-transparent"
//         >
//           View Project
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-external-link ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//           >
//             <path d="M15 3h6v6" />
//             <path d="M10 14 21 3" />
//             <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//           </svg>
//         </button>
//       </div>
//     </div>
//     {/* another project card can go here */}
//     <div
//       data-slot="card"
//       className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm border-2 hover:border-foreground transition-colors overflow-hidden"
//     >
//       {/* Image */}
//       <div className="relative w-full h-48 bg-secondary overflow-hidden">
//         <img
//           alt="E-Commerce Platform preview"
//           loading="lazy"
//           decoding="async"
//           className="object-cover hover:scale-105 transition-transform duration-300 absolute inset-0 w-full h-full"
//           src="/modern-ecommerce-interface.png"
//         />
//       </div>

//       {/* Header */}
//       <div
//         data-slot="card-header"
//         className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
//       >
//         <div data-slot="card-title" className="font-semibold text-2xl">
//           Gulfstream Website
//         </div>
//         <div
//           data-slot="card-description"
//           className="text-muted-foreground text-base leading-relaxed"
//         >
//           A full-stack
//         </div>
//       </div>

//       {/* Content */}
//       <div data-slot="card-content" className="px-6">
//         <div className="flex flex-wrap gap-2 mb-4">
//           <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
//             Bootstrap
//           </span>
//           <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
//             HTML & CSS
//           </span>
//           <span className="px-3 py-1 text-sm bg-secondary text-secondary-foreground">
//             PostgreSQL
//           </span>
//         </div>

//         {/* Button */}
//         <button
//           data-slot="button"
//           className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 group bg-transparent"
//         >
//           View Project
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-external-link ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//           >
//             <path d="M15 3h6v6" />
//             <path d="M10 14 21 3" />
//             <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//           </svg>
//         </button>
//       </div>
//     </div>
//     </div>

  )
}

export default Projects