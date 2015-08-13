
var bars = [
          { name:'bar1',progress: 5,color:'#006600',liveColor:'#006600'},
          { name:'bar2',progress: 10,color:'#FF6600',liveColor:'#FF6600'},
	  { name:'bar3',progress: 15,color:'#0066FF',liveColor:'#0066FF'},
	  { name:'bar4',progress: 30,color:'#CC99FF',liveColor:'#CC99FF'},
];

var ractive = new Ractive({
  el: document.body,
  template: '#template',
  data: {bars: bars}
});

ractive.on( 'activate', function ( event ) {
  handleEvent(event);
  //this method will pass the entire event to the HTML page 
});
