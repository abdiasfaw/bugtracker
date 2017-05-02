<?php
	
	function securePassword($password){
		return sha1($password);
	}

?>