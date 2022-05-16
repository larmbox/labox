import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { LLoading } from '../../';

test('mount component', async () => {
  expect(LLoading).toBeTruthy();

  const wrapper = mount(LLoading, {
    props: {
      id: 'id',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.html()).toContain('loading');
});

test('register css variables', async () => {
  mount(LLoading);
  expect(
    document.getElementById('lx-theme-provider-global')!.innerText
  ).toContain('--lx-loading');
});

test('inherit attributes', async () => {
  const component = mount(LLoading, {
    props: { notaprop: '1', variant: 'primary' },
  });
  expect(component.html()).toContain('notaprop="1"');
  expect(component.html()).not.toContain('variant="primary"');
});
