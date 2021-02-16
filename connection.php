<?php
try{
    $connect = new PDO("mysql:host=localhost; dbname=dummytest", "asif", "1614");
    
    /*
    * echo '
    * <script type="text/JavaScript">  
    *   console.log("Log: DB Connected"); 
    * </script>
    * ';
    */
    
} catch(PDOException $pex){
    echo "Connection error: " . $pex->getMessage();
}
