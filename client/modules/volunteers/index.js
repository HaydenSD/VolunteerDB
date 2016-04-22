import configs from './configs';
import actions from './actions';
import routes from './routes';

export default {
  load(context) {
    configs(context);
  },
  routes,
  actions
};
