'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BlogCard } from './blog-card';

const CATEGORIES = ['All', 'News', 'Stories', 'Updates', 'Events'];

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Making a Difference: Our 2024 Impact Report',
    category: 'Updates',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    excerpt: 'A comprehensive look at our achievements and impact in communities worldwide.',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'Volunteer Story: Teaching in Rural Communities',
    category: 'Stories',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
    excerpt: 'Sarah shares her experience teaching in remote villages.',
    date: '2024-03-10',
  },
  {
    id: 3,
    title: 'Upcoming Charity Gala: Join Us!',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    excerpt: 'Annual fundraising gala to support our education initiatives.',
    date: '2024-03-05',
  },
  // Add more blog posts as needed
];

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = BLOG_POSTS.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
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
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}