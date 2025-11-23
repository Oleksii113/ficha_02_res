# Requisitos Funcionais

## Identidade, Acesso e Perfis

| Número | Requisito                                                                                               | Atores        | Prioridade | Dependências |
| :----- | :------------------------------------------------------------------------------------------------------ | :------------ | :--------- | :----------- |
| 1      | Registo, login e logout.                                                                                | Todos         | Must       | —            |
| 2      | Papéis e permissões (**Admin**, **Gestor da empresa**, **Contabilista**, **Operacional**, **Auditor**). | Admin         | Must       | 1            |
| 3      | Multi-empresa (um utilizador pode ter papéis diferentes em várias empresas).                            | Admin, Gestor | Must       | 2            |
| 4      | Gestão de utilizadores: convite, remoção e definição de papéis.                                         | Admin, Gestor | Must       | 3            |
| 5      | Recuperação de password via email.                                                                      | Todos         | Must       | —            |

---

## Configuração da Empresa

| Número | Requisito                                                                 | Atores               | Prioridade | Dependências |
| :----- | :------------------------------------------------------------------------ | :------------------- | :--------- | :----------- |
| 6      | Registar dados da empresa (NIF, morada, moeda, logótipo, período fiscal). | Gestor, Contabilista | Must       | —            |
| 7      | Criar/importar plano de contas (SNC).                                     | Contabilista         | Must       | —            |

---

## Tabelas-base

| Código | Requisito                                                 | Atores                    | Prioridade | Dependências |
| :----- | :-------------------------------------------------------- | :------------------------ | :--------- | :----------- |
| RF09   | Criar e gerir **clientes**.                               | Operacional, Gestor       | Must       | —            |
| RF10   | Criar e gerir **fornecedores**.                           | Operacional, Contabilista | Must       | —            |
| RF11   | Criar **artigos/serviços** (SKU, custo, preço, IVA).      | Operacional               | Must       | —            |
| RF12   | Criar **armazéns e localizações**.                        | Operacional               | Should     | —            |
| RF13   | Configurar **tabelas de IVA** (taxas, isenções, códigos). | Contabilista              | Must       | —            |

---

## Vendas (Faturação)

| Código | Requisito                                                                    | Atores              | Prioridade | Dependências     |
| :----- | :--------------------------------------------------------------------------- | :------------------ | :--------- | :--------------- |
| RF14   | Emitir **Fatura, Fatura-Recibo, Nota de Crédito**, com numeração sequencial. | Operacional         | Must       | RF09, RF11, RF13 |
| RF15   | Registar **recebimentos** (parciais/totais).                                 | Operacional         | Must       | —                |
| RF16   | Gerar **lançamentos contabilísticos automáticos** por venda.                 | Contabilista        | Must       | RF14             |
| RF17   | Consultar **títulos em aberto** e antiguidade de saldos.                     | Gestor, Operacional | Should     | —                |

---

## Compras

| Código | Requisito                                                         | Atores       | Prioridade | Dependências     |
| :----- | :---------------------------------------------------------------- | :----------- | :--------- | :--------------- |
| RF18   | Registar **Fatura de Fornecedor** e **Nota de Crédito**.          | Operacional  | Must       | RF10, RF11, RF13 |
| RF19   | Registar **pagamentos** (parciais/totais).                        | Operacional  | Must       | RF18             |
| RF20   | Gerar **lançamentos contabilísticos automáticos** de compras.     | Contabilista | Must       | RF18             |
| RF21   | Aprovação de compras com estados “Rascunho → Aprovado → Lançado”. | Gestor       | Should     | —                |

---

## Inventário

| Código | Requisito                                                          | Atores              | Prioridade | Dependências |
| :----- | :----------------------------------------------------------------- | :------------------ | :--------- | :----------- |
| RF22   | Movimentos de stock: entradas, saídas, transferências, devoluções. | Operacional         | Must       | RF11, RF12   |
| RF23   | Cálculo de custo (FIFO).                                           | Contabilista        | Must       | RF22         |
| RF24   | Contagem física e ajustes.                                         | Operacional         | Should     | RF22         |
| RF25   | Alertas de stock (mínimos, máximos, artigos parados).              | Gestor, Operacional | Should     | RF22         |

---

## Contabilidade Geral

| Código | Requisito                                               | Atores                        | Prioridade | Dependências |
| :----- | :------------------------------------------------------ | :---------------------------- | :--------- | :----------- |
| RF26   | Criar e editar **lançamentos manuais** (com anexos).    | Contabilista                  | Must       | RF07         |
| RF27   | Consultar **balancete e razão** exportável (PDF/Excel). | Contabilista, Auditor, Gestor | Must       | RF26         |
| RF28   | Gerar **Demonstração de Resultados e Balanço**.         | Contabilista, Gestor          | Must       | RF27         |
| RF29   | Gerar **Mapas de IVA** (liquidado/dedutível).           | Contabilista                  | Must       | RF16, RF20   |

---

## Tesouraria e Bancos

| Código | Requisito                                                                   | Atores                    | Prioridade | Dependências     |
| :----- | :-------------------------------------------------------------------------- | :------------------------ | :--------- | :--------------- |
| RF30   | Criar **contas bancárias/caixa** e respetivos saldos.                       | Contabilista, Operacional | Must       | —                |
| RF31   | Importar **extratos bancários** (CSV/OFX) e fazer reconciliação automática. | Operacional, Contabilista | Must       | RF30, RF14, RF18 |
| RF32   | Gerar **previsão de tesouraria** (entradas e saídas futuras).               | Gestor                    | Should     | RF15, RF19       |

---

## Documentos, Importações e Integrações

| Código | Requisito                                                         | Atores                | Prioridade | Dependências |
| :----- | :---------------------------------------------------------------- | :-------------------- | :--------- | :----------- |
| RF33   | Upload de documentos com **OCR** (ler NIF, data, total, IVA).     | Operacional           | Should     | RF18         |
| RF34   | Importar CSV/Excel de clientes, fornecedores, artigos e extratos. | Admin, Contabilista   | Should     | —            |
| RF35   | Exportar **SAF-T (PT)** de faturação e contabilidade.             | Contabilista, Auditor | Must       | —            |
| RF36   | (Opcional) Integração com **e-Fatura**.                           | Contabilista          | Could      | —            |

---

## Relatórios e Dashboards

| Código | Requisito                                              | Atores              | Prioridade | Dependências     |
| :----- | :----------------------------------------------------- | :------------------ | :--------- | :--------------- |
| RF37   | Relatórios de vendas, compras, margens e stock.        | Gestor, Operacional | Must       | RF14, RF18, RF22 |
| RF38   | KPIs executivos (receita, custos, EBITDA, PMR, PMP).   | Gestor              | Should     | RF37             |
| RF39   | Personalização de relatórios e exportação (PDF/Excel). | Todos               | Should     | RF37             |

---

## Assistente de IA (Análise e Estratégia)

| Código | Requisito                                                                       | Atores               | Prioridade | Dependências |
| :----- | :------------------------------------------------------------------------------ | :------------------- | :--------- | :----------- |
| RF40   | Gerar **insights automáticos** (tendências, riscos, clientes, artigos parados). | Gestor, Contabilista | Must       | RF37         |
| RF41   | Sugerir **ações** (ajustar preços, negociar fornecedor, repor stock).           | Gestor               | Should     | RF40         |
| RF42   | Permitir **perguntas em linguagem natural** e responder com dados e fonte.      | Gestor, Contabilista | Should     | RF37         |
| RF43   | Emitir **alertas inteligentes** (cashflow, desvios, ruturas).                   | Gestor               | Should     | RF32, RF25   |
| RF44   | Mostrar **explicações e fontes** de cada insight.                               | Todos                | Must       | RF40         |

---

## Lembretes e Tarefas

| Código | Requisito                                                   | Atores                            | Prioridade | Dependências |
| :----- | :---------------------------------------------------------- | :-------------------------------- | :--------- | :----------- |
| RF45   | Criar/editar lembretes (prazos, pagamentos, impostos).      | Todos                             | Should     | —            |
| RF46   | Criar e atribuir tarefas com estado e prazo.                | Gestor, Contabilista, Operacional | Should     | —            |
| RF47   | Notificações (in-app/email) para lembretes e alertas da IA. | Todos                             | Should     | RF45, RF43   |

---

## Auditoria e Segurança Operacional

| Código | Requisito                                                            | Atores               | Prioridade | Dependências |
| :----- | :------------------------------------------------------------------- | :------------------- | :--------- | :----------- |
| RF48   | Registar **auditoria**: quem, quando, o quê, em operações sensíveis. | Admin, Auditor       | Must       | —            |
| RF49   | Registar **logs de integração** (uploads, SAF-T, reconciliações).    | Admin                | Must       | —            |
| RF50   | Permitir **reabertura de períodos** apenas com registo de motivo.    | Gestor, Contabilista | Should     | RF08         |

---

## Critérios de Aceitação

### IA — Insights e Recomendações (RF40–RF44)

- Ao abrir o painel “Insights”, o sistema apresenta pelo menos **5 cartões** com métrica, variação e período.
- Cada insight inclui **origem dos dados** e **ação sugerida**.
- Quando o utilizador clica em “Ver detalhes”, é redirecionado para o relatório correspondente.

### Relatórios e KPIs (RF37–RF39)

- Ao aplicar filtros (período, armazém, família), o dashboard atualiza em ≤2s.
- Ao exportar, o ficheiro preserva filtros e título do relatório.

### Inventário (RF22–RF25)

- Ao registar uma compra de 10 unidades, o stock aumenta automaticamente.
- Ajustes de contagem geram movimento contabilístico, se configurado.

### Vendas/Compras (RF14–RF21)

- Cada fatura cria lançamento contabilístico automático (Clientes/Vendas/IVA).
- Faturas de fornecedor geram lançamentos de Compras e IVA dedutível.

### Reconciliação Bancária (RF30–RF32)

- Importar extrato sugere correspondências automáticas por valor e data.
- Movimentos por conciliar > X dias geram aviso no painel.

---

## Sugerido para MVP

- **Identidade e Perfis:** RF01–RF05
- **Configuração Base:** RF06–RF08, RF09–RF11, RF13
- **Operações Principais:** RF14–RF20, RF22–RF23, RF26–RF29
- **Tesouraria e Relatórios:** RF30–RF31, RF35, RF37, RF40, RF44, RF48–RF49
- **Fase 2:** restantes requisitos (curadoria IA, tarefas, notificações, painéis avançados)

---

# Requisitos Não Funcionais

## Usabilidade e Acessibilidade

| Código | Requisito                                                                                                                    | Tipo           | Prioridade |
| :----- | :--------------------------------------------------------------------------------------------------------------------------- | :------------- | :--------- |
| RNF01  | A interface deve ser **intuitiva**, com navegação clara entre módulos (Vendas, Compras, Contabilidade, Tesouraria).          | Usabilidade    | Must       |
| RNF02  | Os formulários devem possuir **validação visual imediata** (ex.: campos obrigatórios, mensagens de erro claras).             | Usabilidade    | Must       |
| RNF03  | O sistema deve seguir uma **estrutura consistente** de menus, botões e cores em todas as páginas.                            | Usabilidade    | Must       |
| RNF04  | O design deve respeitar princípios de **acessibilidade** (contraste, legibilidade, tamanho mínimo de letra, etiquetas ARIA). | Acessibilidade | Should     |
| RNF05  | Deve existir um **modo escuro** e suporte para dispositivos móveis (layout _responsive_).                                    | Usabilidade    | Could      |
| RNF06  | Mensagens e rótulos devem estar em **português de Portugal**, com tom profissional e claro.                                  | Usabilidade    | Must       |

---

## Performance e Escalabilidade

| Código | Requisito                                                                                                           | Tipo           | Prioridade |
| :----- | :------------------------------------------------------------------------------------------------------------------ | :------------- | :--------- |
| RNF07  | O tempo médio de carregamento das páginas principais não deve exceder **3 segundos** em rede normal.                | Performance    | Must       |
| RNF08  | A geração de relatórios deve ser executada em **tempo inferior a 5 segundos** para datasets de até 10 000 registos. | Performance    | Should     |
| RNF09  | O sistema deve suportar **mínimo 100 utilizadores simultâneos** sem degradação significativa de desempenho.         | Escalabilidade | Should     |
| RNF10  | O servidor deve manter **uptime ≥ 99%** durante o horário laboral.                                                  | Fiabilidade    | Must       |
| RNF11  | O sistema deve permitir expansão horizontal (adicionar instâncias/serviços sem reescrever código).                  | Escalabilidade | Could      |
| RNF12  | As consultas à base de dados devem ser otimizadas com **índices e paginação**.                                      | Performance    | Must       |

---

## Segurança e Proteção de Dados

| Código | Requisito                                                                                           | Tipo        | Prioridade |
| :----- | :-------------------------------------------------------------------------------------------------- | :---------- | :--------- |
| RNF13  | Todos os dados devem ser transmitidos por **HTTPS (TLS 1.2 ou superior)**.                          | Segurança   | Must       |
| RNF14  | As **palavras-passe** devem ser armazenadas com **hash seguro (bcrypt/scrypt)**.                    | Segurança   | Must       |
| RNF15  | A autenticação deve utilizar **cookies HttpOnly** para mitigar ataques XSS.                         | Segurança   | Must       |
| RNF16  | O sistema deve incluir **proteções contra CSRF, SQL Injection e XSS**.                              | Segurança   | Must       |
| RNF17  | A base de dados deve ser **protegida por credenciais encriptadas** em variáveis de ambiente (.env). | Segurança   | Must       |
| RNF18  | As operações sensíveis devem gerar **logs de auditoria** (quem, quando, o quê).                     | Segurança   | Must       |
| RNF19  | O sistema deve cumprir o **RGPD**: consentimento, direito ao esquecimento e portabilidade de dados. | Privacidade | Must       |
| RNF20  | As cópias de segurança devem ser realizadas **diariamente** e guardadas em local seguro.            | Fiabilidade | Should     |
| RNF21  | As contas inativas por mais de 12 meses devem ser notificadas e, após consentimento, eliminadas.    | Privacidade | Could      |

---

## Compatibilidade e Integração

| Código | Requisito                                                                                                 | Tipo            | Prioridade |
| :----- | :-------------------------------------------------------------------------------------------------------- | :-------------- | :--------- |
| RNF22  | O sistema deve funcionar nos principais navegadores (**Chrome, Edge, Firefox, Safari**).                  | Compatibilidade | Must       |
| RNF23  | A aplicação deve ser _responsive_ e utilizável em **desktop, tablet e smartphone**.                       | Compatibilidade | Must       |
| RNF24  | As exportações devem respeitar formatos padrão: **PDF, CSV, XLSX, SAF-T (PT)**.                           | Integração      | Must       |
| RNF25  | O sistema deve permitir futura integração com APIs externas (e-Fatura, bancos, OCR, IA).                  | Integração      | Should     |
| RNF26  | Os ficheiros carregados (PDFs, imagens) devem ser validados quanto ao **tipo e tamanho máximo (≤ 10MB)**. | Compatibilidade | Must       |

---

## Manutenção, Registos e Operação

| Código | Requisito                                                                                        | Tipo       | Prioridade |
| :----- | :----------------------------------------------------------------------------------------------- | :--------- | :--------- |
| RNF27  | O código deve seguir **padrão MVC** com separação clara entre rotas, controladores e modelos.    | Manutenção | Must       |
| RNF28  | O código deve ser **documentado** com comentários e _docstrings_ em todas as funções.            | Manutenção | Must       |
| RNF29  | O sistema deve gerar **logs de erro e de sistema** legíveis (níveis: info, warn, error).         | Operação   | Must       |
| RNF30  | Deve existir **mecanismo de monitorização** (ping/healthcheck) ativo para o servidor.            | Operação   | Should     |
| RNF31  | O sistema deve suportar **atualizações sem perda de dados**, com _rollback_ em caso de falha.    | Manutenção | Should     |
| RNF32  | Deve existir um **ambiente de testes isolado** (base de dados separada do ambiente de produção). | Operação   | Should     |

---

## Experiência de IA e Explicabilidade

| Código | Requisito                                                                                              | Tipo            | Prioridade |
| :----- | :----------------------------------------------------------------------------------------------------- | :-------------- | :--------- |
| RNF33  | A IA deve apresentar **respostas explicáveis**, com indicação das métricas e fontes utilizadas.        | Explicabilidade | Must       |
| RNF34  | O processamento de IA deve ocorrer de forma **assíncrona** (não bloquear o interface).                 | Performance     | Should     |
| RNF35  | A IA deve respeitar as **regras de privacidade e confidencialidade** dos dados empresariais.           | Privacidade     | Must       |
| RNF36  | A interface da IA deve permitir **feedback do utilizador** (“útil / não útil”) para melhoria contínua. | Usabilidade     | Could      |

---

## Localização e Internacionalização

| Código | Requisito                                                                   | Tipo        | Prioridade |
| :----- | :-------------------------------------------------------------------------- | :---------- | :--------- |
| RNF37  | A aplicação deve estar totalmente em **português (Portugal)** por defeito.  | Localização | Must       |
| RNF38  | Deve existir suporte para **tradução futura** (i18n).                       | Localização | Could      |
| RNF39  | Os formatos de data e moeda devem seguir a **norma PT-PT (dd/mm/aaaa, €)**. | Localização | Must       |

---

## Qualidade e Testes

| Código | Requisito                                                                                                | Tipo       | Prioridade |
| :----- | :------------------------------------------------------------------------------------------------------- | :--------- | :--------- |
| RNF40  | Cada módulo principal (Vendas, Compras, Stock, IA) deve possuir **testes unitários e funcionais**.       | Qualidade  | Should     |
| RNF41  | As operações críticas (lançamentos, reconciliações, relatórios) devem ser **testadas antes de release**. | Qualidade  | Must       |
| RNF42  | Erros de produção devem ser registados e corrigidos no máximo em **48h**.                                | Manutenção | Should     |

---

## Resumo Geral

| Categoria                    | Nº de Requisitos | Prioritários (Must) |
| :--------------------------- | :--------------- | :------------------ |
| Usabilidade & Acessibilidade | 6                | 4                   |
| Performance & Escalabilidade | 6                | 3                   |
| Segurança & RGPD             | 9                | 6                   |
| Compatibilidade & Integração | 5                | 3                   |
| Manutenção & Operação        | 6                | 3                   |
| IA & Explicabilidade         | 4                | 2                   |
| Localização                  | 3                | 2                   |
| Qualidade & Testes           | 3                | 1                   |
| **Total**                    | **42 RNF**       | **24 Must**         |

---
