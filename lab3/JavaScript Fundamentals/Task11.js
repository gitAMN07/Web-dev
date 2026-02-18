alert( null || 2 || undefined );//2
alert( alert(1) || 2 || alert(3) );//1 and then 2
alert( 1 && null && 2 );//null
alert( alert(1) && alert(2) );//1
alert( null || 2 && 3 || 4 );//3
if (age >= 14 && age <= 90);
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);
if (-1 || 0) alert( 'first' );//execute
if (-1 && 0) alert( 'second' );//doesn't execute
if (null || -1 && 1) alert( 'third' );//1