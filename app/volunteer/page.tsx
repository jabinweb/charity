import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { VolunteerForm } from './components/volunteer-form';

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Join our community of volunteers and make a difference.',
};

export default function VolunteerPage() {
  return (
    <div className="container py-8 md:py-12">
      <SectionHeader
        title="Become a Volunteer"
        description="Join our global community of volunteers and help us make a lasting impact."
      />
      <VolunteerForm />
    </div>
  );
}