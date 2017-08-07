/* -------------------------------------------------------------------------------- /
	
	Magentech jQuery
	Created by Magentech
	v1.0 - 20.9.2016
	All rights reserved.
	
/ -------------------------------------------------------------------------------- */


	// Cart add remove functions
	var cart = {
		'add': function(product_id, quantity) {
			addProductNotice('加入了购物车', '<img src="image/demo/shop/product/e11.jpg" alt="">', '<h3><a href="#">三星H500D"</a> 加入了 <a href="#">购物车</a>!</h3>', 'success');
		}
	}

	var wishlist = {
		'add': function(product_id) {
			addProductNotice('加入了愿望清单', '<img src="image/demo/shop/product/e11.jpg" alt="">', ' <a href="#">Apple Cinema 30"</a> 加入了 <a href="#">愿望清单</a>!</h3>', 'success');
		}
	}
	

	/* ---------------------------------------------------
		jGrowl – jQuery alerts and message box
	-------------------------------------------------- */
	function addProductNotice(title, thumb, text, type) {
		$.jGrowl.defaults.closer = false;
		//Stop jGrowl
		//$.jGrowl.defaults.sticky = true;
		var tpl = thumb + '<h3>'+text+'</h3>';
		$.jGrowl(tpl, {		
			life: 4000,
			header: title,
			speed: 'slow',
			theme: type
		});
	}

