<?php
	
	/* NOTE(Abdi Asfaw): Database class with the capabilities like Select, insert, update and delete. */
	
	include 'ErrorLog.php';
	
	class DatabaseConnection {
		
		private $DB_HOST = 'localhost';
		private $DB_USERNAME = 'root';
		private $DB_PASSWORD = '';
		private $DB_NAME = 'bugtracker';
		
		private $con = NULL;
		
		
		public function __construct(){
			$con = mysqli_connect($DB_HOST, $DB_USERNAME, $DB_PASSWORD , $DB_NAME) or die(errorLog("Couldn't login to the db: " . mysqli_connect_error()));
		}
		
		
		public function insertFunction($tableName,$attributes, $values){
			$query = "insert into ". $tableName . "(" . $attributes . ") values (" . $values . ")";
		}
		
		
		
		
		
		public function __destruct(){
			mysqli_close($con);
		}
	}
	
	
	
	
	
?>	