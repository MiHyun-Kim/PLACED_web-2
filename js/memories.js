/**
 * Memories JS 
 */


/**
 * display_layer()
 *
 * Purpose:  Function will updated background color and displayed parts of
 *			 of the form.
 *
 */

function display_layer(current_layer, next_layer)
{
	//  Setting up variables
    var old = document.getElementById(current_layer);		//  Old content being hidden
    var next = document.getElementById(next_layer);			//  New content being displayed
    var navigaton = document.getElementById("navigation");	//  Navigation on initial homepage
    var flag = true;
	var animate = "";


    //  Updating background color based on passed information
    switch(next_layer)
    {        
        case "location":
            navigaton.style.display="none";
            document.getElementById("location").style.color="black";
            document.body.style.backgroundColor="#496dac";
            break;

        case "memory_type":

           /*if(!$("#city").val())
                $("#city").effect("shake");

            if(!$("#state").val())
                $("#state").effect("shake");

            if(!$("#country").val())
                $("#country").effect("shake");

            if(!$("#city").val() || !$("#state").val() || !$("#country").val())
                flag = false;
            else
                flag = true;*/
            
            if(flag)
                document.body.style.backgroundColor="#ffffff";
            break;

        case "memory":
			
            document.body.style.backgroundColor="#9a53a1";
            animate=true;
            break;
    } 

    if(flag)
    {
        //  Hiding old content
       
        //  Displaying new content
        //$("#"+next_layer).toggle('slow'); 
		if(animate)
		{
			
         $("#"+next_layer).slideDown('slow', function(){
            document.getElementById("share-your-memory").scrollIntoView({behavior:'smooth',block: 'start' });
            
            $("#memory_type .row_memory .row img").css('margin-bottom',"1%");
            $("#memory_type .question").css("margin-bottom", "-1%");
            $("#memory .question").css("margin-top", "-1%");
            $("#submit_button").css("margin-top","8%");
            $("#memory_details").css("padding", "2% 4% 4% 4%");
            
            });
         

			//$('body').css('overflow','');
					
		}
		else
		{
			 old.style.display = "none";
			$("#"+next_layer).toggle(); 
		}			
    }
}

/**
 * login_switch
 * 
 * Purpose: Function will modify login fields based on option selected.
 */
function login_switch(e)
{

    switch(e)
    {
        //  Create New Account
        case 1:

            //  Verifying create account fields are displayed
            if($('#modal_create_account').css('display')!="block")
                $('#modal_create_account').slideToggle('2000', "easeOutBounce");

             $("#email_1").removeAttr("disabled");
             $("#password_1").removeAttr("disabled");
             $("#modal_login_submit").html("Create Account");
             $("#login").val(0);

             //  Deactiving Login Fields
             if($('#modal_login_account').css('display') == 'block')
             {
                $('#modal_login_account').slideToggle('2000', "easeOutBounce");
                $("#email_2").attr("disabled", "disabled");
                $("#password_2").attr("disabled", "disabled");
             }

             //  Deactivating reset option
             if($('#modal_login_reset').css('display') == 'block')
             {
                $('#modal_login_reset').slideToggle('2000', "easeOutBounce");
                $("#email_3").attr("disabled", "disabled");
             }

        break;

        //  Login Option
        case 2:

             //  Verifying login fields are displayed
             if($('#modal_login_account').css('display')!="block")
                $('#modal_login_account').slideToggle('2000', "easeOutBounce");

             $("#email_2").removeAttr("disabled");
             $("#password_2").removeAttr("disabled");
             $("#modal_login_submit").html("Login");
             $("#login").val(1);
            
             //  Deactiving Account Creation Fields
             if($('#modal_create_account').css('display')=='block')
             {
                $('#modal_create_account').slideToggle('2000', "easeOutBounce");
                $("#email_1").attr("disabled", "disabled");
                $("#password_1").attr("disabled", "disabled");
             }

             //  Deactivating reset option
             if($('#modal_login_reset').css('display') == 'block')
             {
                $('#modal_login_reset').slideToggle('2000', "easeOutBounce");
                $("#email_3").attr("disabled", "disabled");
             }
             

        break;

        //  Reset Option
        case 3:
            //  Verifying reset fields are displayed
            if($('#modal_login_reset').css('display')!="block")
                $('#modal_login_reset').slideToggle('2000', "easeOutBounce");            
            $("#email_3").removeAttr("disabled");
            $("#modal_login_submit").html("Reset Password");
            $("#login").val(2);

            //  Deactiving Account Creation Fields
            if($('#modal_create_account').css('display')=='block')
             {
                $('#modal_create_account').slideToggle('2000', "easeOutBounce");
                $("#email_1").attr("disabled", "disabled");
                $("#password_1").attr("disabled", "disabled");
             }

            //  Deactiving Login Fields
            if($('#modal_login_account').css('display') == 'block')
             {
                $('#modal_login_account').slideToggle('2000', "easeOutBounce");
                $("#email_2").attr("disabled", "disabled");
                $("#password_2").attr("disabled", "disabled");
             }            
            break;

    }   
    
   return;
}

function display_info()
{
	if($('#about_info').css('display') == 'block')
		$('#about_info').fadeOut('2000',"easeInSine");
		
	else
		$('#about_info').fadeIn('2000', "easeInSine");
}


/**
 * memory_type_other
 * 
 * Purpose: 
 */
function memory_type_other_button()
{
    //$('#memory_type_other').toggle('easein');
	$('#memory_type_other').toggle('easein');

    if($('#memory_type_other').prop('disabled'))
    {
        $('#memory_type_other').val(" ");
        $('#memory_type_other').removeAttr('disabled');
    }
    else
    { 
        $('#memory_type_other').val("");
        $('#memory_type_other').prob("disabled",true);
    }
}