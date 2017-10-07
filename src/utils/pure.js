/**
 * PureCSS Docs: https://purecss.io/
 */

const CLASS_PREFIX = 'pure';

const createClass = (type = 'g') => modifier =>
  (modifier ? `${CLASS_PREFIX}-${type}-${modifier}` : `${CLASS_PREFIX}-${type}`);

const hidden = 'hidden';
const img = createClass('img')();
const group = createClass('g')();

/**
 * Unit Sizes
 * - 5ths-Based Units: 1-5, 2-5, 3-5, 4-5, 1, 1-1, 5-5
 * - 24ths-Based Units
 *  -- 1-24
 *  -- 1-12, 2-24
 *  -- 3-24, 1-8
 *  -- 4-24, 1-6
 *  -- 5-24
 *  -- 1-4, 6-24
 *  -- 7-24
 *  -- 1-3, 8-24
 *  -- 3-8, 9-24
 *  -- 5-12, 10-24
 *  -- 11-24
 *  -- 1-2, 12-24
 *  -- 13-24
 *  -- 7-12, 14-24
 *  -- 5-8, 15-24
 *  -- 2-3, 16-24
 *  -- 17-24
 *  -- 3-4, 18-24
 *  -- 19-24
 *  -- 5-6, 20-24
 *  -- 7-8, 21-24
 *  -- 11-12, 22-24
 *  -- 23-24
 *  -- 1, 1-1, 24-24
 */
const unit = createClass('u');

/**
 * Button modifiers:
 *  - hover
 *  - active
 *  - disabled
 *  - hidden
 *  - primary
 *  - selected
 */
const button = createClass('button');
const buttonGroup = createClass('button-group')();

/**
 * Form modifiers:
 * - stacked
 * - aligned
 */
const form = createClass('form');

/**
 * Form Message modifiers:
 * - inline
 */
const message = createClass('form-message');

const controls = createClass('controls')();
const controlGroup = createClass('control-group')();

const checkbox = createClass('checkbox')();
const radio = createClass('radio')();

/**
  * Input modifiers:
  * - rounded
  * - sizes: 1-4, 1-3, 1-2, 2-3, 3-4, 1
 */
const input = createClass('input');
const inputGroup = createClass('group')();

/**
  * Menu modifiers:
  * - fixed
  * - list
  * - item
  * - heading
  * - link
  * - horizontal
  * - separator
  * - children
  * - allow-hover
  * - active
  * - has-children
  * - scrollable
  * - disabled
  * - selected
 */
const menu = createClass('menu');

/**
  * Table modifiers:
  * - striped
  * - bordered
  * - odd
  * - horizontal
 */
const table = createClass('table');

export default {
  hidden,
  img,
  group,
  unit,
  form,
  button,
  buttonGroup,
  checkbox,
  radio,
  message,
  controls,
  controlGroup,
  input,
  inputGroup,
  menu,
  table,
};
