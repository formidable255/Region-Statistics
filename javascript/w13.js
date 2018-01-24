var choice;
$(document).ready(function(){
	$("#regions").change(function(){
		choice = (this.value);
		$(result).empty();
		var numOfCountry = "";

		$(document).ready(function test(){
			var link = "https://restcountries.eu/rest/v2/region/"
			var getData = function(region){
				$.ajax({
					url: link + choice,
					type: "GET",
					dataType: "json",
					error: function () {
						console.log("fail");
						$(numOfCountry).empty();
						$("#number").html(numOfCountry);
						},
					success: function (data) {
						console.log("success");
						display(data);
					}
				});
				var display = function(info){
					var result = "";
					
					var numOfCountry = ("Number of countries: " + info.length);
					$("#number").html(numOfCountry);
					$.each(info, function(index, i){
						result += "<tr><td>" + i.name + "</td>";
						result += "<td>" + i.capital + "</td>";
						result += "<td class=\"pop\">" + i.population + "</td>";
						result += "<td><img src=\""+i.flag+"\"/></td></tr>";
						$("#result").html(result);
					})
				}
			}
		getData();
		});
	});
});