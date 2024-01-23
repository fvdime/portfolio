import About from '@/components/about';
import ContactForm from '@/components/contact-form';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import HeroBanner from '@/components/hero-banner';
import Navbar from '@/components/navbar';
import Projects from '@/components/projects';
import {useTranslations} from 'next-intl';

export default function Home() {
  
  const tNavbar = useTranslations('Index.Navbar');
  const tHeroBanner = useTranslations('Index.HeroBanner');
  const tAbout = useTranslations('Index.About');
  const tProjects = useTranslations('Index.Projects');
  const tExperience = useTranslations('Index.Experience');
  const tContact = useTranslations('Index.Contact');
  const tFooter = useTranslations('Index.Footer');



  return (
    <main className="py-4 lg:px-0 font-medium">
      {/* dark:text-gray-50 */}
      <Navbar
        HomeLink={tNavbar('HomeLink')}
        AboutLink={tNavbar('AboutLink')}
        ProjectsLink={tNavbar('ProjectsLink')}
        ExperienceLink={tNavbar('ExperienceLink')}
        ContactLink={tNavbar('ContactLink')}
      />
      <HeroBanner
        Title={tHeroBanner('Title')}
        Description={tHeroBanner('Description')}
        ContactLabel={tHeroBanner('ContactLabel')}
        DownloadLabel={tHeroBanner('DownloadLabel')}
      />
      <About
        Title={tAbout('Title')}
        Description={tAbout('Description')}
        SecondPart={tAbout('SecondPart')}
        ThirdPart={tAbout('ThirdPart')}
        SkillsTitle={tAbout('SkillsTitle')}
      />
      <Projects
        Title={tProjects('Title')}
        Description={tProjects('Description')}
      />
      <Experience
        Title={tExperience('Title')}
        ExpTitle={tExperience('ExpTitle')}
        ExpDesc={tExperience('ExpDesc')}
        ExpCompany={tExperience('ExpCompany')}
        Duration={tExperience('Duration')}
        Location={tExperience('Location')}
        EducationTitle={tExperience('EducationTitle')}
        SchoolName={tExperience('SchoolName')}
        SchoolDesc={tExperience('SchoolDesc')}
        SchoolLocation={tExperience('SchoolLocation')}
        SchoolDuration={tExperience('SchoolDuration')}
      />
      <ContactForm
        Title={tContact('Title')}
        Description={tContact('Desc')}
        Email={tContact('Email')}
        TextArea={tContact('TextArea')}
        ButtonLabel={tContact('ButtonLabel')}
      />
      <Footer
        Content={tFooter('Content')}
      />
    </main>
  );
}
