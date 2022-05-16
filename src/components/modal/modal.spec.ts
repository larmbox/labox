import { mount } from '@vue/test-utils';
import { beforeAll, expect, test } from 'vitest';
import { createLabox, LModal } from '../../';

beforeAll(() => {
  createLabox();
});

test('mount component', async () => {
  expect(LModal).toBeTruthy();

  const wrapper = mount(LModal, {
    props: {
      id: 'modal',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.html()).toContain('modal');
});
