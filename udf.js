function transform(line){
    var values = line.split(',');
    var obj = new Object();
    obj.Sno = values[0];
    obj.Date = values[1];
    obj.Time = values[2];
    obj.StateUnionTerritory = values[3];
    obj.ConfirmedIndianNational = values[4];
    obj.ConfirmedForeignNational = values[5];
    obj.Cured = values[6];
    obj.Deaths = values[7];
    obj.Confirmed = values[8];
    var jsonString = JSON.stringify(obj);
    return jsonString;
   }