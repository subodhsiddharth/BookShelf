document.getElementById("ForgotCross").onclick= NoForgotView;
document.getElementById("PasswordForgot").onclick= ForgotView;



function NoForgotView(){
    document.getElementById('forgotPassword').style.visibility='hidden';
}

function ForgotView(){
    document.getElementById('forgotPassword').style.visibility='visible';
}