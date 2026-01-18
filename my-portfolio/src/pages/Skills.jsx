import React from 'react'

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-secondary/30"
    >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Frontend */}
  <div className="space-y-4 relative z-10 text-black p-10 bg-white rounded-t-4xl">
    <h3 className="text-xl font-semibold border-b border-border pb-2">Frontend</h3>
    <ul className="space-y-2">
      <li className="text-muted-foreground">React</li>
      <li className="text-muted-foreground">Next.js</li>
      <li className="text-muted-foreground">TypeScript</li>
      <li className="text-muted-foreground">Tailwind CSS</li>
    </ul>
  </div>

  {/* Tools */}
  <div className="space-y-4 relative z-10 text-black p-10 bg-white rounded-t-4xl">
    <h3 className="text-xl font-semibold border-b border-border pb-2">Tools</h3>
    <ul className="space-y-2">
      <li className="text-muted-foreground">Git</li>
      <li className="text-muted-foreground">Figma</li>
      <li className="text-muted-foreground">VS Code</li>
      <li className="text-muted-foreground">Vercel</li>
    </ul>
  </div>

  {/* Soft Skills */}
  <div className="space-y-4 relative z-10 text-black p-10 bg-white rounded-t-4xl">
    <h3 className="text-xl font-semibold border-b border-border pb-2">Soft Skills</h3>
    <ul className="space-y-2">
      <li className="text-muted-foreground">Problem Solving</li>
      <li className="text-muted-foreground">Communication</li>
      <li className="text-muted-foreground">Team Collaboration</li>
      <li className="text-muted-foreground">Time Management</li>
    </ul>
  </div>
</div>
</section>
  )
}

export default Skills