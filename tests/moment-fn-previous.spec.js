/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import { expect } from 'chai';
import moment from 'moment';
import '../src/previous-date-range';

describe('moment.fn.previous', function () {
  it('should return a range', function () {
    const range = moment().previous(2, 'weeks');

    expect(moment.isMoment(range.start)).to.be.ok;
    expect(moment.isMoment(range.end)).to.be.ok;
  });
});