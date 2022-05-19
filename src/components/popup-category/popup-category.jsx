/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { addCategoriesAction } from '../../store/checked-categories/checked-categories.js';

const MIN_CHECK = 1;
const MAX_CHECK = 6;

export default function PopUpCategory({visible, setVisible, categories}) {
  if(!visible) return false; //баг не перерисовывается popupcat при смене checked извне
  
  const dispatch = useDispatch();
  const chekedCategories = useSelector((state) => state.checked.categories);

  const html = document.getElementsByTagName('html')[0];
  visible && html.classList.add('fixed');

  const closePopUpCategory = () => {
    setVisible(false);
    html.classList.remove('fixed');

    const checkedSlugs = [];
    const checkedBoxes = document.querySelectorAll('input[name=category]:checked');
    checkedBoxes.forEach((box) => checkedSlugs.push(box.value));
    dispatch(addCategoriesAction(checkedSlugs));
  };

  const setChecked = (e) => {
    const checkedTotal = document.querySelectorAll('input[name=category]:checked').length;
    if(checkedTotal > MAX_CHECK) {e.target.checked = false;}
    if(checkedTotal < MIN_CHECK) {e.target.checked = true;}
  };

  const content = (
    categories && chekedCategories &&
    <section className={visible ? 'popup-category' : 'popup-category popup-category--hidden'} onClick={closePopUpCategory}>
      <div className="popup-category__block" onClick={(e) => e.stopPropagation() }>
        <h2 className="popup-category__title">Выберите темы, которые вам интересны</h2>
        <button className="popup-category__close" type="button" onClick={closePopUpCategory} />
        <ul className="block-filter__list">
          {/*popup-category__list */}
          {categories.map((category, i) => {
            const { id, slug, picture_svg: pictureSvg, picture_png: picturePng, title } = category;
            const isCategoryChecked = chekedCategories.includes(slug);

            return (
              <li key={id} className="block-filter__item">
                <input className="block-filter__input visually-hidden" id={slug} type="checkbox" name="category" value={slug} onChange={setChecked} defaultChecked={isCategoryChecked} />
                <label className="block-filter__label" htmlFor={slug}>
                  <picture>
                    <source media="(max-width: 768px)" srcSet={picturePng ?? '/img/courses-page/category-placeholder-mobile.jpg'} />
                    <img
                      className="block-filter__img block-filter__img-hidden"
                      src={picturePng ?? '/img/courses-page/category-placeholder.jpg'}
                      alt={title}
                      onLoad={(e)=>{
                        e.target.classList.remove("block-filter__img-hidden")
                      }}
                    />
                  </picture>
                </label>
                <span className="block-filter__name">{title}</span>
              </li>)})}
        </ul>
      </div>
    </section>
  );

  return content;
}

PopUpCategory.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};
