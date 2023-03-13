
function idCheck(id){
	if(id == ""){
		alert("아이디를 입력해 주세요");
		document.regForm.id.focus();
	}else{
		url="idCheck.jsp?id=" + id;
		window.open(url,"post","width=300,height=150");
	}
}

function zipCheck(){
	url="zipCheck.jsp?check=y";
	window.open(url,"post","toolbar=no, width=500, height=300, directories=no, status=yes, scrollbars=yes, menubar=no");
}

function inputCheck(){
		if(document.regForm.id.value==""){
			alert("아이디를 입력해주세요.");
			document.regForm.id.focus();
			return;
		}
		if(document.regForm.pass.value==""){
			alert("비밀번호를 입력해주세요.");
			document.regForm.pass.focus();
			return;
		}
		if(document.regForm.repass.value==""){
			alert("비밀번호를 확인해 주세요.");
			document.regForm.repass.focus();
			return;
		}
		if(document.regForm.pass.value != document.regForm.repass.value){
			alert("비밀번호가 일치하지 않습니다.");
			document.regForm.repass.focus();
			return;
		}
		if(document.regForm.name.value==""){
			alert("이름을 입력해주세요.");
			document.regForm.name.focus();
			return;
		}
		if(document.regForm.phone1.value==""){
			alert("전화번호를 입력해 주세요.");
			document.regForm.phone1.focus();
			return;
		}
		if(document.regForm.phone2.value==""){
			alert("전화번호를 입력해 주세요.");
			document.regForm.phone2.focus();
			return;
		}
		if(document.regForm.phone3.value==""){
			alert("전화번호를 입력해 주세요");
			document.regForm.phone3.focus();
			return;
		}
		if(document.regForm.age.value==""){
			alert("나이를 입력해주세요.");
			document.regForm.age.focus();
			return;
		}
		if(document.regForm.gender.value==""){
			alert("성별을 선택해주세요.");
			document.regForm.gender.focus();
			return;
		}
		if(document.regForm.email.value==""){
			alert("이메일를 입력해 주세요.");
			document.regForm.email.focus();
			return;
		}
		var str = document.regForm.email.value;
		var atPos = str.indexOf('@');
		var atLastPos = str.lastIndexOf('@');
		var dotPos = str.indexOf('.');
		var spacePos = str.indexOf(' ');
		var commaPos = str.indexOf(',');
		var eMailSize = str.length;
		if(atPos > 1 && atPos == atLastPos && dotPos > 3 && spacePos == -1 && commaPos == -1 
		&& atPos + 1 < dotPos && dotPos + 1 < eMailSize);
		else{
			alert('E-mail주소 형식이 잘못되었습니다.\n\r다시 입력해 주세요!');
			document.regForm.email.focus();
			return;
		}
		if(document.regForm.zipcode.value==""){
			alert("우편번호를 입력해 주세요.");
			document.regForm.zipcode.focus();
			return;
		}
		if(document.regForm.address1.value==""){
			alert("주소를 입력해 주세요.");
			document.regForm.address1.focus();
			return;
		}
		if(document.regForm.address2.value==""){
			alert("세부주소를 입력해 주세요.");
			document.regForm.address2.focus();
			return;
		}
		document.regForm.submit();
}

function updateCheck(){
		if(document.regForm.pass.value==""){
			alert("비밀번호를 입력해주세요.");
			document.regForm.pass.focus();
			return;
		}
		if(document.regForm.repass.value==""){
			alert("비밀번호를 확인해 주세요.");
			document.regForm.repass.focus();
			return;
		}
		if(document.regForm.pass.value != document.regForm.repass.value){
			alert("비밀번호가 일치하지 않습니다.");
			document.regForm.repass.focus();
			return;
		}
		if(document.regForm.name.value==""){
			alert("이름을 입력해주세요.");
			document.regForm.name.focus();
			return;
		}
		if(document.regForm.phone1.value==""){
			alert("전화번호를 입력해 주세요.");
			document.regForm.phone1.focus();
			return;
		}
		if(document.regForm.phone2.value==""){
			alert("전화번호를 입력해 주세요.");
			document.regForm.phone2.focus();
			return;
		}
		if(document.regForm.phone3.value==""){
			alert("전화번호를 입력해 주세요");
			document.regForm.phone3.focus();
			return;
		}
		if(document.regForm.age.value==""){
			alert("나이를 입력해 주세요");
			document.regForm.age.focus();
			return;
		}
		if(document.regForm.email.value==""){
			alert("이메일를 입력해 주세요.");
			document.regForm.email.focus();
			return;
		}
		var str = document.regForm.email.value;
		var atPos = str.indexOf('@');
		var atLastPos = str.lastIndexOf('@');
		var dotPos = str.indexOf('.');
		var spacePos = str.indexOf(' ');
		var commaPos = str.indexOf(',');
		var eMailSize = str.length;
		if(atPos > 1 && atPos == atLastPos && dotPos > 3 && spacePos == -1 && commaPos == -1 
		&& atPos + 1 < dotPos && dotPos + 1 < eMailSize);
		else{
			alert('E-mail주소 형식이 잘못되었습니다.\n\r다시 입력해 주세요!');
			document.regForm.email.focus();
			return;
		}
		if(document.regForm.zipcode.value==""){
			alert("우편번호를 입력해 주세요.");
			document.regForm.zipcode.focus();
			return;
		}
		if(document.regForm.address1.value==""){
			alert("주소를 입력해 주세요.");
			document.regForm.address1.focus();
			return;
		}
		if(document.regForm.address2.value==""){
			alert("세부주소를 입력해 주세요.");
			document.regForm.address2.focus();
			return;
		}
		
		document.regForm.submit();
}
		
function writeCheck(){
	if(document.writeForm.title.value==""){
		alert("제목을 기입하십시오.");
		document.writeForm.title.focus();
		return false;
	}
	if(document.writeForm.name.value==""){
		alert("이름을 기입하십시오.");
		document.writeForm.name.focus();
		return false;
	}
	if(document.writeForm.email.value==""){
		alert("이메일을 기입하십시오.");
		document.writeForm.email.focus();
		return false;
	}
	if(document.writeForm.content.value==""){
		alert("내용을 기입하십시오.");
		document.writeForm.content.focus();
		return false;
	}
	if(document.writeForm.pass.value==""){
		alert("비밀번호를 기입하십시오.");
		document.writeForm.pass.focus();
		return false;
	}
}		
		
		
		
		
			