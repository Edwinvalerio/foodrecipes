/**
 *
 * Asynchronously loads the component for FeaturePage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
