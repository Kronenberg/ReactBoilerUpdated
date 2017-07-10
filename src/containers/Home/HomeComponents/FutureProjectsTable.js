/**
 * Created by Kronenberg on 6/24/17.
 */

import React, { Component } from 'react';
import cx from 'classnames';

// @IMAGES
import reactLogo from '../../../../static/programming_icons/react-logo.png';
import angularLogo from '../../../../static/programming_icons/angular-logo.png';
import reduxLogo from '../../../../static/programming_icons/redux-logo.png';
import jsLogo from '../../../../static/programming_icons/js-logo.png';
import cssLogo from '../../../../static/programming_icons/css-logo.png';

export default class FutureProjectsTable extends Component {
  render() {
    const styles = require('./FutureProjectsTable.scss');
    return (
      <div>
        <div className={styles.prodCoursesTitle}>
          <h4>Члены <b>weblabs.com</b> будут иметь полный доступ к этим курсам, когда они будут выпущены.</h4>
        </div>
        <table className={cx(styles.myTafutureProdCourseTableble)}>
          <tbody>
            <tr>
              <td><a href="sad"><img src={reduxLogo} alt="#" /></a></td>
              <td>Building apps with Ionic 2</td>
              <td><i className="fa fa-folder-open-o" aria-hidden="true"></i>angular2</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td><a href="sad"><img src={angularLogo} alt="#" /></a></td>
              <td>Save time avoiding common mistakes...</td>
              <td><i className="fa fa-folder-open-o" aria-hidden="true"></i>rx</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td><a href="sad"><img src={jsLogo} alt="#" /></a></td>
              <td>Maintainable CSS using TypeStyle</td>
              <td><i className="fa fa-folder-open-o" aria-hidden="true"></i>css</td>
              <td>july@example.com</td>
            </tr>
            <tr>
              <td><a href="sad"><img src={reactLogo} alt="#" /></a></td>
              <td>Maintainable CSS using TypeStyle</td>
              <td><i className="fa fa-folder-open-o" aria-hidden="true"></i>css</td>
              <td>july@example.com</td>
            </tr>
            <tr>
              <td><a href="sad"><img src={cssLogo} alt="#" /></a></td>
              <td>Maintainable CSS using TypeStyle</td>
              <td><i className="fa fa-folder-open-o" aria-hidden="true"></i>css</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
