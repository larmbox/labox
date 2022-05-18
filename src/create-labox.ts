import { App, Component, Directive } from 'vue';
import { DeepPartial } from './common/types';
import version from './version';
import {
  LCheckboxComponent,
  LIconComponent,
  LInputComponent,
  LLoadingComponent,
  LModalComponent,
  LRadioComponent,
  LSelectComponent,
  LSwitchComponent,
  LTextareaComponent,
  LThemeProvider,
  LThemeProviderComponent,
  LToastComponent,
  LTooltipComponent,
} from './components';
import { TooltipDirective } from './directives/tooltip';
import { OpenModalDirective, CloseModalDirective } from './directives/modal';
import { LButtonComponent } from './components/button';
import { _useLabox } from './composables/use-labox/use-labox';

export interface LInstance {
  version: string;
  install: (app: App) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LGenericProps = Record<string, any>;

export interface LComponent<TOptions, TProps extends LGenericProps> {
  name: string;
  options: TOptions;
  props: TProps;
}

export interface LComponents {
  LButton: LButtonComponent;
  LCheckbox: LCheckboxComponent;
  LIcon: LIconComponent;
  LInput: LInputComponent;
  LLoading: LLoadingComponent;
  LModal: LModalComponent;
  LRadio: LRadioComponent;
  LSelect: LSelectComponent;
  LSwitch: LSwitchComponent;
  LTextarea: LTextareaComponent;
  LThemeProvider: LThemeProviderComponent;
  LToast: LToastComponent;
  LTooltip: LTooltipComponent;
}

export interface LConfig {
  defaultTheme: string;
  classPrefix: string;
  globalName: string;
  components: LComponents;
}

export interface LCreateOptions {
  components?: {
    name: string;
    alias?: string[];
  }[];
  config?: DeepPartial<LConfig>;
}

function createLabox(options: LCreateOptions = {}): LInstance {
  const components = options.components || [];
  const installTargets: App[] = [];

  _useLabox(options, true);

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
    dir: { name: string; directive: Directive }
  ): void {
    const registered = app.component(dir.name);
    if (!registered) {
      app.directive(dir.name, dir.directive);
    }
  }

  function install(app: App): void {
    if (installTargets.includes(app)) return;
    installTargets.push(app);

    registerComponent(app, 'LThemeProvider', LThemeProvider);
    registerDirective(app, TooltipDirective());
    registerDirective(app, OpenModalDirective());
    registerDirective(app, CloseModalDirective());

    components.forEach((component) => {
      const { name } = component;
      registerComponent(app, name, component);
    });
  }
  return {
    version,
    install,
  };
}

export default createLabox;
