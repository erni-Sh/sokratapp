import React from 'react';
import Message from '../message/message';
import PageLayout from '../page-layout/page-layout';

const MESSAGE = 'Страница в разработке';

function UnderConstructionPage() {
  return (
    <PageLayout>
      <Message
        message={MESSAGE}
        isButtonVisible={false}
      />
    </PageLayout>
  );
}

export default UnderConstructionPage;
