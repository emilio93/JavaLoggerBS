<?php
/*
Emilio Rojas
Version 1.0
9/2/2016

How to get this viewer working:
This is called by the viewer, however, it needs to be processed by php,
best way is to have a server and php running, this was tested with apache.

We need to link the directory to the web directory, which normally is
/var/www/html/ on apache on ubuntu, so do this:

> cd /var/www/html
> ln -s /path/to/this/directory /var/www/html/logger

Now on the browser you should be able to access the logs through
http://localhost/logger/viewer.html
 */

 class Worker {
     // The mothafucka log directory.
     private $dir = "logs";

     // Gimme the list of all the log files.
     public function logList() {
         $contents = scandir($this->dir);
         $logs = array(); // Dis'll hold all the log file's names.
         foreach ($contents as $i) {
             // So yeah, fuck anything that isn't XML.
             if (strtolower(end(explode(".", $i))) == "xml") {
                 array_push($logs, $i);
             }
         }
         // Uhhh da bueaty json.
         return json_encode($logs);
     }

     // Dis the shitty function.
     public function getLog($log) {
         $xml = simplexml_load_string(file_get_contents($this->dir . "/" . $log));
         return json_encode($xml);
     }
 }

header('Content-Type: application/json');
$post = json_decode(file_get_contents("php://input"));

// Do the actual thing, finally.
$w = new Worker();
switch ($post->request) {
    case "logList":
        echo $w->logList();
        break;
    case "getLog":
        echo $w->getLog($post->logFile);
        break;
    default:
        echo 'Sorry pal';
}
