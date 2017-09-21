<?php
 
include ('codebase/connector/gantt_connector.php');
 
$res = new PDO("mysql:host=localhost;dbname=gantt", "root", "");
 
$gantt = new JSONGanttConnector($res);
$gantt->render_links("gantt_links","id","source,target,type");
$gantt->render_table(
    "gantt_tasks",
    "id",
    "start_date,duration,text,progress,sortorder,parent"
);
?>