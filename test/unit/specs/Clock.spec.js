import Vue from 'vue';
import Clock from '@/components/Clock';
import createMockRaf from 'mock-raf';

const mockRaf = createMockRaf();
sinon.stub(window, 'requestAnimationFrame', mockRaf.raf);

describe('Clock.vue', () => {
  it('should maintain an accurate clock', () => {
    const Constructor = Vue.extend(Clock);
    const vm = new Constructor().$mount();
    expect(vm.$data.now)
      .to.be.closeTo(Date.now(), 10);
    mockRaf.step({ count: 1000 });
    expect(vm.$data.now)
      .to.be.closeTo(Date.now(), 10);
  });
});
