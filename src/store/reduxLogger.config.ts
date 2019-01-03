/**
 * ReduxLogger config
 */
import { Store } from './';
// tslint:disable-next-line
export default {
  /**
   * Convert stores immutables to JS objects
   * https://github.com/evgenyrodionov/redux-logger#transform-immutable-with-combinereducers
   */
  stateTransformer: (state: Store) => state,
};
