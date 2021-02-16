<?php

include("connection.php");

$query = "SELECT * FROM sampletable";
$statement = $connect->prepare($query);
$statement->execute();
$result = $statement->fetchAll();
$total_row = $statement->rowCount();
$output = '
<table class="table table-striped table-bordered">
	<tr>
		<th>First Value</th>
		<th>Last Value</th>
	</tr>';

if($total_row > 0)
{
	foreach($result as $row)
	{
		$output .= '
		<tr>
			<td width="50%">'.$row["first_name"].'</td>
			<td width="50%">'.$row["last_name"].'</td>
		</tr>
		';
	}
}
else
{
	$output .= '
	<tr>
		<td colspan="4" align="center">No Data Found!</td>
	</tr>
	';
}

$output .= '</table>';
echo $output;

?>