import { shallowMount } from '@vue/test-utils'
import TopNav from "@/components/TopNav";

describe('TopNav', () => {
  it('render html correctly', () => {
    const wrapper = shallowMount(TopNav)
    expect(wrapper.html()).toMatchSnapshot();
  });
})

describe('TopNav.vue', () => {
  it('renders topNav text when passed', () => {
    const msg = 'EN NL X  Movies'
    const wrapper = shallowMount(TopNav)

    console.log(wrapper.text());

    expect(wrapper.text()).toMatch(msg)
  })
})
