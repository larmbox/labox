import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { LCheckbox } from '~/index';

test('mount component', async () => {
  expect(LCheckbox).toBeTruthy();

  const component = mount(LCheckbox, {
    props: {
      id: 'id',
    },
  });

  expect(component.html()).toMatchSnapshot();
  expect(component.html()).toContain(
    'form-control checkbox checkbox-md checkbox-primary'
  );
  expect(component.html()).not.toContain('form-field');
});

test('register css variables', async () => {
  mount(LCheckbox);
  expect(
    document.getElementById('lx-theme-provider-global')!.innerText
  ).toContain('--lx-checkbox');
});

test('inherit attributes', async () => {
  const component = mount(LCheckbox, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
