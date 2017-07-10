import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import cx from 'classnames';
// @COMPONENTS
import FutureProjectsTable from './HomeComponents/FutureProjectsTable';
import SearchCourseGlobal from './HomeComponents/SearchCourseGlobal';

@connect(
  state => ({
    online: state.online
  })
)
export default class Home extends Component {

  static propTypes = {
    online: PropTypes.bool.isRequired
  };

  render() {
    const styles = require('./Home.scss');
    return (
      <div className={cx('jumbotron', 'vertical-center', styles.mainWrapper)}>
        <Helmet title="Очень домашняя страничка"/>
        <div>
        </div>
        <div className={cx(styles.prodCourses, 'col-md-12', 'col-sm-12', 'col-xs-12')}>
          <myTestPage />
          <div className={styles.blockQuote}>
            <blockquote>
              <h2>Тут будет написана первая строчка очень мотивирующего текста</h2>
              <h4>Тут будет написана вторая строчка очень мотивирующего текста</h4>
              <h6>Автор Авторович Автор</h6>
              <button>Начать прямо сейчас!</button>
            </blockquote>
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nKIu9yen5nc" frameBorder="0" allowFullScreen></iframe>
          <SearchCourseGlobal />
          <FutureProjectsTable
            user="ASJDHKSAJDHSADKJASHDKAJSHKJDHSAKJDas"
          />
        </div>
      </div>
    );
  }
}
