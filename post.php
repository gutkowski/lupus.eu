<?php
    
    if($_POST) {
        
        if($_POST['accept']) {
            $accept = "Wyrażam zgodę na przesyłanie informacji drogą elektroniczną.";
        } else {
            $accept = "Nie wyrażam zgody na przesyłanie informacji drogą elektroniczną.";
        }
        
        $name = $_POST['name'];
        $email = $_POST['email'];
        $info = $_POST['company']." ".$_POST['city'].", ".$_POST['street']."<br>";
        $person = $_POST['name']." tel. ".$_POST['phone']."<br><br>";
        
        $to      = 'krzysztof.parasiak@vamergo.pl';
        $subject = $_POST['subject'];
        $message = $info.$person.$_POST['message']."<br>___<br>".$accept;
        $headers = 'MIME-Version: 1.0' . "\r\n" .
            'From: ' . $name . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'Content-type: text/html; charset=utf-8' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
            
        mail($to, $subject, $message, $headers);
    
    }
    
?>