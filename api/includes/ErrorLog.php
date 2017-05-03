<?php
	
	function errorLog($logQuery){
		$fp = fopen("BugTracker.log", "wa");
		fwrite($fp, $logQuery . "\n");
	}
	
?>