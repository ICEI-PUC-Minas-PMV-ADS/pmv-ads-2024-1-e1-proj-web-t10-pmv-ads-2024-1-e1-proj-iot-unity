# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

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
    <li>RF-001:	O site deve permitir ao usuário visualizar os planos para aquisição do produto.</li>
   <li>RF-002:	O site deve permitir ao usuário entrar em contato com a empresa para tirar dúvidas gerais sobre o produto.</li>
   <li>RF-005:	O site deve permitir ao usuário entrar em contato com uma área de atendimento para solucionar problemas relacionados ao sistema.</li>
    <li>RF-006:	O site deve permitir ao usuário acessar uma área específica que resume os objetivos do software.</li>
    <li>RF-007:	O site deve permitir ao usuário cadastrar-se na plataforma do sistema.</li>
    <li>RF-008:	O site deve permitir fazer login em sua área específica no software, quando já tiver se cadastrado.</li>
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
    <li>RF-009:	O site deve permitir ao usuário criar/excluir um ambiente.</li>
   <li>RF-010:	O site deve permitir ao usuário criar/excluir um dispositivo.</li>
   <li>RF-011:	O site deve permitir ao usuário ligar/desligar um dispositivo.</li>
    <li>RF-012:	O site deve permitir ao usuário visualizar os dispositivos numa lista que pode ser filtrada pelo nome do ambiente.</li>
    <li>RF-013:	O site deve permitir ao usuário editar o nome, o ambiente/localização e sua descrição a partir da lista mencionada no item anterior.</li>
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
    <li>Digitar no campo "pesquisar por ambientes" e verificar se a lista filtra os dispositivos comparando o texto digitado com a relação de ambientes diponíveis</li>
   </ol>
   </td>
  <td>Todos os botões apresentam os comportamentos esperados, bem como os formulários, realizando a adição/edição/exclusão de dispositivos/ambientes.</td>
  <td>Bruno</td>
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
    
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
