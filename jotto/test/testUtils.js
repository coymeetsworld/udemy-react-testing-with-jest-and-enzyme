import checkPropTypes from 'check-prop-types'; // we will get error returned to us instead of it being thrown as a warning.

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  //data-test attribute was made up by us
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes, 
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}