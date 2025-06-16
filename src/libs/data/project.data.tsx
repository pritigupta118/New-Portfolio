export type Projects = {
  title: string
  image: string
  description: string
  techStack: string[]
  href: string

}

export const projectsData: Projects[] = [
  {
    title: 'My Plate',
    image: '/myplate.png',
  techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Groq'],
    description:
      'An AI Powered Weekly Meal Plan Generator.  It helps users create personalized meal plans based on their dietary preferences, restrictions, and nutritional goals. The website uses AI to suggest recipes and generate a weekly meal plan that is easy to follow.',
    href: 'https://my-plate-six.vercel.app/',
    
  },
  {
    title: 'Bio Writer',
     image: '/biowriter.png',
  techStack: ['Next.js', 'Tailwind CSS', 'ShadCN', 'TypeScript', 'Groq'],
    description:
      'An AI-Powered Bio Generator that creates personalized bios for various platforms like LinkedIn, Twitter, and Instagram. It uses Groq model to generate engaging and professional bios based on user input.',
    href: 'https://bio-writer.vercel.app/',
    
  },

  {
    title: 'CodeOrbit',
     image: '/codeorbit.png',
  techStack: ['React', 'Tailwind CSS', 'TypeScript', 'MongoDB', 'Express.js', 'Node.js', 'Redux', 'ShadaCN', 'Aceternity UI'],
    description:
      'A online code compiler and editor that supports HTML, CSS, JavaScript. It allows users to write, compile, and run code directly in the browser, making it a convenient tool for testing code snippets. users can create, save, and share their code projects with others.',
    href: 'https://code-orbit-ten.vercel.app/',
  
  },
  {
    title: 'Wizard Case',
     image: '/wizardcase.png',
  techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Stripe', 'ShadCN', 'Prisma', 'PostgreSQL', 'React-Query'],
    description: 'An e-commerce platform specializing in custom phone cases, offering users the ability to design and purchase personalized cases. It features a user-friendly design interface, secure payment processing via Stripe, and efficient order management powered by Prisma and PostgreSQL.',
    href: 'https://wizerd-case.vercel.app/',
  
  },
    {
    title: 'NaukriHub',
     image: '/naukrihub.png',
  techStack: ['React', 'Tailwind CSS', 'JavaScript', 'MongoDB', 'Express.js', 'Node.js', 'Redux', 'ShadaCN', 'Multer'],
    description:
      'a MERN Stack Job Portal designed to connect job seekers and employers seamlessly! It offers a user-friendly interface for job seekers to find and apply for jobs, while employers can post job listings and manage applications efficiently.',
    href: 'https://naukrihub.onrender.com/',
  
  },
]