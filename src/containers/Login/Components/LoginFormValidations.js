/**
 * Created by Kronenberg on 6/24/17.
 */

import memoize from 'lru-memoize';
import { createValidator, required, email } from 'utils/validation';

const loginValidation = createValidator({
  email: [email, required],
  password: required
});
export default memoize(10)(loginValidation);