import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { ProjectGrid } from './components/project-grid';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore our ongoing and completed projects making real impact in communities worldwide.',
};

export default function ProjectsPage() {
  return (
    <div className="container py-8 md:py-12">
      <SectionHeader
        title="Our Projects"
        description="Discover how we're making a difference through various initiatives and programs worldwide."
      />
      <ProjectGrid />
    </div>
  );
}