 $(function() {

       

        $("#datepicker").datepicker({ 
            dateFormat: "yy-mm-dd"
           }).datepicker("setDate", new Date());




        $(".timepicker").timepicki({

          timeFormat: 'h:mm p',
          defaultTime: 'now',
        
          })

   
	 
   
		  $('[data-toggle="address-autocomplete"]').each(function (index) {
			  console.log('hello');
        new google.maps.places.Autocomplete(
            $(this)[0],
            {types: []});
    });
	
	$("#myBtn").click(function(){
        $("#myModal").modal();
         });

  
   


    });