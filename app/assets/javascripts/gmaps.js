var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        lat: +33.463740,
        lng: -86.781617
      });
      map.addMarker({
        lat: +33.463740,
        lng: -86.781617,
        title: 'Covenant Presbyterian Church',
        details: {
          database_id: 42,
          author: 'HPNeo'
        },
        mouseover: function(e){
          if(console.log)
            console.log(e);
        }
      });
      map.addMarker({
        lat: +33.516084,
        lng: -86.802764,
        title: 'Wine Loft Birmingham',
        details: {
          database_id: 42,
          author: 'HPNeo'
        },
        mouseover: function(e){
          if(console.log)
            console.log(e);
        }
      });
      map.addMarker({
        lat: +33.507962,
        lng: -86.798129,
        title: 'The Fish Market',
        details: {
          database_id: 42,
          author: 'HPNeo'
        },
        mouseover: function(e){
          if(console.log)
            console.log(e);
        }
      });

      map.addMarker({
        lat: +33.469594,
        lng: -86.775169,
        title: 'Courtyard Birmingham',
        details: {
          database_id: 42,
          author: 'HPNeo'
        },
        mouseover: function(e){
          if(console.log)
            console.log(e);
        }
      });

      map.addMarker({
        lat: +33.479295,
        lng: -86.789224,
        title: 'Aloft Soho Square',
        details: {
          database_id: 42,
          author: 'HPNeo'
        },
        mouseover: function(e){
          if(console.log)
            console.log(e);
        }
      });
    
    });