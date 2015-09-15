<?php
	header('Access-Control-Allow-Origin: *');
	$conn = new mysqli("localhost", "root", "306DS7", 'lbpeixuncom');
	
	$strSQL = "SELECT * FROM `yq_portal_article_title` WHERE username = 'libingccmb' and catid = 3 limit 0,5";
	$stmt = $conn->query($strSQL);
	$data = NULL;
	$i=0;
	if( $stmt and $stmt->num_rows){
		while ($ar = $stmt->fetch_array(MYSQLI_ASSOC)) {
			$j=0;
			foreach($ar as $key=>$val){
				//echo $key."=>".$val;
				if( !empty($pk) ){
					$p = $ar[$pk];
					if($kind==0) $data[$p][$key]=$val;
					elseif($kind==1) $data[$p][$j]=$val;
				}
				else{
					if($kind==0) $data[$i][$key]=$val;
					elseif($kind==1) $data[$i][$j]=$val;
				}
				$j++;
			}
			$i++;
		}
	}
	echo json_encode($data);
?>