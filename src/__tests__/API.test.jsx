import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

describe('Request Universities of UAE', () => {
  let response;
  let body;

  beforeAll(async () => {
    response = await fetch(
      'http://universities.hipolabs.com/search?country=United%20Arab%20Emirates',
    );
    body = await response.json();
  }, BEFORE_ALL_TIMEOUT);

  test('Should have response status 200', () => {
    expect(response.status).toBe(200);
  });

  test('Should have content-type', () => {
    expect(response.headers.get('Content-Type')).toBe('application/json');
  });

  test('Should have array in the body', () => {
    expectTypeOf(body).toBeArray();
  });

  test('The first item in array should contain United Arab Emirate in country key', () => {
    expect(body[0].country).to.have.string('United Arab Emirate');
  });
});