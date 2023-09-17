// const Cookie = require('js-cookie');
require('./src/styles/global.css');
const { capitalCase } = require('capital-case');

const integrations = {
  All: false,
  Intercom: true,
  Mixpanel: true,
};

function trimEndingSlash(url) {
  return url.replace(/\/$/, '');
}

exports.shouldUpdateScroll = ({ prevRouterProps, routerProps }) => {
  if (!prevRouterProps) {
    window.scrollTo(0, 0);
    return false;
  } else {
    const { location } = routerProps;
    const { location: prevLocation } = prevRouterProps;
    if (
      trimEndingSlash(location.pathname) !==
      trimEndingSlash(prevLocation.pathname)
    ) {
      window.scrollTo(0, 0);
      return false;
    }
  }
  return true;
};

exports.onClientEntry = () => {
  // Cookie.set('gdpr-google-tagmanager', 'true');
  window.addEventListener('click', (event) => {
    const trackEventName = event.target.getAttribute('data-event-name');
    if (trackEventName) {
      window.analytics &&
        window.analytics.track(trackEventName, {}, integrations);
    }
  });
};

exports.onRouteUpdate = ({ location }) => {
  try {
    const pageName =
      location.pathname === '/'
        ? 'Website Home'
        : capitalCase(location.pathname);

    window.analytics && window.analytics.page(pageName, {}, integrations);
  } catch (e) {}
};
