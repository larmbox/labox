import { LConfig } from '~/create-labox';

const config: LConfig = {
  globalName: 'lx',
  classPrefix: '',
  defaultTheme: 'default',
  components: {
    LThemeProvider: {
      name: 'theme-provider',
      props: {
        destroyDelay: 0,
      },
      options: {},
    },
    LButton: {
      name: 'button',
      props: {
        size: 'md',
        tag: 'button',
        variant: 'primary',
      },
      options: {},
    },
    LCheckbox: {
      name: 'checkbox',
      props: {
        variant: 'primary',
        size: 'md',
        feedbackType: 'error',
      },
      options: {
        iconChecked: 'check',
        iconIndeterminate: 'dash',
      },
    },
    LIcon: {
      name: 'icon',
      props: {
        prefix: '',
        tag: 'span',
        type: 'class',
      },
      options: {},
    },
    LInput: {
      name: 'input',
      props: {
        size: 'md',
        variant: 'primary',
        type: 'text',
        feedbackType: 'error',
      },
      options: {},
    },
    LLoading: {
      name: 'loading',
      props: {
        size: 'md',
        variant: 'primary',
        mode: 'spinner',
        role: 'progressbar',
      },
      options: {},
    },
    LModal: {
      name: 'modal',
      props: {
        size: 'md',
        closeOnRouteChange: true,
        closeOnBackdrop: false,
        closeable: true,
      },
      options: { closeIcon: 'x-lg' },
    },
    LRadio: {
      name: 'radio',
      props: { size: 'md', variant: 'primary', feedbackType: 'error' },
      options: {},
    },
    LSelect: {
      name: 'select',
      props: { size: 'md', variant: 'primary', feedbackType: 'error' },
      options: { icon: 'chevron-expand' },
    },
    LSwitch: {
      name: 'switch',
      props: { size: 'md', variant: 'primary', feedbackType: 'error' },
      options: {
        checkedIcon: 'check',
        uncheckedIcon: 'x',
      },
    },
    LTextarea: {
      name: 'textarea',
      props: { size: 'md', variant: 'primary', feedbackType: 'error' },
      options: {},
    },
    LToast: {
      name: 'toast',
      props: { variant: 'secondary', placement: 'bottom' },
      options: {},
    },
    LTooltip: {
      name: 'tooltip',
      props: {
        variant: 'secondary',
        placement: 'top',
        delay: 0,
        trigger: 'hover',
        arrow: { padding: 8 },
        offset: [0, 8],
        disableTouch: false,
      },
      options: {},
    },
  },
};

export default config;
