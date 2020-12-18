import { shallowMount } from '@vue/test-utils'
import TopNav from "@/components/TopNav";

describe('TopNav.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'EN NL X  Movies'
    const wrapper = shallowMount(TopNav)

    console.log(wrapper.text());

    expect(wrapper.text()).toMatch(msg)
  })
})
