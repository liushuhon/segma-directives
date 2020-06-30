import {
    expect
} from 'chai'
import {
    tablePageSize
} from '../src/util/page_size';
describe('测试表格行数', () => {
    it('表格行数为10', () => {
        expect(tablePageSize(100, 100, 40)).to.be.equal(10);
    });
});