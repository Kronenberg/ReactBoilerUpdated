/**
 * Created by Kronenberg on 6/24/17.
 */

import React, { Component } from 'react';
import cx from 'classnames';
// @IMAGES

export default class SearchCourseGlobalComponent extends Component {
  render() {
    const styles = require('./SearchCourseGlobal.scss');
    return (
      <div>
        <div className={styles.searchCourseTitle}>
          <h2>С чего начнем?</h2>
          <h4>Начни смотреть бессплатные курсы прямо сейчас!</h4>
          <div className={cx(styles.searchCourse, 'col-md-12')}>
            <div className={cx('input-group', styles.searchCourseHolder)}>
              <input type="text"
                     className={cx('form-control', styles.inputGlobalStyles)}
                     placeholder="Введите то, что вы хотите узнать здесь..."
                     aria-describedby="basic-addon2" />
              <span className="input-group-addon" id="basic-addon2">Вперед!</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
