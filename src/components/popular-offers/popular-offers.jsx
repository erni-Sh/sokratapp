import React from 'react';
import { OffersList } from '../offers-list/offers-list';

export function PopularOffers() {
  return (
    <section className='carousel carousel--popular'>
      <div className='carousel__wrapper'>
        <h2 className='carousel__title'>Популярное</h2>
        <OffersList />
      </div>
    </section>
  );
}
