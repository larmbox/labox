import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { LSwitch } from '~/index';

test('mount component', async () => {
  expect(LSwitch).toBeTruthy();

  const component = mount(LSwitch, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain(
    'form-control switch switch-md switch-primary'
  );
  expect(component.html()).not.toContain('form-field');
});

test('register css variables', async () => {
  mount(LSwitch);
  expect(
    document.getElementById('lx-theme-provider-global')!.innerText
  ).toContain('--lx-switch');
});

test('inherit attributes', async () => {
  const component = mount(LSwitch, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
