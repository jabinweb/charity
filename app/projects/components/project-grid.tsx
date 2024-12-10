'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from './project-card';

const CATEGORIES = ['All', 'Education', 'Healthcare', 'Environment', 'Community'];

const PROJECTS: Array<{
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  status: 'ongoing' | 'completed';
}> = [
  {
    id: 1,
    title: 'Rural Education Initiative',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
    description: 'Bringing quality education to remote communities.',
    status: 'ongoing',
  },
  {
    id: 2,
    title: 'Clean Water Project',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800',
    description: 'Providing access to clean water in developing regions.',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Reforestation Program',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800',
    description: 'Restoring forests and protecting biodiversity.',
    status: 'ongoing',
  },
];

export function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = PROJECTS.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="min-w-[100px]"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}