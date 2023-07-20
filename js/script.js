document.addEventListener('DOMContentLoaded', function(event) {
	const body = document.querySelector("body");
  const Button = document.querySelectorAll("[data-topopup]");
  if(Button){
	  Button.forEach(function (Button) {
	    Button.addEventListener("click", function (event) {
	    	event.preventDefault();
	      const dataPopup = this.getAttribute("data-topopup");
	      const dataClassPopup = document.querySelector(`${dataPopup}`);
	      if (dataClassPopup !== null) {
	        dataClassPopup.classList.add("open");
	        body.classList.add('lock');	
	      }			
	    });
	  });  	
  }

	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose) {
		    popupClose.addEventListener('click', function(event) {
		    		var body = document.querySelector('body');
		    		body.classList.remove('lock');	
		    		popupClose.closest('.popup').classList.remove('open');
		    });
		});		
	}

  if(document.querySelector('.cards__slider')){
      new Swiper('.cards__slider', {
        speed: 600,
        slidesPerView: 1,
        loop:true,
			  navigation: {
			    nextEl: '.swiper-button-next',
			    prevEl: '.swiper-button-prev',
			  },
      });
   }
  if(document.querySelector('.main-swiper')){
      new Swiper('.main-swiper', {
        speed: 600,
        slidesPerView: 1,
        loop:true,
			  navigation: {
			    nextEl: '.swiper-button-next',
			    prevEl: '.swiper-button-prev',
			  },
			  pagination: {
			    el: '.swiper-pagination',
			    type: 'bullets',
			  },

      });
   }   
   Fancybox.bind("[data-fancybox]");
});

