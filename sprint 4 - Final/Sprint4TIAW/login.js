let isAluno = true;

function trigger() {
    isAluno = !isAluno;
    
    if (isAluno == false) {
        console.log("vasco da gama");
        document.getElementById('forms').innerHTML =
        `
        <form  action="./homePageEmp.html" method="get" name="form">
                            <div class="form-group">
                                <input name="" class="form-control" placeholder="email ou usuário" type="email" required>
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="senha" type="password" required>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <button class="btn btn-primary btn-block"> Login </button>
                                    </div>
                                </div>
                                <div class="col-md-6 text-right">
                                    <a class="small" href="./esqueceSenha.html">Esqueceu sua senha?</a>
                                </div>
                                <a href="./cadastro.html" class="float-right btn btn-outline-primary sign-up">Criar conta</a>
                            </div>
                        </form>
        `
    } else {
        document.getElementById('forms').innerHTML =
        `
        <form  action="./homePage.html" method="get" name="form">
                            <div class="form-group">
                                <input name="" class="form-control" placeholder="email ou usuário" type="email" required>
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="senha" type="password" required>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <button href="./homePage.html" class="btn btn-primary btn-block"> Login </button>
                                    </div>
                                </div>
                                <div class="col-md-6 text-right">
                                    <a class="small" href="./esqueceSenha.html">Esqueceu sua senha?</a>
                                </div>
                                <a href="./cadastro.html" class="float-right btn btn-outline-primary sign-up">Criar conta</a>
                            </div>
                        </form>
        `
    }
}

/*
var email = document.forms['form']['email'];
var email = document.forms['form']['password'];

var email_error = document.getElementById('email-error');
var pass_error = document.getElementById('pass-error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validado() {
    if (email.value.lenght < 5) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.lenght < 4) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}

function email_Verify() {
    if (email.value.length >= 5) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}

function pass_Verify() {
    if (password.value.length >= 4) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}
*/