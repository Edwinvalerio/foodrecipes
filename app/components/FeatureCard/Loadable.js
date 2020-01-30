/**
 *
 * Asynchronously loads the component for FeatureCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
