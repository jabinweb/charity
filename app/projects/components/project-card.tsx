import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  status: 'ongoing' | 'completed';
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <Badge
          variant={project.status === 'ongoing' ? 'default' : 'secondary'}
          className="absolute top-4 right-4"
        >
          {project.status}
        </Badge>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <Badge variant="outline" className="w-fit mb-2">
          {project.category}
        </Badge>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
        <Button variant="outline" className="w-full mt-auto" asChild>
          <Link href={`/projects/${project.id}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}