$(document).ready(function(){$("#taskInput").on("keyup",function(){let t=$(this).val().toLowerCase();$(".table tr").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(t)>-1)})})});