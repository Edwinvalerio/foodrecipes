import { createSelector } from 'reselect';
import { initialState } from './slice';

/**
 * Direct selector to the featurePage state domain
 */

const selectFeaturePageDomain = state => state.featurePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FeaturePage
 */

const makeSelectFeaturePage = () =>
  createSelector(selectFeaturePageDomain, substate => substate);

export default makeSelectFeaturePage;
export { selectFeaturePageDomain };
