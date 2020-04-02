/**
 * Created by cld on 2019/7/30.
 */
/**
 *
 * @param top 表格体（table-body）距离顶部距离
 * @param bottom 表格体（table-body）距离底部距离
 * @param height 单行表格高度
 * @returns {number}
 */
export const tablePageSize = (top, bottom, height) => {
    const h = document.documentElement.clientHeight;
    const tableH = h - top - bottom;
    return Math.floor(tableH / height);
}