const { getBreakdown, loadJsonFiles } = require('./db');

describe('test suite for db', () => {
  beforeAll(() => {
    loadJsonFiles();
  });

  test('user should be able to query breakdown year', () => {
    const data = getBreakdown(['year']);
    expect(data.breakDownType).toBe('year');
    expect(data.breakdown.find((b) => b.key == 2011).percentage).toBe(80);
    expect(data.breakdown.find((b) => b.key == 2010).percentage).toBe(10);
    expect(data.breakdown.find((b) => b.key == 2013).percentage).toBe(5);
    expect(data.breakdown.find((b) => b.key == 2014).percentage).toBe(10);
    expect(data.breakdown.find((b) => b.key == 2015).percentage).toBe(60);
  });

  test('user should be able to query breakdown variety', () => {
    const data = getBreakdown(['variety']);
    expect(data.breakDownType).toBe('variety');
    expect(data.breakdown.find((b) => b.key == 'Pinot Noir').percentage).toBe(
      60,
    );
    expect(data.breakdown.find((b) => b.key == 'Chardonnay').percentage).toBe(
      80,
    );
    expect(data.breakdown.find((b) => b.key == 'Merlot').percentage).toBe(3);
    expect(data.breakdown.find((b) => b.key == 'Shiraz').percentage).toBe(1);
    expect(data.breakdown.find((b) => b.key == 'Zinfandel').percentage).toBe(2);
    expect(data.breakdown.find((b) => b.key == 'Malbec').percentage).toBe(2);
    expect(data.breakdown.find((b) => b.key == 'Cabernet').percentage).toBe(5);
  });


  test('user should be able to query breakdown region', () => {
    const data = getBreakdown(['region']);
    console.log(data);
    expect(data.breakDownType).toBe('region');
    expect(data.breakdown.find((b) => b.key == 'Mornington').percentage).toBe(
      60,
    );
    expect(data.breakdown.find((b) => b.key == 'Yarra Valley').percentage).toBe(
      80,
    );
    expect(data.breakdown.find((b) => b.key == 'Macedon').percentage).toBe(10);
    expect(data.breakdown.find((b) => b.key == 'Port Phillip').percentage).toBe(2);
    expect(data.breakdown.find((b) => b.key == 'Heathcote').percentage).toBe(5);
  });


  test('user should be able to query breakdown year and variety', () => {
    const data = getBreakdown(['year', 'variety']);
    console.log(data);
    expect(data.breakDownType).toBe('year-variety');
    expect(data.breakdown.find((b) => b.key == '2011-Pinot Noir').percentage).toBe(
      5,
    );
    expect(data.breakdown.find((b) => b.key == '2011-Chardonnay').percentage).toBe(
      80,
    );
    expect(data.breakdown.find((b) => b.key == '2010-Pinot Noir').percentage).toBe(5);
    expect(data.breakdown.find((b) => b.key == '2010-Chardonnay').percentage).toBe(10);
    expect(data.breakdown.find((b) => b.key == '2015-Pinot Noir').percentage).toBe(60);
    expect(data.breakdown.find((b) => b.key == '2014-Pinot Noir').percentage).toBe(10);
    expect(data.breakdown.find((b) => b.key == '2015-Merlot').percentage).toBe(3);
    expect(data.breakdown.find((b) => b.key == '2015-Shiraz').percentage).toBe(1);
    expect(data.breakdown.find((b) => b.key == '2015-Zinfandel').percentage).toBe(2);
    expect(data.breakdown.find((b) => b.key == '2014-Malbec').percentage).toBe(2);
    expect(data.breakdown.find((b) => b.key == '2013-Cabernet').percentage).toBe(5);
  });
});
