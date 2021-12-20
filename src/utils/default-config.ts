import { LConfig } from '../create-labox';

const config: LConfig = {
  stylePrefix: '',
  components: {
    LButton: {
      name: 'button',
      config: { activeClass: 'active', type: 'submit' },
    },
    LCheckbox: { name: 'checkbox', config: {} },
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
    LModal: { name: 'modal', config: {} },
    LRadio: { name: 'radio', config: {} },
    LSelect: { name: 'select', config: {} },
    LSwitch: {
      name: 'switch',
      config: {},
    },
    LTextarea: { name: 'textarea', config: {} },
    LTooltip: { name: 'tooltip', config: { variant: 'secondary' } },
  },
};

export default config;
