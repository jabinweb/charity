import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{post.category}</Badge>
          <time className="text-sm text-muted-foreground">
            {format(new Date(post.date), 'MMM d, yyyy')}
          </time>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
        <Button variant="outline" className="w-full mt-auto" asChild>
          <Link href={`/blog/${post.id}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}