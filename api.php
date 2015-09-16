<?php
	header('Access-Control-Allow-Origin: *');
	$conn = new mysqli("localhost", "root", "root123", 'lbpeixuncom');
	$data = null;
	if($_POST["type"] == 'binbinList'){
		$strSQL = "SELECT * FROM `yq_portal_article_title` WHERE username = 'libingccmb' and catid = 3 order by dateline DESC limit 0,5";
		$stmt = $conn->query($strSQL);
		$data = dbToArray($stmt);
	}
	
	if($_POST["type"] == 'videoList'){
		$strSQL = "SELECT * FROM `yq_portal_article_title` a ";
		$strSQL .= "left join yq_portal_article_content b on a.aid = b.aid ";
		$strSQL .= "WHERE a.catid = 85 order by a.dateline DESC limit 0,5";
		$stmt = $conn->query($strSQL);
		$data = dbToArray($stmt);
		
		$tmpData = array();
		
		foreach($data as $i => $content){
			$tmpContent = array();
			$tmpContentArr = explode("[flash]",$content["content"]);
			$tmpContentArr2 = explode("[/flash]",$tmpContentArr[1]);
			
			//取得影片ID
			$tmpVidoID = explode("/sid/",$tmpContentArr2[0]);
			$tmpVidoID = str_replace("/v.swf","",$tmpVidoID[1]);
			$videoChange = '<iframe height="280" width="100%" src="http://player.youku.com/embed/'.$tmpVidoID.'" frameborder=0 allowfullscreen></iframe>';
			
			$content["content"] = $tmpContentArr[0].$videoChange.$tmpContentArr2[1];
			$tmpData[$i] = $content;
		}
		$data = $tmpData;
		
	}
	echo json_encode($data);
	
	
	//處理DB > Data
	function dbToArray($stmt){
		$data = null;
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
		return $data;
	}
?>