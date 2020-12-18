
import { shallowMount } from '@vue/test-utils'

import Basket from "@/views/Basket";

describe('Basket', () => {
    it('render html correctly', () => {
        const wrapper = shallowMount(Basket)

        expect(wrapper.html()).toMatchSnapshot();
    })

    it('basket is empty',() =>{
        const wrapper = shallowMount(Basket)
        const msg = wrapper.find('#msgNoItems')

        console.log(msg)
        expect(msg.text()).toMatch("Your basket is empty")
    })
});