import { LCreateOptions } from '~/create-labox';

export const useToast = (_options?: LCreateOptions) => {
  const pop = (name: string) => {
    const event = new CustomEvent('create', {
      bubbles: true,
    });
    const modalRef = document.getElementById(name + 'ref')!;
    modalRef.dispatchEvent(event);
    document.body.style.overflowY = '';
  };

  return {
    pop,
  };
};
