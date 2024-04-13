# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2"> Usuário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Cliente que possui imóvel com dispositivos inteligentes</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  <ul>
    <li>Interface confortável de se navegar.</li>
    <li>Facilidade de visualizar o status dos aparelhos</li>
    <li>Site com disponibilidade total</li>
    <li>Ferramentas de ajuda e contato com o suporte</li>
    <li>Interface configurável mas sem ser difícil de aprender</li>
  <ul>
</td>
</td></td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2"> Equipe de Suporte </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Trabalha no Suporte de configuração e manutenção dos dispositivos dos clientes</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  <ul>
    <li>Status dos dispositivos dos clientes</li>
    <li>Acesso aos dispositivos dos clientes</li>
    <li>Chat rádpido com o cliente</li>
    <li>Conseguir verificar rapidamente o perfil do cliente</li>
    <li>Acesso aos chamados abertos</li>
  <ul>
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|HU |EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`|
|----------------|-------------|---------------------------|----------------------------------|
|	HU-01|Usuário(a)	|Quero criar uma conta	|Para diferenciar minha conta das outras pessoas	|
|	HU-02	|Usuário(a)	|Quero abrir um chamado	|Para sanar dúvidas e obter suporte com a equipe especializada	|
|	HU-03	|Usuário(a)	|Quero adicionar meus dispositivos inteligentes	|Para gerenciá-los através do Site	|
|	HU-04	|Usuário(a)	|Quero remover meus dispositivos inteligentes	|Para não misturar a interface com dispositivos que não tenho mais ou foram trocados	|
|	HU-05	|Administrador	|Quero uma conta com privilégios de Administrador	|Para auxiliar os clientes com as demandas	|
|	HU-06	|Administrador	|Quero visualizar os chamados abertos	|Para atender os clientes conforme a abertura dos mesmos	|
|	HU-07	|Usuário(a)	|Quero ver meus chamados abertos	|Para verificar se estão dentro do prazo de atendimento e quando foram abertos	|
|	HU-08	|Usuário(a)	|Quero personalizar minha interface	|Para deixá-la mais a ver comigo	|
|	HU-09	|Usuário(a)	|Quero nomear os meus dispositivos	|Para diferenciar todos	|
|	HU-10	|Usuário(a)	|Adicionar descrição aos dispositivos	|Para armazenar observações importantes ou anotações	|
|	HU-11	|Usuário(a)	|Gostaria de poder classificar meus dispositivos conforme os cômodos da residência eles se encontrem	|Porque assim, terei um controle mais específico e rápido de meus dispositivos na hipótese de a residência possuir muitos deles	|
|	HU-12	|Usuário(a)	|Gostaria de saber o status de atividade do meu dispositivo	|Para ter a informação de quais dispositivos estão funcionando ou não, de fora da minha casa.	|
|	HU-13	|Usuário(a)	|Gostaria de programar meus dispositivos para ligar ou desligar automaticamente	|Porque assim, terei um controle mais prático de meus dispositivos sem precisar de ligá-los manualmente a todo tempo.	|
|	HU-14	|Usuário(a)	|Gostaria de receber avisos de alertas importantes no meu navegador	|Para que eu consiga visualizar através do meu sistema operacional tais alertas posteriormente e entender o que está ocorrendo com os meus dispositivos	|
|	HU-15	|Usuário(a)	|Gostaria de poder solicitar uma ajuda rápida	|Porque assim conseguiria resolver meus problemas com mais velocidade e facilidade.	|
|	HU-16	|Usuário(a)	|Gostaria de Administrar meu perfil	|Para trocar informações importantes como: Endereço; E-mail; Nome de usuário; Troca de senha	|
|	HU-17	|Administrador	|Bloquear o acesso do cliente com inadimplência	|Para que ele não desfrute dos serviços caso não esteja em dia com os seus pagamentos	|
|	HU-18	|Usuário(a)	|Gostaria de poder classificar meus dispositivos conforme o cômodo onde se encontram (sala, quarto etc.)	|Porque assim, terei um controle mais específico e rápido dos meus dispositivos conforme o cômodo onde estão.	|
|	HU-19	|Usuário(a)	|Gostaria de poder restringir o acesso de alguns usuários aos determinados dispositivos	|Porque assim, não correrei o risco de meus filhos acessarem dispositivos mais perigosos ou complexos que não lhe dizem respeito	|
|	HU-20	|Usuário(a)	|Uma interface prática.	|Reunir de maneira prática dispositivos essenciais para a execução de seu trabalho.	|
|	HU-21	|Usuário(a)	|Gostaria de poder classificar meus dispositivos conforme as categorias em que eles se encontrem (lâmpadas, câmeras etc.)	|Porque assim, terei um controle mais específico e rápido de meus dispositivos na hipótese de a residência possuir muitos deles	|
|	HU-22	|Usuário(a)	|Gostaria de remover um colega de quarto que mudou de residência.	|Assim permito o acesso apenas daqueles que moram comigo.	|
|	HU-23	|Usuário(a)	|Esqueci minha senha e gostaria de redefini-la.	|Conseguir acessar minha conta novamente.	|
|	HU-24	|Usuário(a)	|Tive um problema pela segunda vez e gostaria de acessar o histórico com o chat.	|Dessa forma, conseguirei ter acesso a informações de como posso solucionar tal questão.	|

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|----|---------------------------------|:----:|
|RF- 01	|	A aplicação deve permitar ao usuário criar uma conta |	ALTA	|
|RF- 02	|	A aplicação deve permitir ao usuário abrir chamados de suporte.	|	ALTA	|
|RF- 03	| A aplicação deve permitir ao usuário	adicionar dispositivos.	|	ALTA	|
|RF- 04	|	A aplicação deve permitir ao usuário remover dispositivos.	|	ALTA	|
|RF- 05	|	A aplicação deve permitir ao Administrador criar um conta para o suporte	|	ALTA	|
|RF- 06	|	A aplicação deve permitir ao Administrador de visualizar chamados abertos pelos clientes	|	MÉDIA	|
|RF- 07	|	A aplicação deve permitir ao usuário visualizar seus chamados abertos	|	MÉDIA	|
|RF- 08	|	A aplicação deve oferecer uma funcionalidade de Interface personalizável.	|	BAIXA	|
|RF- 09	|	A aplicação deve permitir ao usuário nomear o dispositivo.	|	MÉDIA	|
|RF- 10	|	A aplicação deve permitir ao usuário adicionar descrição ao dispositivo.	|	MÉDIA	|
|RF- 11	|	A aplicação deve permitir ao usuário localização do dispositivo.	|	MÉDIA	|
|RF- 12	|	A aplicação deve permitir ao usuário verificar o Status do dispositivo.	|	ALTA	|
|RF- 13	|	A aplicação deve permitir ao usuário programar rotinas para os dispositivos.	|	BAIXA	|
|RF- 14	|	A aplicação deve enviar alertas através do navegador.	|	BAIXA	|
|RF- 15	|	A aplicação deve oferecer uma funcionalidade de chat de atendimento rápido	|	BAIXA	|
|RF- 16	|	A aplicão deve permitir ao usuário alterar as informações do perfil de usuário	|	MÉDIA	|
|RF- 17	|	A aplicação deve oferecer uma funcionalidade de Login bloqueado em caso de inadimplência	|	MÉDIA	|
|RF- 18	|	A aplicação permitir ao usuário de adcionar localização de cômodos nos dispositivos	|	MÉDIA	|
|RF- 19	|	A aplicção deve oferecer uma funcionalidade de controle de acesso para perfis secundários.	|	BAIXA	|
|RF- 20	|	A aplicação deve apresentar interface prática, intuitiva	|	MÉDIA	|
|RF- 21	|	A aplicação deve permitir ao usuário separar dispositivos por tipo	|	BAIXA	|
|RF- 22	|	A aplicação deve oferecer a funcionalidade de conta de usuário/Quero excluir minha conta	|	MÉDIA	|
|RF- 23	|	A aplicação deve oferecer uma funcionalidae de trocar senha/Esqueci minha senha	|	MÉDIA	|
|RF- 24	|	A aplicação deve apresentar Histórico do chat (Para futuras situações que aconteçam o mesmo problema)	|	MÉDIA	|


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|:----:|
|	RNF-01	|	A aplicação deve ter responsividade com dispositivos móveis. 	|	ALTA	|
|	RNF-02	|	A aplicação deve executar uma função em até 3 segundos.	|	MÉDIA	|
|	RNF-03	|	A aplicação deve ter disponibilidade 24H	|	ALTA	|
|	RNF-04	|	A aplicação deve prover segurança para as credenciais (LGPD)	|	ALTA	|
|	RNF-05	|	A aplicação deve possuir design intuitivo	|	MÉDIA	|
|	RNF-06	|	A aplicaçaõ deve ser funcional nos principais navegadores.	|	ALTA	|

**Prioridade: Alta / Média / Baixa. 

