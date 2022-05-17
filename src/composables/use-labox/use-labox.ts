import { ref } from 'vue';
import { LConfig, LCreateOptions } from '~/create-labox';

import { useTheme } from '../component/use-theme';
import { useModal } from './use-modal';
import { useToast } from './use-toast';

import { deepMerge } from '~/common/utility';
import defaultConfig from '~/common/utility/default-config';
import { createLaboxTeleportTarget } from './init';

type LGC = ReturnType<typeof create>;
let glc: LGC;

function create(options?: LCreateOptions) {
  const config = ref<LConfig>(
    deepMerge(defaultConfig, options?.config || {}) as LConfig
  );

  const modal = useModal(config.value);
  const toast = useToast(config.value);
  const theming = useTheme(config.value);

  createLaboxTeleportTarget();

  /**
   * Generates a random id.
   *
   * This is pseudorandom - using Math.random(), do not use if total uniqueness
   * is required.
   */
  const uuid = () => {
    return 'L' + (Math.random().toString(36) + '00000000000000000').slice(2, 9);
  };

  return {
    config,
    uuid,
    modal,
    toast,
    theming,
  };
}

export function _useLabox(options?: LCreateOptions, teardown = false) {
  if (!glc || teardown) glc = create(options); // Make sure the labox instance exists.
  return glc;
}

export function useLabox() {
  const { modal, toast, uuid, theming, config } = _useLabox();
  return {
    config,
    uuid,
    theming: {
      theme: theming.theme,
      setTheme: theming.setTheme,
      registerTheme: theming.registerTheme,
      createPalette: theming.createPalette,
    },
    modal: {
      open: modal.open,
      close: modal.close,
      closeAll: modal.closeAll,
    },
    toast: {
      pop: toast.pop,
    },
  };
}
