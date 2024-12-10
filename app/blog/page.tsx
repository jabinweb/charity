import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { BlogGrid } from './components/blog-grid';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with our latest news, stories, and impact reports.',
};

export default function BlogPage() {
  return (
    <div className="container py-8 md:py-12">
      <SectionHeader
        title="Our Blog"
        description="Stories of impact, updates on our projects, and insights from our community."
      />
      <BlogGrid />
    </div>
  );
}