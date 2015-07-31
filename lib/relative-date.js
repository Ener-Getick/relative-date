var relativeDate = (function(undefined){

  var SECOND = 1000,
      MINUTE = 60 * SECOND,
      HOUR = 60 * MINUTE,
      DAY = 24 * HOUR,
      WEEK = 7 * DAY,
      YEAR = DAY * 365,
      MONTH = YEAR / 12;

  var formats = [
    [ 0.7 * MINUTE, 'à l\'instant' ],
    [ 1.5 * MINUTE, 'il y a une minute' ],
    [ 60 * MINUTE, 'il y a', MINUTE, 'minutes' ],
    [ 1.5 * HOUR, 'il y a une heure' ],
    [ DAY, 'il y a', HOUR, 'heures' ],
    [ 2 * DAY, 'hier' ],
    [ 7 * DAY, 'il y a', DAY, 'jours' ],
    [ 1.5 * WEEK, 'il y a une semaine'],
    [ MONTH, 'il y a', WEEK, 'semaines' ],
    [ 1.5 * MONTH, 'il y a un mois' ],
    [ YEAR, 'il y a', MONTH, 'mois' ],
    [ 1.5 * YEAR, 'il y a un an' ],
    [ Number.MAX_VALUE, 'il y a', YEAR, 'années' ]
  ];

  function relativeDate(input,reference){
    !reference && ( reference = (new Date).getTime() );
    reference instanceof Date && ( reference = reference.getTime() );
    input instanceof Date && ( input = input.getTime() );
    
    var delta = reference - input,
        format, i, len;

    for(i = -1, len=formats.length; ++i < len; ){
      format = formats[i];
      if(delta < format[0]){
        if(format[3] == undefined) {
          format[3] = '';
        }
        return format[2] == undefined ? format[1] : format[1] + ' ' + Math.round(delta/format[2]) + ' ' + format[3];
      }
    };
  }

  return relativeDate;
})();

if(typeof module != 'undefined' && module.exports){
  module.exports = relativeDate;
}
