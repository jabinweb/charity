"use client";


// app/contact/page.tsx
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We’d love to hear from you! Whether you have a question, need more information, or want to get involved, our team is here to help.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Card */}
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name
                </label>
                <Input id="name" placeholder="Your Full Name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Your Email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your Message" rows={6} required />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info Card */}
          <Card className="p-8 shadow-lg bg-muted/50">
            <h3 className="text-2xl font-semibold mb-6">Our Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-sm text-muted-foreground">contact@hopefoundation.org</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
