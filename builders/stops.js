module.exports = function(data){
  var stops = [];
  _.each(data, function(element){
    if (element.type == 'node' ){
      if (element.tags.public_transport && element.tags.public_transport == 'platform'){
        stops.push({
          'stop_id': element.id,
          'stop_code': element.tags.ref || element.tags.rel,
          'stop_name': element.tags.name || element.tags['addr:street'],
          'stop_desc': element.tags.desc,
          'stop_lat': element.lat,
          'stop_lon': element.lon
        });
      }
    }
  });
  return stops;
};