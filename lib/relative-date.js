var SECOND = 1000,
  MINUTE = 60 * SECOND,
  HOUR = 60 * MINUTE,
  DAY = 24 * HOUR,
  WEEK = 7 * DAY,
  YEAR = DAY * 365,
  MONTH = YEAR / 12;

var formats = [
  [
    0.7 * MINUTE,
    { en: ['just now'], fr: ['à l\'instant'] }
  ],
  [
    1.5 * MINUTE,
    { en: ['a minute ago'], fr: ['il y a une minute'] }
  ],
  [
    60 * MINUTE,
    { en: [MINUTE, ' minutes ago'], fr: ['il y a ', MINUTE, ' minutes'] }
  ],
  [
    1.5 * HOUR,
    { en: ['an hour ago'], fr: ['il y a une heure'] }
  ],
  [
    DAY,
    { en: [HOUR, ' hours ago'], fr: ['il y a ', HOUR, ' heures'] }
  ],
  [
    2 * DAY,
    { en: ['yesterday'], fr: ['hier'] }
  ],
  [
    7 * DAY,
    { en: [DAY, ' days ago'], fr: ['il y a ', DAY, ' jours'] }
  ],
  [
    1.5 * WEEK,
    { en: ['a week ago'], fr: ['il y a une semaine'] }
  ],
  [
    MONTH,
    { en: [WEEK, ' weeks ago'], fr: ['il y a ', WEEK, ' semaines'] }
  ],
  [
    1.5 * MONTH,
    { en: ['a month ago'], fr: ['il y a un mois'] }
  ],
  [
    YEAR,
    { en: [MONTH, ' months ago'], fr: ['il y a ', MONTH, ' mois'] }
  ],
  [
    1.5 * YEAR,
    { en: ['a year ago'], fr: ['il y a un an'] }
  ],
  [
    Number.MAX_VALUE,
    { en: [YEAR, ' years ago'], fr: ['il y a ', YEAR, ' ans'] }
  ]
];

function relativeDate(input, reference, locale) {
  // Set default locale
  if (typeof locale == 'undefined' || locale === null)
    locale = 'en';

  // Transform reference to an int
  if (typeof reference == 'undefined' || reference === null)
    reference = new Date().getTime();
  else if (reference instanceof Date)
    reference = reference.getTime();

  // Transform input to an int
  if (input instanceof Date)
    input = input.getTime();

  var delta = reference - input,
    format;
  for (var i = 0; i < formats.length; i++) {
    format = formats[i];
    if (delta < format[0]) {
      var str = '', part;
      for(var j = 0; j < format[1][locale].length; j++) {
        part = format[1][locale][j];
        if(typeof part == 'number')
          str += Math.round(delta / part);
        else
          str += part;
      }
      return str;
    }
  }
}

if (typeof module != 'undefined' && module.exports)
  module.exports = relativeDate;
