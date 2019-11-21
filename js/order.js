 $(function() {

       

        $("#datepicker").datepicker({ 
            dateFormat: "yy-mm-dd"
           }).datepicker("setDate", new Date());




        $(".timepicker").timepicki({

          timeFormat: 'h:mm p',
          defaultTime: 'now',
        
          })

   
	 
   
		    $('[data-toggle="address-autocomplete"]').each(function (index) {
        new google.maps.places.Autocomplete(
            $(this)[0],
            {types: []});
         });
	
	     $("#newOrder").click(function(){
        $("#new_orderModal").modal();

         });

     $("#add_items").click(function(before){
      $("#order_items").append('<div class="form-inline mb-1">'+
                                     '<input type="text" name="name[]" class="form-control form-control-sm mr-sm-1" placeholder="name" style="width: 100px;" required="">'+
                                   
                                 
                                    '<input type="number" id="item_price" name="price[]" class="form-control form-control-sm mr-sm-1" placeholder="price" min="0" step="0.01" style="width: 90px;" required="">'+
                                   
                            
                                   '<input type="number" id="item_quantity" name="quantity[]" class="form-control form-control-sm pr-0" placeholder="qty" min="0" style="width: 79px;" required="">'+
                                   '</div>');

     });
   


    });