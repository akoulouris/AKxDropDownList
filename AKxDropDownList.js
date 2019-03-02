
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
    function ToggleDropContent(id, idDropitem, idDropline) {
				var dropdowns = document.getElementsByClassName("dropdown-contentAK");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
					
					var openDropdown = dropdowns[i];
					if (id !== openDropdown.id) {
						$(dropdowns[i]).slideUp("slow");  
					}
				   
				}
           $("#" + id).slideToggle("slow");
      

        div = document.getElementById(idDropitem);
        a = div.getElementsByTagName("a");
				for (i = 0; i < a.length - 1; i++)
				{
				   a[i].style.backgroundColor = "#f1f1f1";
				
				   if (a[i].textContent == document.getElementById(idDropline).innerText) {
					   
				 
						a[i].style.backgroundColor = "lightgray";
						a[i].scrollIntoView();
						
					}

				}
        
    }


    //$.getScript("https://raw.github.com/akoulouris/AKxDropDownList/master/AKxDropDown
   
// Close the dropdown if the user clicks outside of it
    $.fn.AKxDropDown = function (options) {
			var dropdown_content_height, dropdown__height;
       
			if (options)
			{
				dropdown_content_height = ((typeof options.dropdown_content_height == 'undefined') ? '223px' : options.dropdown_content_height);
				line_height = ((typeof options.line_height == 'undefined') ? 2 : options.line_height);
			}

			else
			{
				line_height =2
				dropdown_content_height ='223px'
			   
			}
			var myObject = $(this);

			dropdown__height = document.getElementById(myObject.selector).style.height;
 
       
        
       

			var optionLen = document.getElementById(myObject.selector).options.length;
			var optionsSelect = document.getElementById(myObject.selector).options;
			
			
			var div = document.createElement("div");
			var width = document.getElementById(myObject.selector).style.width;
			var height = document.getElementById(myObject.selector).style.height;
			var rowWidth = parseInt(width)-2
       
       
        
			div.style.width = width;
			div.style.maxWidth = width;
			div.style.display = "inline-block";
			div.style.height = height;
			div.style.marginBottom = document.getElementById(myObject.selector).style.marginBottom;
			div.style.marginLeft = document.getElementById(myObject.selector).style.marginLeft;
			div.style.marginRight = document.getElementById(myObject.selector).style.marginRight;
			div.style.marginTop = document.getElementById(myObject.selector).style.marginTop;
			div.style.background = "";
			div.style.color = "white";
			div.id = "Drop"
			div.innerHTML = "";
        
			document.getElementById(myObject.selector).style.visibility = "hidden";
			document.getElementById(myObject.selector).style.display = "none";


       
            var clone = document.getElementById(myObject.selector).cloneNode(true);
            div.appendChild(clone);
      
            var selected = "";
				   for (var i = 0; i < clone.options.length; i++) {
					   if (clone.options[i].selected ==true) {
						   selected = clone.options[i].text;
						   break;
					   }

				    }
                   document.getElementById(myObject.selector).replaceWith(div);

      
      

      

       
          var i;
          var selector = "'" + myObject.selector + "'"
          var idDropContent = "'" + myObject.selector + "DropContent'"
          var idDropline = "'" + myObject.selector + "Dropline'"
          var idDropsearch = "'" + myObject.selector + "Search'"
          var idDropitem = "'" + myObject.selector + "Items'"

          
         
			var DropDownAKSummarString = '<div   class="dropdown"> ' +
				'<span id="Dropdown"><span id="' + myObject.selector + 'Dropline"   onclick="ToggleDropContent(' + idDropContent + ',' + idDropitem + ',' + idDropline + ')"  style="line-height:' + dropdown__height + ';" class="wrapper-dropdown dropbtn">' + selected +'</span></span>' +
				//'<div style=" border: 1px solid #ddd; top: 39px;width:' + width + ';     min-width: ' + width + ';" id="myDropdown" class="dropdown-content">' +
				'<div style=" border: 1px solid #ddd; top: ' + dropdown__height + '; width:' + width + ';  max-width:' + width + ';     min-width: ' + width + ';" id="' + myObject.selector + 'DropContent" class="dropdown-contentAK">' +
			  '<div id="search">' +
				'<input id="' + myObject.selector + 'Search"  onkeyup="filterFunction(' + idDropsearch + ',' + idDropitem +')"  type= "text" autocomplete="off"   class="search" placeholder="Search.."  value="">' +
			'</div>' +
				'<div id="' + myObject.selector + 'Items" style="overflow-y:overlay ;overflow-x: auto;   max-height: ' + dropdown_content_height+';">'  
            

      

			for (i = 0; i < optionLen; i++) {
		   
				var text = "'" + optionsSelect[i].innerText + "'";
				DropDownAKSummarString = DropDownAKSummarString + '<li style="  min-width:' + rowWidth + 'px;  width:auto;  display:table-row;"><a style=" display: block; width: 100%; min-width:' + rowWidth + 'px;  line-height:' + line_height + ';" onclick="clickList(' + text + ',' + idDropline + ',' + selector +');" href="#' + text + '">' + optionsSelect[i].innerText +'</a></li>';
			}
				DropDownAKSummarString = DropDownAKSummarString + '<a style="display:none;" href="#NoMatch" >No Match</a>'
            
            DropDownAKSummarString = DropDownAKSummarString +'</div></div></div>';
        
     
       
        var a = document.createElement("span");
        document.getElementById('Drop').innerHTML += DropDownAKSummarString;
        
        
    }
    function clickList(text, idDropline, selector) {
        
        document.getElementById(idDropline).innerText = text;
       
        var textToFind = text;
        var dd = document.getElementById(selector);
        for (var i = 0; i < dd.options.length; i++) {
            if (dd.options[i].text === textToFind) {
                dd.options[i].selected = true;
                break;
            }

        }
    }
    
    function filterFunction(idDropsearch, idDropitem) {
        
        var input, filter, ul, li, a, i,noMatch=0;
        input = document.getElementById(idDropsearch);
        filter = input.value.toUpperCase();   
        div = document.getElementById(idDropitem);
        div.lastElementChild.style.display = "none";
        a = div.getElementsByTagName("a");
			for (i = 0; i < a.length-1; i++) {
				txtValue = a[i].textContent || a[i].innerText;
				if (txtValue.toUpperCase().indexOf(filter) > -1) {
					a[i].style.display = "";
				} else {
					noMatch += 1;
					a[i].style.display = "none";
				}
			}
        
			if (noMatch == a.length - 1 ) {         
				div.lastElementChild.style.display = "block"; 

			}
    } 

 
    
    window.onclick = function (event) {
				if (!event.target.matches('.search')) {
					if (!event.target.matches('.dropbtn')) {

						var dropdowns = document.getElementsByClassName("dropdown-contentAK");
						var i;
						for (i = 0; i < dropdowns.length; i++) {
							var openDropdown = dropdowns[i];
							$(dropdowns[i]).slideUp("slow");
						   
						}
					}
				}
	}