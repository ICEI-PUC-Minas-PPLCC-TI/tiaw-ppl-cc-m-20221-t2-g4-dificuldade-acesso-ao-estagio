let isAluno = true;

function trigger() {
    isAluno = !isAluno;
    
    if (isAluno == false) {
        console.log("vasco da gama");
        document.getElementById('forms').innerHTML =
        `
        <div id="forms">
            <form>
                <div class="form-group">
                    <input name="" class="form-control" placeholder="Nome da empresa" type="text">
                </div>
                <div class="form-group">
                    <input name="" class="form-control" placeholder="Usuário da empresa" type="text">
                </div>
                <div class="form-group">
                    <input name="" class="form-control" placeholder="Email da empresa" type="email">
                </div>
                <div class="form-group">
                    <input name="" class="form-control" placeholder="Confirmar email" type="email">
                </div>
                <div class="form-group">
                    <input class="form-control" placeholder="Senha" type="password">
                </div>
                <div class="form-group">
                    <input class="form-control" placeholder="Confirmar senha" type="password">
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block"> Criar conta
                            </button>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <button type="button" class="btn btn-outline-primary btn-block">Já possuo
                                uma conta</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        `
    } else {
        document.getElementById('forms').innerHTML =
        `
        <div id="forms">
                            <form>
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="Nome" type="text">
                                </div>
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="Nome de usuário" type="text">
                                </div>
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="Email" type="email">
                                </div>
                                <div class="form-group">
                                    <input name="" class="form-control" placeholder="Confirmar email" type="email">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Senha" type="password">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Confirmar senha" type="password">
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block"> Criar conta
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <button type="button" class="btn btn-outline-primary btn-block">Já possuo
                                                uma conta</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
        `
    }
}