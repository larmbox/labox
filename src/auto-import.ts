import * as components from './components';
import createLabox from './create-labox';

export default createLabox({
  components: Object.keys(components).map(
    (key) => components[key as keyof typeof components]
  ),
});
