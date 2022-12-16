<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Enviar e-mail con archivo adjunto utilizando Ajax y PHP.</title>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="jquery.form.js"></script>

<script type="text/javascript">
	$(document).ready(function(){
		$('#emailForm').ajaxForm({
			beforeSubmit: validate,
			success: function(data, statusText, xhr, form) {
				$('#loading').html('El email se envio correctamente');
				alert("El email se envio correctamente");
				$('#loading').hide();
				$("#asunto").val("");
				$("#para").val("");
				$("#mensaje").val("");
				$("#adjunto").val("");
			}
		});
		
		function validate(formData, jqForm, options) {
			var form = jqForm[0]; 
			if(form.asunto.value == ""){
				alert("Ingrese el asunto");
				form.asunto.focus();
				return false;
			}else if(form.para.value == ""){
				alert("Ingrese el email del destinatario");
				form.para.focus();
				return false;
			}else if(form.mensaje.value == ""){
				alert("Ingrese su mensaje");
				form.mensaje.focus();
				return false;
			}
			$('#loading').html('Enviando...').show();
		}
	});
	
</script>
<style type="text/css">
	#sendEmail{
		font:normal 11px Tahoma, Geneva, sans-serif;
		color:#333;
		border:1px solid #999;
		background:#F9F9F9;
		width:500px;
		padding:20px;
		margin:0 auto
	}
	#sendEmail legend{
		color:#09F;
		font-size:15px
	}
	#sendEmail label{
		width:90px;
		float:left;
		text-align:left;
	}
	#sendEmail .row{
		overflow:hidden;
		margin:6px 0
	}
	#sendEmail  .button{
		background:#333;
		color:#FFF;
		width:180px;
		padding:5px 0;
		margin-top:20px;
		cursor:pointer
	}
	#loading{
		background:#F5F5F5;
		border-top:1px solid #F3F3F3;
		border-bottom:1px solid #F3F3F3;
		display:none;
		text-align:center;
		margin:6px 0;
		padding:5px 0
	}
	input, textarea{
		font:normal 11px Tahoma, Geneva, sans-serif;
		color:#000
	}
</style>
</head>

<body>
<fieldset id="sendEmail">
	<legend>Enviar e-mail con archivo abjunto utilzando Ajax</legend>
	<form name="emailForm" id="emailForm" method="POST" action="enviar.php"  enctype="multipart/form-data">
        <div class="row"><label>Asunto:</label> <input type="text" name="asunto" id="asunto" size="66" /> *</div>
        <div class="row"><label>Para:</label> <input type="text" name="para" id="para" size="56" /> *</div>
        <div class="row"><label>Mensaje:</label> <textarea  name="mensaje" id="mensaje" rows="7" cols="70"></textarea> *</div>
        <div class="row"><label>Abjuntar Archivo:</label> <input type="file" id="adjunto" name="adjunto"> *</div>
        <div align="center"><input type="submit" value="Enviar Correo" class="button"></div>
    </form>
      <div id="loading"></div>

</fieldset>
</body>
</html>