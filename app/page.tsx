import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IMPACT_METRICS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
          alt="Children smiling"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Together We Can Make a Difference
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Join us in our mission to create lasting change through education,
            sustainable development, and community empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {IMPACT_METRICS.map((metric) => (
              <Card key={metric.label} className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how we're making a real impact in communities around the
              world through our various initiatives and programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=${i}`}
                    alt="Project image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Project Title {i}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of the project and its impact on the
                    community.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/projects/${i}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <Heart className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Your support can help us continue our mission to create positive change
            in communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">Make a Donation</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/volunteer">Join as Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}