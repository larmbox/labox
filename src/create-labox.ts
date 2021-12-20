import { App, Component, Directive } from 'vue';
import { createGlobalLaboxClass } from './composables/use-labox';
import { DeepPartial } from './utils/types';
import version from './version';
import type {
  LButtonConfig,
  LCheckboxConfig,
  LIconConfig,
  LInputConfig,
  LLoadingConfig,
  LModalConfig,
  LRadioConfig,
  LSelectConfig,
  LSwitchConfig,
  LTextareaConfig,
  LTooltipConfig,
} from './components';
import { TooltipDirective } from './directives/tooltip';

export interface LInstance {
  version: string;
  install: (app: App) => void;
}

export interface LComponent<T> {
  name: string;
  config: T;
}

export interface LConfig {
  stylePrefix: string;
  components: {
    LButton: LComponent<LButtonConfig>;
    LCheckbox: LComponent<LCheckboxConfig>;
    LIcon: LComponent<LIconConfig>;
    LInput: LComponent<LInputConfig>;
    LLoading: LComponent<LLoadingConfig>;
    LModal: LComponent<LModalConfig>;
    LRadio: LComponent<LRadioConfig>;
    LSelect: LComponent<LSelectConfig>;
    LSwitch: LComponent<LSwitchConfig>;
    LTextarea: LComponent<LTextareaConfig>;
    LTooltip: LComponent<LTooltipConfig>;
  };
}

export interface LCreateOptions {
  components?: {
    name: string;
    alias?: string[];
    dependencies?: { directives: any[]; components: any[] };
  }[];
  config?: DeepPartial<LConfig>;
  theme?: string;
}

function createLabox(options: LCreateOptions = {}): LInstance {
  const components = options.components || [];
  createGlobalLaboxClass(options);
  const installTargets: App[] = [];
  function registerComponent(
    app: App,
    name: string,
    component: Component
  ): void {
    const registered = app.component(name);
    if (!registered) {
      app.component(name, component);
    }
  }
  function registerDirective(
    app: App,
    name: string,
    directive: Directive
  ): void {
    const registered = app.component(name);
    if (!registered) {
      app.directive(name, directive);
    }
  }
  function install(app: App): void {
    if (installTargets.includes(app)) return;
    installTargets.push(app);
    registerDirective(app, TooltipDirective.name, TooltipDirective.directive);
    components.forEach((component) => {
      const { name, dependencies } = component;
      registerComponent(app, name, component);
      if (dependencies && dependencies.components) {
        dependencies.components.forEach((dependency: any) => {
          registerComponent(app, dependency.name, dependency);
        });
      }
      if (dependencies && dependencies.directives) {
        dependencies.directives.forEach(({ name, directive }: any) => {
          registerDirective(app, name, directive);
        });
      }
    });
  }
  return {
    version,
    install,
  };
}

export default createLabox;
