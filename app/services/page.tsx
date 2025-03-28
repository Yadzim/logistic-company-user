
import { PageHeader, Services } from '@/components';
import React from 'react';
import logistic from '@/assets/images/services-bg.png'

const ServicesPage: React.FC = (): JSX.Element => {

  return (
    <div className="">
      <PageHeader title="Xizmatlar" description="Bizning Xizmatlarimiz" tag="services" img={logistic} />

      <Services />
    </div>
  );
};

export default ServicesPage;