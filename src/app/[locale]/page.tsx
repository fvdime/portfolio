import About from '@/components/about';
import ContactForm from '@/components/contact-form';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import Navbar from '@/components/navbar';
import Projects from '@/components/projects';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index.LandingPage');

  return (
    <main className="max-w-screen-lg mx-auto py-4 lg:px-0 text-gray-900 font-medium">
      {/* dark:text-gray-50 */}
      <Navbar/>
      <HeroBanner/>
      <About/>
      <Projects/>
      <Experience/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
