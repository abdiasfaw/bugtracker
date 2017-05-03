<?php
	
	/* NOTE(Abdi Asfaw): This is the page that is going to handle requests from the client side and calling the appropriate function */
	
	switch($_GET['view']){
    case 'index':
        include('libs/index.php');
        break;
    default:
        include('libs/404.php');
        break;
}

?>