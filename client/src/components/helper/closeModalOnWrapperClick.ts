import History from '../helper/history';

/**
 *  All modals need a close on wrapper click method
 */

export const closeModalOnWrapperClick = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const target = e.target as HTMLDivElement;
  if (
    target.classList.contains('modal') ||
    target.classList.contains('modal__close')
  ) {
    History.push('/');
  }
};
