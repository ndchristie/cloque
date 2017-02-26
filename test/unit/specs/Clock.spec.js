import Vue from 'vue';
import Clock from '@/components/Clock';
import createMockRaf from 'mock-raf';

// require('intl');
// require('intl/locale-data/jsonp/en.js');

const mockRaf = createMockRaf();
sinon.stub(window, 'requestAnimationFrame', mockRaf.raf);

describe('Clock.vue', () => {
  const Constructor = Vue.extend(Clock);

  it('should maintain an accurate clock', () => {
    const vm = new Constructor().$mount();
    expect(vm.$data.date.getTime())
      .to.be.closeTo(Date.now(), 100);
    mockRaf.step({ count: 1000 });
    expect(vm.$data.date.getTime())
      .to.be.closeTo(Date.now(), 100);
  });

  it('should show a localized clock', () => {
    const vm = new Constructor().$mount();
    expect(vm.$el.textContent)
      .to.match(/\d{2}:\d{2}:\d{2}\s[AP]m/ig);
  });
});
