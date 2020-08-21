/**
 * Autoresize for contenteditable elements
 */

export const autoresize = (evt: HTMLDivElement) => {
  let el = evt;
  el.style.height = '';
  let computed = window.getComputedStyle(el);
  let height =
    el.scrollHeight -
    (parseInt(computed.getPropertyValue('padding-top')) +
      parseInt(computed.getPropertyValue('padding-bottom')));
  el.style.height = height + 'px';
};
