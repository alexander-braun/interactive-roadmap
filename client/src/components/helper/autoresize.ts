export const autoresize = (evt: HTMLDivElement) => {
  console.log('resizeS');
  let el = evt;
  el.style.height = '';
  let computed = window.getComputedStyle(el);
  let height =
    el.scrollHeight -
    (parseInt(computed.getPropertyValue('padding-top')) +
      parseInt(computed.getPropertyValue('padding-bottom')));
  el.style.height = height + 'px';
};
