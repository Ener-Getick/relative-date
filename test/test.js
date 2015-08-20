if(typeof require != 'undefined')
  var relativeDate = require('../lib/relative-date');

var SECOND = 1000,
  MINUTE = 60 * SECOND,
  HOUR = 60 * MINUTE,
  DAY = 24 * HOUR,
  WEEK = 7 * DAY,
  YEAR = DAY * 365,
  MONTH = YEAR / 12;

var reference = 157765000000, // 01.01.1975 00:00
  spans = [
    [
      {
        en: 'just now',
        fr: 'à l\'instant'
      },
      reference * SECOND
    ],
    [
      {
        en: 'just now',
        fr: 'à l\'instant'
      },
      reference - 41 * SECOND
    ],
    [
      {
        en: 'a minute ago',
        fr: 'il y a une minute'
      },
      reference - 42 * SECOND
    ],
    [
      {
        en: 'a minute ago',
        fr: 'il y a une minute'
      },
      reference - MINUTE
    ],
    [
      {
        en: '2 minutes ago',
        fr: 'il y a 2 minutes'
      },
      reference - MINUTE * 1.5
    ],
    [
      {
        en: '59 minutes ago',
        fr: 'il y a 59 minutes'
      },
      reference - MINUTE * 59
    ],
    [
      {
        en: 'an hour ago',
        fr: 'il y a une heure'
      },
      reference - HOUR
    ],
    [
      {
        en: '2 hours ago',
        fr: 'il y a 2 heures'
      },
      reference - HOUR * 1.5
    ],
    [
      {
        en: '16 hours ago',
        fr: 'il y a 16 heures'
      },
      reference - HOUR * 16
    ],
    [
      {
        en: '23 hours ago',
        fr: 'il y a 23 heures'
      },
      reference - HOUR * 23
    ],
    [
      {
        en: 'yesterday',
        fr: 'hier'
      },
      reference - DAY * 1.8
    ],
    [
      {
        en: '3 days ago',
        fr: 'il y a 3 jours'
      },
      reference - DAY * 3
    ],
    [
      {
        en: '6 days ago',
        fr: 'il y a 6 jours'
      },
      reference - DAY * 6
    ],
    [
      {
        en: 'a week ago',
        fr: 'il y a une semaine'
      },
      reference - WEEK
    ],
    [
      {
        en: '2 weeks ago',
        fr: 'il y a 2 semaines'
      },
      reference - WEEK * 2
    ],
    [
      {
        en: '4 weeks ago',
        fr: 'il y a 4 semaines'
      },
      reference - WEEK * 4
    ],
    [{
      en: 'a month ago',
      fr: 'il y a un mois'
    }, reference - MONTH * 1.2],
    [{
      en: '12 months ago',
      fr: 'il y a 12 mois'
    }, reference - YEAR + HOUR],
    [
      {
        en: 'a year ago',
        fr: 'il y a un an'
      },
      reference - YEAR
    ],
    [
      {
        en: '2 years ago',
        fr: 'il y a 2 ans'
      },
      reference - YEAR * 2
    ],
    [
      {
        en: '5 years ago',
        fr: 'il y a 5 ans'
      },
      0
    ]
  ];

function test(test) {
  var now = new Date().getTime();
  test.equal(relativeDate(0), Math.round(now / YEAR) + ' years ago');

  var element;
  for (var i = 0; i < spans.length; i++) {
    element = spans[i];
    for(var k in element[0]) {
      test.equal(relativeDate(element[1], reference, k), element[0][k]);
    }
  }
  test.done();
}

if(typeof module != 'undefined' && typeof module.exports != 'undefined')
  module.exports = {
    test: test
  };
