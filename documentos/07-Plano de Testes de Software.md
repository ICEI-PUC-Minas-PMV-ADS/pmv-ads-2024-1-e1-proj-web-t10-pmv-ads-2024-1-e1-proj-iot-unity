# Plano de Testes de Software

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página inicial</td>
  <td>
   <ul>
    <li>RF-09: A aplicação deve oferecer uma funcionalidade de chat de atendimento rápido.</li>
    <li>RF-12: A aplicação deve apresentar interface prática, intuitiva.</li>
    <li>RF-19: A aplicação deve ter uma página inicial que permita navegar pelo site.</li>
    <li>RF-20: A aplicação deve permitir que o usuário abra um chamado de suporte para obter soluções para seus problemas.</li>
   </ul>
  </td>
  <td>Verificar se os links da página inicial estão encaminhando o usuário para as páginas/seções corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
    <li>Preencher os formulários da área de "contato" e "suporte" e então verificar se os dados preenchidos no campos foram enviados para o e-mail cadastrado pelo desenvolvedor</li>
   </ol>
   </td>
  <td>Todos os links da página inicial de fato encaminham o usuário às páginas esperadas, bem como às seções esperadas da própria página inicial.</td>
  <td>Guilherme</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar se as funcionalidades gerais da página "Dashboard" estão funcionando corretamente</td>
  <td>
   <ul>
    <li>RF-02: A aplicação deve permitir ao usuário adicionar dispositivos.</li>
    <li>RF-03: A aplicação deve permitir ao usuário remover dispositivos.</li>
    <li>RF-04: A aplicação deve oferecer uma funcionalidade de Interface personalizável.</li>
    <li>RF-05: A aplicação deve permitir ao usuário nomear o dispositivo.</li>
    <li>RF-06: A aplicação deve permitir ao usuário adicionar descrição ao dispositivo.</li>
    <li>RF-12: A aplicação deve apresentar interface prática, intuitiva.</li>
   </ul>
  </td>
  <td>Verificar se os botões e formulários da página estão funcionando conforme planejado</td>
  <td>
   <ol>
    <li>Abrir a página de dashboard.</li>
    <li>Clicar no link "Adicionar Dispositivo".</li>
    <li>Preencher todas as informações e clicar em "Criar", verificando, em seguida, se o dispositivo foi criado.</li>
    <li>Clicar no link "Adicionar ambiente".</li>
    <li>Preencher o formulário, clicar em "Criar", verificando, em seguida, se o ambiente foi criado</li>
    <li>Clicar no link "Dispositivos" e verificar se todos os dispositivos criados se encontram na lista, bem como os ambientes/localização</li>
    <li>Selecionar algum dispositivo e verificar se é disponibilizada a opção para edição. Caso positivo, preencher o formulário e verificar se houve a mudança desejada</li>
    <li>Clicar no botão "excluir" da lista de dispositivos é confirmar se é possível excluir um dispositivo</li>
    <li>Clicar no botão "X" de determinado ambiente e verificar se ele é excluído.</li>
    <li>Digitar no campo "pesquisar por ambientes" e verificar se a lista filtra os dispositivos comparando o texto digitado com a relação de ambientes diponíveis</li>
    <li>Digitar no campo próprio do chat de suporte algum texto e verificar se a mensagem é registrada</li>
   </ol>
   </td>
  <td>Todos os botões apresentam os comportamentos esperados, bem como os formulários, realizando a adição/edição/exclusão de dispositivos/ambientes.</td>
  <td>Guilherme e Joel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o cadastro de usuários</td>
  <td>
   <ul>
 <li>RF-01: A aplicação deve permitar ao usuário criar uma conta..</li>
</ul>
  </td>
  <td>Verificar se o cadastro está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li> Clicar em "Cadastre-se", no Menu.</li>
    <li>Preencher o formulário e clicar em “Cadastrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Usuário cadastrado com sucesso".</td>
  <td>Larissa</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o login de usuários</td>
  <td>
   <ul>
   <li>RF-016: O site deve permitir ao usuário fazer o login da sua conta.</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Login”, no menu.</li>
    <li>Preencher seus dados e clicar em “Login”.</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a sua página de perfil.</td>
  <td>Rafael</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o usuários</td>
  <td>
   <ul>
   <li>RF-10 A aplicação deve permitir ao usuário alterar as informações do perfil de usuário.</li>
   <li> RF-14 A aplicação deve oferecer a funcionalidade de conta de usuário.</li>
   </ul>
  </td>
  <td>Verificar se a pagina de usuário está funcional </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Informações do usuário.</li>
    <li>alterar senha.</li>
   </ol>
   </td>
  <td>A pagina de usuário devera permitir o usuário troca sua senha.</td>
  <td>Joel</td>
 </tr>
    
