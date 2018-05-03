// @flow
import { parse } from "./utils.js";

// location is /pathname?search#query
type Location = {
  pathname: string,
  search: string,
  hash: string,
  state?: {}
};

const EVENT_POPSTATE = "popstate";

class History {
  _listeners = [];
  _browser = window.history;

  constructor() {
    window.addEventListener(EVENT_POPSTATE, this._handlePopState);
  }

  get location() {
    const { pathname, search, hash } = window.location;
    const { state } = window.history;
    return { pathname, search, hash, state };
  }

  /**
   * Register location change listeners
   */
  listen(listener: (location: Location) => void) {
    this._listeners.push(listener);
    const unlisten = () => this._listeners.filter(item => item !== listener);
    return unlisten;
  }

  /**
   * Add history entry
   */
  push(url: string, state?: {}) {
    const { pathname, search, hash } = parse(url);
    this._browser.pushState(state, null, url);
    this._notify({ pathname, search, hash, state });
  }

  /**
   * Replace current history entry
   */
  replace(url: string, state?: {}) {
    const { pathname, search, hash } = parse(url);
    this._browser.replaceState(state, null, url);
    this._notify({ pathname, search, hash, state });
  }

  /**
   * Handle client state pop
   */
  _handlePopState = ({ state }: { state?: {} }) => {
    const { pathname, search, hash } = window.location;
    const location = { pathname, search, hash, state };
    this._notify(location);
  };

  _notify = (location: Location) => {
    this._listeners.forEach(listener => listener(location));
  };
}

export default History;
