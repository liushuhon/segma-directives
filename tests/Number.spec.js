 import Vue from 'vue';
 import Directives from '../src/directives';

 Vue.use(Directives);
 import {
     createVue,
     destroyVM,
     triggerKeyPress,
     triggerKeyUp
 } from './util';
 describe('InputNumber', () => {
     let vm;
     afterEach(() => {
         destroyVM(vm);
     });
     it('初始值小数超过范围', () => {
         vm = createVue({
             template: `
                <el-input v-model="value"
                      v-number="{min: 0, max: 100, precision:2}"
                      size="small"></el-input>
          `,
             data() {
                 return {
                     value: 1.2222
                 };
             }
         });
         Vue.nextTick(() => {
             expect(vm.value).to.be.equal(1.22);
         })
     });
     it('初始值有中文', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{min: 0, max: 100, precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: '12的'
                 };
             }
         }, true);
         const input = vm.$el.querySelector('.el-input__inner');
         input.focus();
         triggerKeyUp(input, 8);
         triggerKeyUp(input, 220);
         input.blur();
         expect(vm.value).to.be.equal(null);
     });
     it('输入无效值', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{min: 0, max: 100, precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: 1.1
                 };
             }
         }, true);
         const input = vm.$el.querySelector('.el-input__inner');
         input.focus();
         triggerKeyPress(input, '.');
         input.blur();
         expect(vm.value).to.be.equal(1.1);
     });
     it('初始值超过最大值', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{min: 0, max: 100, precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: 123
                 };
             }
         }, true);
         expect(vm.value).to.be.equal(100);
     });
     it('初始值小于最小值', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{min: -100, max: 100, precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: -123
                 };
             }
         }, true);
         expect(vm.value).to.be.equal(-100);
     });
     it('无最小值时,最小值为负无穷', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{ max: 100, precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: -Infinity
                 };
             }
         }, true);
         expect(vm.value).to.be.equal(-Infinity);
     });
     it('无最大值时,最大值为正无穷', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{ min: 100, precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: Infinity
                 };
             }
         }, true);
         expect(vm.value).to.be.equal(Infinity);
     });
     it('错误使用指令min = max', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{min: 100, max: 100, precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: 1
                 };
             }
         }, true);
         console.log('error')
     });
     it('错误使用指令min < max', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{min: 200, max: 100, precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: 'bubu'
                 };
             }
         }, true);
         console.log('error')
     });
     it('错误使用指令not legal max', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{min: 0, max: '123', precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: 123
                 };
             }
         }, true);
         console.log('error')
     });
     it('错误使用指令not legal min', () => {
         vm = createVue({
             template: `
            <el-input v-model="value"
                  v-number="{min: '1', max: 123, precision:2}"
                  size="small"></el-input>
      `,
             data() {
                 return {
                     value: 123
                 };
             }
         }, true);
         console.log('error')
     });
 });