"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070"
          alt="Community work"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Learn more about our story, mission, and the people behind the
            scenes who make it all happen.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Founded in 2010, Hope Foundation has been committed to creating a
              world where everyone has access to education, basic needs, and the
              opportunity to thrive. What began as a small initiative has grown
              into a global movement impacting thousands of lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower individuals and communities by providing education,
              healthcare, and sustainable resources that create lasting change.
            </p>
          </Card>

          {/* Vision Card */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              A world where every individual has the tools and support they need
              to lead a dignified life.
            </p>
          </Card>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Behind every initiative is a dedicated group of individuals
              passionate about making a difference.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Founder & CEO",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Jane Smith",
                role: "Program Director",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Sam Lee",
                role: "Operations Manager",
                img: "https://via.placeholder.com/150",
              },
            ].map((member) => (
              <Card key={member.name} className="p-6 text-center">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
