/**
* AUTO-GENERATED - DO NOT EDIT. Source: https://github.com/gpuweb/cts
**/export const description = `
Execution tests for the 'reversBits' builtin function
`;import { makeTestGroup } from '../../../../../../common/framework/test_group.js';
import { GPUTest } from '../../../../../gpu_test.js';
import { TypeU32, u32Bits, TypeI32, i32Bits } from '../../../../../util/conversion.js';
import { run } from '../../expression.js';

import { builtin } from './builtin.js';

export const g = makeTestGroup(GPUTest);

g.test('u32').
specURL('https://www.w3.org/TR/WGSL/#integer-builtin-functions').
desc(
`
T is i32, u32, vecN<i32>, or vecN<u32>
@const fn reverseBits(e: T ) -> T
Reverses the bits in e: The bit at position k of the result equals the bit at position 31-k of e.
Component-wise when T is a vector.
`).

params((u) =>
u.
combine('storageClass', ['uniform', 'storage_r', 'storage_rw']).
combine('vectorize', [undefined, 2, 3, 4])).

fn(async (t) => {
  const cfg = t.params;

  run(t, builtin('reverseBits'), [TypeU32], TypeU32, cfg, [
  // Zero
  { input: u32Bits(0b00000000000000000000000000000000), expected: u32Bits(0b00000000000000000000000000000000) },

  // One
  { input: u32Bits(0b00000000000000000000000000000001), expected: u32Bits(0b10000000000000000000000000000000) },

  // 0's after leading 1
  { input: u32Bits(0b00000000000000000000000000000010), expected: u32Bits(0b01000000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000000100), expected: u32Bits(0b00100000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000001000), expected: u32Bits(0b00010000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000010000), expected: u32Bits(0b00001000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000100000), expected: u32Bits(0b00000100000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000001000000), expected: u32Bits(0b00000010000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000010000000), expected: u32Bits(0b00000001000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000100000000), expected: u32Bits(0b00000000100000000000000000000000) },
  { input: u32Bits(0b00000000000000000000001000000000), expected: u32Bits(0b00000000010000000000000000000000) },
  { input: u32Bits(0b00000000000000000000010000000000), expected: u32Bits(0b00000000001000000000000000000000) },
  { input: u32Bits(0b00000000000000000000100000000000), expected: u32Bits(0b00000000000100000000000000000000) },
  { input: u32Bits(0b00000000000000000001000000000000), expected: u32Bits(0b00000000000010000000000000000000) },
  { input: u32Bits(0b00000000000000000010000000000000), expected: u32Bits(0b00000000000001000000000000000000) },
  { input: u32Bits(0b00000000000000000100000000000000), expected: u32Bits(0b00000000000000100000000000000000) },
  { input: u32Bits(0b00000000000000001000000000000000), expected: u32Bits(0b00000000000000010000000000000000) },
  { input: u32Bits(0b00000000000000010000000000000000), expected: u32Bits(0b00000000000000001000000000000000) },
  { input: u32Bits(0b00000000000000100000000000000000), expected: u32Bits(0b00000000000000000100000000000000) },
  { input: u32Bits(0b00000000000001000000000000000000), expected: u32Bits(0b00000000000000000010000000000000) },
  { input: u32Bits(0b00000000000010000000000000000000), expected: u32Bits(0b00000000000000000001000000000000) },
  { input: u32Bits(0b00000000000100000000000000000000), expected: u32Bits(0b00000000000000000000100000000000) },
  { input: u32Bits(0b00000000001000000000000000000000), expected: u32Bits(0b00000000000000000000010000000000) },
  { input: u32Bits(0b00000000010000000000000000000000), expected: u32Bits(0b00000000000000000000001000000000) },
  { input: u32Bits(0b00000000100000000000000000000000), expected: u32Bits(0b00000000000000000000000100000000) },
  { input: u32Bits(0b00000001000000000000000000000000), expected: u32Bits(0b00000000000000000000000010000000) },
  { input: u32Bits(0b00000010000000000000000000000000), expected: u32Bits(0b00000000000000000000000001000000) },
  { input: u32Bits(0b00000100000000000000000000000000), expected: u32Bits(0b00000000000000000000000000100000) },
  { input: u32Bits(0b00001000000000000000000000000000), expected: u32Bits(0b00000000000000000000000000010000) },
  { input: u32Bits(0b00010000000000000000000000000000), expected: u32Bits(0b00000000000000000000000000001000) },
  { input: u32Bits(0b00100000000000000000000000000000), expected: u32Bits(0b00000000000000000000000000000100) },
  { input: u32Bits(0b01000000000000000000000000000000), expected: u32Bits(0b00000000000000000000000000000010) },
  { input: u32Bits(0b10000000000000000000000000000000), expected: u32Bits(0b00000000000000000000000000000001) },

  // 1's after leading 1
  { input: u32Bits(0b00000000000000000000000000000011), expected: u32Bits(0b11000000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000000111), expected: u32Bits(0b11100000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000001111), expected: u32Bits(0b11110000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000011111), expected: u32Bits(0b11111000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000111111), expected: u32Bits(0b11111100000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000001111111), expected: u32Bits(0b11111110000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000011111111), expected: u32Bits(0b11111111000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000111111111), expected: u32Bits(0b11111111100000000000000000000000) },
  { input: u32Bits(0b00000000000000000000001111111111), expected: u32Bits(0b11111111110000000000000000000000) },
  { input: u32Bits(0b00000000000000000000011111111111), expected: u32Bits(0b11111111111000000000000000000000) },
  { input: u32Bits(0b00000000000000000000111111111111), expected: u32Bits(0b11111111111100000000000000000000) },
  { input: u32Bits(0b00000000000000000001111111111111), expected: u32Bits(0b11111111111110000000000000000000) },
  { input: u32Bits(0b00000000000000000011111111111111), expected: u32Bits(0b11111111111111000000000000000000) },
  { input: u32Bits(0b00000000000000000111111111111111), expected: u32Bits(0b11111111111111100000000000000000) },
  { input: u32Bits(0b00000000000000001111111111111111), expected: u32Bits(0b11111111111111110000000000000000) },
  { input: u32Bits(0b00000000000000011111111111111111), expected: u32Bits(0b11111111111111111000000000000000) },
  { input: u32Bits(0b00000000000000111111111111111111), expected: u32Bits(0b11111111111111111100000000000000) },
  { input: u32Bits(0b00000000000001111111111111111111), expected: u32Bits(0b11111111111111111110000000000000) },
  { input: u32Bits(0b00000000000011111111111111111111), expected: u32Bits(0b11111111111111111111000000000000) },
  { input: u32Bits(0b00000000000111111111111111111111), expected: u32Bits(0b11111111111111111111100000000000) },
  { input: u32Bits(0b00000000001111111111111111111111), expected: u32Bits(0b11111111111111111111110000000000) },
  { input: u32Bits(0b00000000011111111111111111111111), expected: u32Bits(0b11111111111111111111111000000000) },
  { input: u32Bits(0b00000000111111111111111111111111), expected: u32Bits(0b11111111111111111111111100000000) },
  { input: u32Bits(0b00000001111111111111111111111111), expected: u32Bits(0b11111111111111111111111110000000) },
  { input: u32Bits(0b00000011111111111111111111111111), expected: u32Bits(0b11111111111111111111111111000000) },
  { input: u32Bits(0b00000111111111111111111111111111), expected: u32Bits(0b11111111111111111111111111100000) },
  { input: u32Bits(0b00001111111111111111111111111111), expected: u32Bits(0b11111111111111111111111111110000) },
  { input: u32Bits(0b00011111111111111111111111111111), expected: u32Bits(0b11111111111111111111111111111000) },
  { input: u32Bits(0b00111111111111111111111111111111), expected: u32Bits(0b11111111111111111111111111111100) },
  { input: u32Bits(0b01111111111111111111111111111111), expected: u32Bits(0b11111111111111111111111111111110) },
  { input: u32Bits(0b11111111111111111111111111111111), expected: u32Bits(0b11111111111111111111111111111111) },

  // random after leading 1
  { input: u32Bits(0b00000000000000000000000000000110), expected: u32Bits(0b01100000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000001101), expected: u32Bits(0b10110000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000011101), expected: u32Bits(0b10111000000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000000111001), expected: u32Bits(0b10011100000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000001101111), expected: u32Bits(0b11110110000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000011111111), expected: u32Bits(0b11111111000000000000000000000000) },
  { input: u32Bits(0b00000000000000000000000111101111), expected: u32Bits(0b11110111100000000000000000000000) },
  { input: u32Bits(0b00000000000000000000001111111111), expected: u32Bits(0b11111111110000000000000000000000) },
  { input: u32Bits(0b00000000000000000000011111110001), expected: u32Bits(0b10001111111000000000000000000000) },
  { input: u32Bits(0b00000000000000000000111011011101), expected: u32Bits(0b10111011011100000000000000000000) },
  { input: u32Bits(0b00000000000000000001101101111111), expected: u32Bits(0b11111110110110000000000000000000) },
  { input: u32Bits(0b00000000000000000011111111011111), expected: u32Bits(0b11111011111111000000000000000000) },
  { input: u32Bits(0b00000000000000000101111001110101), expected: u32Bits(0b10101110011110100000000000000000) },
  { input: u32Bits(0b00000000000000001101111011110111), expected: u32Bits(0b11101111011110110000000000000000) },
  { input: u32Bits(0b00000000000000011111111111110011), expected: u32Bits(0b11001111111111111000000000000000) },
  { input: u32Bits(0b00000000000000111111111110111111), expected: u32Bits(0b11111101111111111100000000000000) },
  { input: u32Bits(0b00000000000001111111011111111111), expected: u32Bits(0b11111111111011111110000000000000) },
  { input: u32Bits(0b00000000000011111111111111111111), expected: u32Bits(0b11111111111111111111000000000000) },
  { input: u32Bits(0b00000000000111110101011110111111), expected: u32Bits(0b11111101111010101111100000000000) },
  { input: u32Bits(0b00000000001111101111111111110111), expected: u32Bits(0b11101111111111110111110000000000) },
  { input: u32Bits(0b00000000011111111111010000101111), expected: u32Bits(0b11110100001011111111111000000000) },
  { input: u32Bits(0b00000000111111111111001111111011), expected: u32Bits(0b11011111110011111111111100000000) },
  { input: u32Bits(0b00000001111111011111101111111111), expected: u32Bits(0b11111111110111111011111110000000) },
  { input: u32Bits(0b00000011101011111011110111111011), expected: u32Bits(0b11011111101111011111010111000000) },
  { input: u32Bits(0b00000111111110111111111111111111), expected: u32Bits(0b11111111111111111101111111100000) },
  { input: u32Bits(0b00001111000000011011011110111111), expected: u32Bits(0b11111101111011011000000011110000) },
  { input: u32Bits(0b00011110101111011111111111111111), expected: u32Bits(0b11111111111111111011110101111000) },
  { input: u32Bits(0b00110110111111100111111110111101), expected: u32Bits(0b10111101111111100111111101101100) },
  { input: u32Bits(0b01010111111101111111011111011111), expected: u32Bits(0b11111011111011111110111111101010) },
  { input: u32Bits(0b11100010011110101101101110101111), expected: u32Bits(0b11110101110110110101111001000111) }]);

});

g.test('i32').
specURL('https://www.w3.org/TR/2021/WD-WGSL-20210929/#integer-builtin-functions').
desc(
`
T is i32, u32, vecN<i32>, or vecN<u32>
@const fn reverseBits(e: T ) -> T
Reverses the bits in e: The bit at position k of the result equals the bit at position 31-k of e.
Component-wise when T is a vector.
`).

params((u) =>
u.
combine('storageClass', ['uniform', 'storage_r', 'storage_rw']).
combine('vectorize', [undefined, 2, 3, 4])).

fn(async (t) => {
  const cfg = t.params;

  run(t, builtin('reverseBits'), [TypeI32], TypeI32, cfg, [
  // Zero
  { input: i32Bits(0b00000000000000000000000000000000), expected: i32Bits(0b00000000000000000000000000000000) },

  // One
  { input: i32Bits(0b00000000000000000000000000000001), expected: i32Bits(0b10000000000000000000000000000000) },

  // 0's after leading 1
  { input: i32Bits(0b00000000000000000000000000000010), expected: i32Bits(0b01000000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000000100), expected: i32Bits(0b00100000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000001000), expected: i32Bits(0b00010000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000010000), expected: i32Bits(0b00001000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000100000), expected: i32Bits(0b00000100000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000001000000), expected: i32Bits(0b00000010000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000010000000), expected: i32Bits(0b00000001000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000100000000), expected: i32Bits(0b00000000100000000000000000000000) },
  { input: i32Bits(0b00000000000000000000001000000000), expected: i32Bits(0b00000000010000000000000000000000) },
  { input: i32Bits(0b00000000000000000000010000000000), expected: i32Bits(0b00000000001000000000000000000000) },
  { input: i32Bits(0b00000000000000000000100000000000), expected: i32Bits(0b00000000000100000000000000000000) },
  { input: i32Bits(0b00000000000000000001000000000000), expected: i32Bits(0b00000000000010000000000000000000) },
  { input: i32Bits(0b00000000000000000010000000000000), expected: i32Bits(0b00000000000001000000000000000000) },
  { input: i32Bits(0b00000000000000000100000000000000), expected: i32Bits(0b00000000000000100000000000000000) },
  { input: i32Bits(0b00000000000000001000000000000000), expected: i32Bits(0b00000000000000010000000000000000) },
  { input: i32Bits(0b00000000000000010000000000000000), expected: i32Bits(0b00000000000000001000000000000000) },
  { input: i32Bits(0b00000000000000100000000000000000), expected: i32Bits(0b00000000000000000100000000000000) },
  { input: i32Bits(0b00000000000001000000000000000000), expected: i32Bits(0b00000000000000000010000000000000) },
  { input: i32Bits(0b00000000000010000000000000000000), expected: i32Bits(0b00000000000000000001000000000000) },
  { input: i32Bits(0b00000000000100000000000000000000), expected: i32Bits(0b00000000000000000000100000000000) },
  { input: i32Bits(0b00000000001000000000000000000000), expected: i32Bits(0b00000000000000000000010000000000) },
  { input: i32Bits(0b00000000010000000000000000000000), expected: i32Bits(0b00000000000000000000001000000000) },
  { input: i32Bits(0b00000000100000000000000000000000), expected: i32Bits(0b00000000000000000000000100000000) },
  { input: i32Bits(0b00000001000000000000000000000000), expected: i32Bits(0b00000000000000000000000010000000) },
  { input: i32Bits(0b00000010000000000000000000000000), expected: i32Bits(0b00000000000000000000000001000000) },
  { input: i32Bits(0b00000100000000000000000000000000), expected: i32Bits(0b00000000000000000000000000100000) },
  { input: i32Bits(0b00001000000000000000000000000000), expected: i32Bits(0b00000000000000000000000000010000) },
  { input: i32Bits(0b00010000000000000000000000000000), expected: i32Bits(0b00000000000000000000000000001000) },
  { input: i32Bits(0b00100000000000000000000000000000), expected: i32Bits(0b00000000000000000000000000000100) },
  { input: i32Bits(0b01000000000000000000000000000000), expected: i32Bits(0b00000000000000000000000000000010) },
  { input: i32Bits(0b10000000000000000000000000000000), expected: i32Bits(0b00000000000000000000000000000001) },

  // 1's after leading 1
  { input: i32Bits(0b00000000000000000000000000000011), expected: i32Bits(0b11000000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000000111), expected: i32Bits(0b11100000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000001111), expected: i32Bits(0b11110000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000011111), expected: i32Bits(0b11111000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000111111), expected: i32Bits(0b11111100000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000001111111), expected: i32Bits(0b11111110000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000011111111), expected: i32Bits(0b11111111000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000111111111), expected: i32Bits(0b11111111100000000000000000000000) },
  { input: i32Bits(0b00000000000000000000001111111111), expected: i32Bits(0b11111111110000000000000000000000) },
  { input: i32Bits(0b00000000000000000000011111111111), expected: i32Bits(0b11111111111000000000000000000000) },
  { input: i32Bits(0b00000000000000000000111111111111), expected: i32Bits(0b11111111111100000000000000000000) },
  { input: i32Bits(0b00000000000000000001111111111111), expected: i32Bits(0b11111111111110000000000000000000) },
  { input: i32Bits(0b00000000000000000011111111111111), expected: i32Bits(0b11111111111111000000000000000000) },
  { input: i32Bits(0b00000000000000000111111111111111), expected: i32Bits(0b11111111111111100000000000000000) },
  { input: i32Bits(0b00000000000000001111111111111111), expected: i32Bits(0b11111111111111110000000000000000) },
  { input: i32Bits(0b00000000000000011111111111111111), expected: i32Bits(0b11111111111111111000000000000000) },
  { input: i32Bits(0b00000000000000111111111111111111), expected: i32Bits(0b11111111111111111100000000000000) },
  { input: i32Bits(0b00000000000001111111111111111111), expected: i32Bits(0b11111111111111111110000000000000) },
  { input: i32Bits(0b00000000000011111111111111111111), expected: i32Bits(0b11111111111111111111000000000000) },
  { input: i32Bits(0b00000000000111111111111111111111), expected: i32Bits(0b11111111111111111111100000000000) },
  { input: i32Bits(0b00000000001111111111111111111111), expected: i32Bits(0b11111111111111111111110000000000) },
  { input: i32Bits(0b00000000011111111111111111111111), expected: i32Bits(0b11111111111111111111111000000000) },
  { input: i32Bits(0b00000000111111111111111111111111), expected: i32Bits(0b11111111111111111111111100000000) },
  { input: i32Bits(0b00000001111111111111111111111111), expected: i32Bits(0b11111111111111111111111110000000) },
  { input: i32Bits(0b00000011111111111111111111111111), expected: i32Bits(0b11111111111111111111111111000000) },
  { input: i32Bits(0b00000111111111111111111111111111), expected: i32Bits(0b11111111111111111111111111100000) },
  { input: i32Bits(0b00001111111111111111111111111111), expected: i32Bits(0b11111111111111111111111111110000) },
  { input: i32Bits(0b00011111111111111111111111111111), expected: i32Bits(0b11111111111111111111111111111000) },
  { input: i32Bits(0b00111111111111111111111111111111), expected: i32Bits(0b11111111111111111111111111111100) },
  { input: i32Bits(0b01111111111111111111111111111111), expected: i32Bits(0b11111111111111111111111111111110) },
  { input: i32Bits(0b11111111111111111111111111111111), expected: i32Bits(0b11111111111111111111111111111111) },

  // random after leading 1
  { input: i32Bits(0b00000000000000000000000000000110), expected: i32Bits(0b01100000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000001101), expected: i32Bits(0b10110000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000011101), expected: i32Bits(0b10111000000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000000111001), expected: i32Bits(0b10011100000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000001101111), expected: i32Bits(0b11110110000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000011111111), expected: i32Bits(0b11111111000000000000000000000000) },
  { input: i32Bits(0b00000000000000000000000111101111), expected: i32Bits(0b11110111100000000000000000000000) },
  { input: i32Bits(0b00000000000000000000001111111111), expected: i32Bits(0b11111111110000000000000000000000) },
  { input: i32Bits(0b00000000000000000000011111110001), expected: i32Bits(0b10001111111000000000000000000000) },
  { input: i32Bits(0b00000000000000000000111011011101), expected: i32Bits(0b10111011011100000000000000000000) },
  { input: i32Bits(0b00000000000000000001101101111111), expected: i32Bits(0b11111110110110000000000000000000) },
  { input: i32Bits(0b00000000000000000011111111011111), expected: i32Bits(0b11111011111111000000000000000000) },
  { input: i32Bits(0b00000000000000000101111001110101), expected: i32Bits(0b10101110011110100000000000000000) },
  { input: i32Bits(0b00000000000000001101111011110111), expected: i32Bits(0b11101111011110110000000000000000) },
  { input: i32Bits(0b00000000000000011111111111110011), expected: i32Bits(0b11001111111111111000000000000000) },
  { input: i32Bits(0b00000000000000111111111110111111), expected: i32Bits(0b11111101111111111100000000000000) },
  { input: i32Bits(0b00000000000001111111011111111111), expected: i32Bits(0b11111111111011111110000000000000) },
  { input: i32Bits(0b00000000000011111111111111111111), expected: i32Bits(0b11111111111111111111000000000000) },
  { input: i32Bits(0b00000000000111110101011110111111), expected: i32Bits(0b11111101111010101111100000000000) },
  { input: i32Bits(0b00000000001111101111111111110111), expected: i32Bits(0b11101111111111110111110000000000) },
  { input: i32Bits(0b00000000011111111111010000101111), expected: i32Bits(0b11110100001011111111111000000000) },
  { input: i32Bits(0b00000000111111111111001111111011), expected: i32Bits(0b11011111110011111111111100000000) },
  { input: i32Bits(0b00000001111111011111101111111111), expected: i32Bits(0b11111111110111111011111110000000) },
  { input: i32Bits(0b00000011101011111011110111111011), expected: i32Bits(0b11011111101111011111010111000000) },
  { input: i32Bits(0b00000111111110111111111111111111), expected: i32Bits(0b11111111111111111101111111100000) },
  { input: i32Bits(0b00001111000000011011011110111111), expected: i32Bits(0b11111101111011011000000011110000) },
  { input: i32Bits(0b00011110101111011111111111111111), expected: i32Bits(0b11111111111111111011110101111000) },
  { input: i32Bits(0b00110110111111100111111110111101), expected: i32Bits(0b10111101111111100111111101101100) },
  { input: i32Bits(0b01010111111101111111011111011111), expected: i32Bits(0b11111011111011111110111111101010) },
  { input: i32Bits(0b11100010011110101101101110101111), expected: i32Bits(0b11110101110110110101111001000111) }]);

});
//# sourceMappingURL=reverseBits.spec.js.map