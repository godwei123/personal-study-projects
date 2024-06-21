import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from '../index.vue'

describe('Avatar', () => {
  it('renders properly', () => {
    const wrapper = mount(Avatar, {
      props: { src: '//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg' }
    })
    expect(wrapper.props().src).toBe('//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg')
    expect(wrapper.props().size).toBe('md')
    expect(wrapper.props().shape).toBe('circle')
    expect(wrapper.element.tagName).toBe('SPAN')
  })
  it('renders', () => {
    const wrapper = mount(Avatar, {
      props: {
        url: 'www.baidu.com'
      }
    })
    expect(wrapper.element.tagName).toBe('A')
  })
  it('should render avatar', () => {
    const text = 'chatui'
    const wrapper = mount(Avatar, {
      slots: {
        default: text
      }
    })
    expect(wrapper.text()).toContain(text)
  })

  it('should render image avatar', () => {
    const src = '//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg'
    const alt = 'ChatUI'
    const wrapper = mount(Avatar, { props: { src, alt } })
    const avatarImg = wrapper.find('img')

    expect(avatarImg.exists()).toBe(true)
    expect(wrapper.props().src).toBe(src)
    expect(avatarImg.element.getAttribute('src')).toBe(src)
    expect(avatarImg.element.getAttribute('alt')).toBe(alt)
  })

  it('should render link', () => {
    const src = '//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg'
    const alt = 'ChatUI'
    const wrapper = mount(Avatar, { props: { src, alt, url: 'www.baidu.com' } })

    const link = wrapper.find('a').element
    const avatarImg = wrapper.find('img').element

    expect(wrapper.element).toContain(link)
    expect(avatarImg && avatarImg.getAttribute('src')).toBe(src)
    expect(avatarImg && avatarImg.getAttribute('alt')).toBe(alt)
    expect(link.getAttribute('href')).toBe('www.baidu.com')
  })
})
