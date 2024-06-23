import React from 'react';
import Roles from '@/app/_components/Roles';

const ceo = [
  {
    name: 'Matias Renaud',
    subname: ['Co-Fondateur', 'Photographe'],
    email: 'matias@clickmtl.com',
    phone: '514-234-8900',
  },
  {
    name: 'Louis Grégoire',
    subname: ['Co-Fondateur', 'Photographe'],
    email: 'louis@clickmtl.com',
    phone: '514-742-3122',
  },
];

const ContactSection = ({
  label,
  contacts,
}: {
  label: string;
  contacts: { name: string; subname: string[]; email: string; phone: string }[];
}) => {
  return (
    <div className='flex flex-col gap-[--gap] mb-10'>
      <p className='subtitle font-bold'>{label}</p>
      <div className='space-y-5 md:space-y-0 md:grid md:grid-cols-4 px-[--px]'>
        {contacts.map((contact, key) => (
          <div key={key} className='flex flex-col'>
            <div className='text-[1.5rem] font-semibold'>{contact.name}</div>
            <Roles roles={contact.subname} />

            <a href={`mailto:${contact.email}`} className='contactPhoneEmail'>
              {contact.email}
            </a>
            <div className='contactPhoneEmail'>{contact.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className='mx-[--px] pt-[--navh] min-h-[90vh]'>
      <div className='my-[--px] flex flex-col gap-[--gap]'>
        <ContactSection
          label='GÉNÉRAL'
          contacts={[
            {
              name: 'Reception',
              subname: ['Studio'],
              email: 'clickstudiomtl@gmail.com',
              phone: '',
            },
          ]}
        />
        <ContactSection label='FONDATEURS' contacts={ceo} />
      </div>
    </div>
  );
};

export default ContactPage;
