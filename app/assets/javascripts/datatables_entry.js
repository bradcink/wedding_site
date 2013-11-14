$(document).ready( function () {
	$('#users').dataTable( {
		"sDom": '<'row'<'span8'l><'span8'f>r>t<'row'<'span8'i><'span8'p>>',
		"sPaginationType": "bootstrap",
		"bjQueryUI": true,
		"oTableTools": {
			"sRowSelect": "multi",
			"aButtons": [ "select_all", "select_none" ]
		}
	} );
} );