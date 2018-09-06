import router from '../router';
export default {
  install(Vue) {
    Vue.prototype.login = () => {
      router.push('/');
    };
  }
};
