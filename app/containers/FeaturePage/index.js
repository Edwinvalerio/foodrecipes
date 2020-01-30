/**
 *
 * FeaturePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import FeatureCard from 'components/FeatureCard';
import Trending from 'components/Trending';
import makeSelectFeaturePage from './selectors';
import { reducer } from './slice';
import saga from './saga';

const stateSelector = createStructuredSelector({
  featurePage: makeSelectFeaturePage(),
});

function FeaturePage() {
  useInjectReducer({ key: 'featurePage', reducer });
  useInjectSaga({ key: 'featurePage', saga });

  /* eslint-disable no-unused-vars */
  const { featurePage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>FeaturePage</title>
        <meta name="description" content="Description of FeaturePage" />
      </Helmet>
      <div className="container">
        <FeatureCard />
        <Trending />
      </div>
    </div>
  );
}

FeaturePage.propTypes = {};

export default FeaturePage;
