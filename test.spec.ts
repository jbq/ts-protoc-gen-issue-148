import {Ping} from './src/proto/core_google'
import { expect } from 'chai';
import 'mocha';

it('clear function should not exist', () => {
  expect(new Ping().clearDate).to.be.an('undefined');
});

it('has function should not exist', () => {
  expect(new Ping().hasDate).to.be.an('undefined');
});
