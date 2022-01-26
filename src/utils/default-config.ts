import { LConfig } from '../create-labox';

const config: LConfig = {
  stylePrefix: '',
  components: {
    LButton: {
      name: 'button',
      config: { activeClass: 'active', type: 'submit' },
    },
    LCheckbox: {
      name: 'checkbox',
      config: {
        iconChecked: 'check',
        iconIndeterminate: 'dash',
      },
    },
    LIcon: {
      name: 'icon',
      config: { tag: 'span', type: 'class', prefix: 'i-', className: 'icon' },
    },
    LInput: {
      name: 'input',
      config: {},
    },
    LLoading: {
      name: 'loading',
      config: { mode: 'spinner' },
    },
    LModal: { name: 'modal', config: { closeIcon: 'x-lg' } },
    LRadio: { name: 'radio', config: {} },
    LSelect: { name: 'select', config: { icon: 'chevron-expand' } },
    LSwitch: {
      name: 'switch',
      config: {
        checkedIcon: 'check',
        uncheckedIcon: 'x',
      },
    },
    LTextarea: { name: 'textarea', config: {} },
    LToast: {
      name: 'toast',
      config: { variant: 'secondary', placement: 'bottom' },
    },
    LTooltip: {
      name: 'tooltip',
      config: {
        variant: 'secondary',
        placement: 'top',
        delay: 0,
        trigger: 'hover',
        arrow: { padding: 8 },
        offset: [0, 8],
        disableTouch: false,
      },
    },
  },
};

export default config;
