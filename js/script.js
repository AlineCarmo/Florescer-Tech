/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {

    menuToggle.addEventListener('click', function () {

        if (menu.style.display === 'flex') {

            menu.style.display = 'none';

        } else {

            menu.style.display = 'flex';

        }

    });

}


/* =====================================================
   ÁREA PRINCIPAL DA SPA
===================================================== */

const conteudo = document.getElementById('conteudo');


/* =====================================================
   DADOS DAS ÁREAS DE ATUAÇÃO
===================================================== */

const areasAtuacao = [

    {
        titulo: 'Inclusão Digital',
        descricao:
            'Ações para ampliar o acesso à tecnologia e aos recursos digitais.'
    },

    {
        titulo: 'Capacitação',
        descricao:
            'Cursos e atividades para desenvolver conhecimentos digitais.'
    },

    {
        titulo: 'Educação',
        descricao:
            'Iniciativas voltadas ao aprendizado e desenvolvimento por meio da tecnologia.'
    },

    {
        titulo: 'Oportunidades',
        descricao:
            'Apoio para preparar pessoas para oportunidades de estudo e trabalho.'
    }

];


/* =====================================================
   GERAÇÃO DOS CARDS COM MAP()
===================================================== */

const cardsAreas = areasAtuacao.map(function (area) {

    return `

        <article>

            <h3>${area.titulo}</h3>

            <p>
                ${area.descricao}
            </p>

        </article>

    `;

}).join('');


/* =====================================================
   ROTEAMENTO DA SPA
===================================================== */

function renderizarPagina(pagina) {

    if (!conteudo) {

        return;

    }


    /* =================================================
       PÁGINA INICIAL
    ================================================= */

    if (pagina === 'inicio') {

        conteudo.innerHTML = `

            <section>

                <h2>Tecnologia para transformar</h2>

                <h3>Conhecimento para florescer</h3>

                <button
                    type="button"
                    id="botao-mensagem"
                >
                    Saiba mais
                </button>

                <p id="mensagem-interativa"></p>

                <img
                    src="../imagens/pc.jpg"
                    width="800"
                    alt="Pessoa utilizando um computador durante uma atividade de inclusão digital"
                >

                <p>
                    A Florescer Tech atua na promoção da inclusão e da capacitação digital,
                    ampliando o acesso à tecnologia e ao conhecimento.
                </p>

            </section>


            <section>

                <h2>Quem Somos</h2>

                <p>
                    A Florescer Tech é uma organização não governamental localizada em
                    São Paulo - SP, que trabalha para ampliar o acesso à tecnologia
                    e ao conhecimento digital.
                </p>

            </section>


            <section>

                <h2>Nossa Missão</h2>

                <p>
                    Promover a inclusão digital por meio da educação, contribuindo
                    para o desenvolvimento pessoal e profissional das pessoas.
                </p>

            </section>


            <section>

                <h2>Nossos Projetos</h2>

                <p>
                    Conheça algumas das iniciativas desenvolvidas pela Florescer Tech.
                </p>

                <a href="#projetos" id="link-projetos">
                    Conheça nossos projetos
                </a>

            </section>


            <section>

                <h2>Entre em Contato</h2>

                <p>
                    E-mail: contato@florescertech.org.br
                </p>

                <p>
                    Telefone: (11) 00000-0000
                </p>

                <p>
                    Localização: São Paulo - SP
                </p>

            </section>

        `;

        ativarBotaoMensagem();


        /* =============================================
           LINK "CONHEÇA NOSSOS PROJETOS"
        ============================================= */

        const linkProjetos =
            document.getElementById('link-projetos');

        if (linkProjetos) {

            linkProjetos.addEventListener('click', function (event) {

                event.preventDefault();

                window.location.hash = 'projetos';

                renderizarPagina('projetos');

            });

        }

    }


    /* =================================================
       PÁGINA DE PROJETOS
    ================================================= */

    if (pagina === 'projetos') {

        conteudo.innerHTML = `

            <section>

                <h2>Nossos Projetos</h2>

                <p>
                    Conheça algumas das iniciativas desenvolvidas pela
                    Florescer Tech para promover a inclusão e a capacitação digital.
                </p>


                <div class="alerta" role="alert">

                    A Florescer Tech desenvolve ações voltadas
                    à inclusão digital e ao acesso à tecnologia.

                </div>


                <img
                    class="imagem-projeto"
                    src="../imagens/florescertech.jpg"
                    alt="Atividade realizada pela Florescer Tech"
                >


                <button
                    type="button"
                    id="abrir-modal"
                >
                    Saiba mais sobre a Florescer Tech
                </button>


                <dialog id="modal">

                    <h2>Sobre a Florescer Tech</h2>

                    <p>
                        A Florescer Tech trabalha para ampliar o acesso
                        à tecnologia e ao conhecimento digital.
                    </p>


                    <button
                        type="button"
                        id="fechar-modal"
                    >
                        Fechar
                    </button>

                </dialog>

            </section>


            <section id="areas-atuacao">

                <h2>Áreas de Atuação</h2>

                <p>
                    Conheça as principais áreas de atuação da
                    Florescer Tech.
                </p>


                <div class="areas">

                    ${cardsAreas}

                </div>

            </section>

        `;

        ativarModal();


        /* =============================================
           ROLAR ATÉ ÁREAS DE ATUAÇÃO
        ============================================= */

        if (window.location.hash === '#areas') {

            const areas =
                document.getElementById('areas-atuacao');

            if (areas) {

                areas.scrollIntoView({
                    behavior: 'smooth'
                });

            }

        }

    }


    /* =================================================
       PÁGINA DE CADASTRO
    ================================================= */

    if (pagina === 'cadastro') {

        conteudo.innerHTML = `

            <section>

                <h2>Faça Parte</h2>

                <p>
                    Preencha o formulário para participar das
                    iniciativas da Florescer Tech.
                </p>


                <form id="form-cadastro">

                    <fieldset>

                        <legend>Dados pessoais</legend>


                        <label for="nome">
                            Nome:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            required
                        >


                        <br><br>


                        <label for="email">
                            E-mail:
                        </label>

                        <input
                            type="email"
                            id="email"
                            required
                        >


                        <br><br>


                        <label for="cpf">
                            CPF:
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                            placeholder="000.000.000-00"
                            required
                        >


                        <br><br>


                        <label for="telefone">
                            Telefone:
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                            placeholder="11 99999-9999"
                            required
                        >


                        <br><br>


                        <label for="cep">
                            CEP:
                        </label>

                        <input
                            type="text"
                            id="cep"
                            pattern="[0-9]{5}-[0-9]{3}"
                            placeholder="00000-000"
                            required
                        >


                        <br><br>


                        <label for="cidade">
                            Cidade:
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            required
                        >


                        <br><br>


                        <label for="estado">
                            Estado:
                        </label>

                        <select
                            id="estado"
                            required
                        >

                            <option value="">
                                Selecione
                            </option>

                            <option value="SP">
                                São Paulo
                            </option>

                            <option value="RJ">
                                Rio de Janeiro
                            </option>

                            <option value="MG">
                                Minas Gerais
                            </option>

                        </select>


                        <br><br>


                        <label for="interesse">
                            Como deseja participar?
                        </label>

                        <select
                            id="interesse"
                            required
                        >

                            <option value="">
                                Selecione
                            </option>

                            <option value="voluntario">
                                Voluntário
                            </option>

                            <option value="aluno">
                                Aluno
                            </option>

                            <option value="parceiro">
                                Parceiro
                            </option>

                        </select>


                        <br><br>


                        <label for="mensagem">
                            Mensagem:
                        </label>

                        <textarea
                            id="mensagem"
                            rows="5"
                        ></textarea>


                        <br><br>


                        <button type="submit">
                            Enviar cadastro
                        </button>


                        <p id="nome-salvo"></p>


                        <div
                            class="toast"
                            role="status"
                        >
                            Cadastro realizado com sucesso!
                        </div>

                    </fieldset>

                </form>

            </section>

        `;

        ativarFormulario();

        recuperarNomeSalvo();

    }

}


/* =====================================================
   NAVEGAÇÃO DA SPA
===================================================== */

const linksNavegacao =
    document.querySelectorAll('.menu a');

linksNavegacao.forEach(function (link) {

    link.addEventListener('click', function (event) {

        event.preventDefault();

        const rota =
            link.getAttribute('href').replace('#', '');


        /* =============================================
           ÁREAS DE ATUAÇÃO
        ============================================= */

        if (rota === 'areas') {

            window.location.hash = 'areas';

            renderizarPagina('projetos');

            return;

        }

        renderizarPagina(rota);

    });

});


/* =====================================================
   BOTÃO "SAIBA MAIS"
===================================================== */

function ativarBotaoMensagem() {

    const botaoMensagem =
        document.getElementById('botao-mensagem');

    const mensagemInterativa =
        document.getElementById('mensagem-interativa');


    if (botaoMensagem && mensagemInterativa) {

        botaoMensagem.addEventListener('click', function () {

            if (mensagemInterativa.textContent === '') {

                mensagemInterativa.textContent =
                    'A Florescer Tech acredita que o acesso à tecnologia pode transformar oportunidades.';

            } else {

                mensagemInterativa.textContent = '';

            }

        });

    }

}


/* =====================================================
   MODAL DOS PROJETOS
===================================================== */

function ativarModal() {

    const modal =
        document.getElementById('modal');

    const abrirModal =
        document.getElementById('abrir-modal');

    const fecharModal =
        document.getElementById('fechar-modal');


    if (modal && abrirModal && fecharModal) {

        abrirModal.addEventListener('click', function () {

            modal.showModal();

        });


        fecharModal.addEventListener('click', function () {

            modal.close();

        });

    }

}


/* =====================================================
   FORMULÁRIO DE CADASTRO
===================================================== */

function ativarFormulario() {

    const formularioCadastro =
        document.getElementById('form-cadastro');


    if (!formularioCadastro) {

        return;

    }


    formularioCadastro.addEventListener('submit', function (event) {

        event.preventDefault();


        const nome =
            document.getElementById('nome');

        const email =
            document.getElementById('email');

        const cpf =
            document.getElementById('cpf');

        const telefone =
            document.getElementById('telefone');

        const cep =
            document.getElementById('cep');

        const cidade =
            document.getElementById('cidade');

        const estado =
            document.getElementById('estado');

        const interesse =
            document.getElementById('interesse');


        /* =============================================
           VALIDAÇÃO DO NOME
        ============================================= */

        if (nome.value.trim().length < 3) {

            alert(
                'Digite um nome com pelo menos 3 caracteres.'
            );

            nome.focus();

            return;

        }


        /* =============================================
           VALIDAÇÃO DO E-MAIL
        ============================================= */

        if (!email.validity.valid) {

            alert(
                'Digite um e-mail válido.'
            );

            email.focus();

            return;

        }


        /* =============================================
           VALIDAÇÃO DO CPF
        ============================================= */

        if (!cpf.validity.valid) {

            alert(
                'Digite o CPF no formato 000.000.000-00.'
            );

            cpf.focus();

            return;

        }


        /* =============================================
           VALIDAÇÃO DO TELEFONE
        ============================================= */

        if (!telefone.validity.valid) {

            alert(
                'Digite o telefone no formato 11 99999-9999.'
            );

            telefone.focus();

            return;

        }


        /* =============================================
           VALIDAÇÃO DO CEP
        ============================================= */

        if (!cep.validity.valid) {

            alert(
                'Digite o CEP no formato 00000-000.'
            );

            cep.focus();

            return;

        }


        /* =============================================
           VALIDAÇÃO DA CIDADE
        ============================================= */

        if (cidade.value.trim() === '') {

            alert(
                'Digite a cidade.'
            );

            cidade.focus();

            return;

        }


        /* =============================================
           VALIDAÇÃO DO ESTADO
        ============================================= */

        if (estado.value === '') {

            alert(
                'Selecione um estado.'
            );

            estado.focus();

            return;

        }


        /* =============================================
           VALIDAÇÃO DO INTERESSE
        ============================================= */

        if (interesse.value === '') {

            alert(
                'Selecione como deseja participar.'
            );

            interesse.focus();

            return;

        }


        /* =============================================
           DADOS DO USUÁRIO
        ============================================= */

        const dadosUsuario = {

            nome: nome.value.trim(),
            email: email.value.trim(),
            cidade: cidade.value.trim(),
            estado: estado.value,
            interesse: interesse.value

        };


        /* =============================================
           SALVAR DADOS NO LOCALSTORAGE
        ============================================= */

        localStorage.setItem(
            'dadosUsuario',
            JSON.stringify(dadosUsuario)
        );


        /* =============================================
           MOSTRAR NOME SALVO
        ============================================= */

        const nomeSalvo =
            document.getElementById('nome-salvo');


        if (nomeSalvo) {

            nomeSalvo.textContent =
                'Nome salvo: ' + dadosUsuario.nome;

        }


        /* =============================================
           MENSAGEM DE SUCESSO
        ============================================= */

        const toastCadastro =
            document.querySelector('.toast');


        if (toastCadastro) {

            toastCadastro.style.display = 'block';

        }

    });

}


/* =====================================================
   RECUPERAR DADOS SALVOS
===================================================== */

function recuperarNomeSalvo() {

    const nomeSalvoAtual =
        document.getElementById('nome-salvo');

    const dadosSalvos =
        localStorage.getItem('dadosUsuario');


    if (nomeSalvoAtual && dadosSalvos) {

        const dadosUsuario =
            JSON.parse(dadosSalvos);

        nomeSalvoAtual.textContent =
            'Nome salvo: ' + dadosUsuario.nome;

    }

}


/* =====================================================
   CARREGAR ROTA INICIAL
===================================================== */

const rotaInicial =
    window.location.hash.replace('#', '');


if (rotaInicial === 'projetos' || rotaInicial === 'areas') {

    renderizarPagina('projetos');

} else if (rotaInicial === 'cadastro') {

    renderizarPagina('cadastro');

} else {

    renderizarPagina('inicio');

}