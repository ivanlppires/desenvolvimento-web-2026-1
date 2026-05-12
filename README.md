# Desenvolvimento de Software para Web — 2026/1

[![UNEMAT](https://img.shields.io/badge/UNEMAT-Sistemas%20de%20Informação-005A9C?style=for-the-badge)](https://www.unemat.br/)
[![Semestre](https://img.shields.io/badge/Semestre-2026.1-2C3E50?style=for-the-badge)](#cronograma)
[![Bun](https://img.shields.io/badge/Bun-1.3+-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.com)
[![Express](https://img.shields.io/badge/Express-5.x-303030?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)

> Repositório oficial da disciplina **Desenvolvimento de Software para Web (DSW)** — Turma **2026/1** do curso de **Sistemas de Informação** da **Universidade do Estado de Mato Grosso (UNEMAT)**.

---

## Sobre a disciplina

A disciplina aborda os fundamentos e práticas do desenvolvimento de aplicações web modernas, com ênfase em **backend** utilizando JavaScript/TypeScript. Ao longo do semestre, vamos construir aplicações reais — do servidor mais simples até APIs completas com persistência em banco de dados.

### Objetivos de aprendizagem

- Compreender a arquitetura cliente-servidor e o protocolo HTTP
- Construir APIs RESTful utilizando **Express** sobre o runtime **Bun**
- Trabalhar com rotas, middlewares, parâmetros, headers e códigos de status
- Integrar o backend com bancos de dados relacionais
- Aplicar boas práticas de organização de código, versionamento (Git) e deploy

---

## Stack tecnológica

| Categoria       | Ferramenta                            | Versão |
|-----------------|---------------------------------------|--------|
| Runtime         | [Bun](https://bun.com)                | 1.3+   |
| Framework Web   | [Express](https://expressjs.com)      | 5.x    |
| Linguagem       | JavaScript (ES Modules) / TypeScript  | —      |
| Versionamento   | Git + GitHub                          | —      |

> **Por que Bun?** Runtime moderno, rápido e all-in-one — substitui Node, npm, webpack e ts-node com uma única ferramenta. Ideal para focarmos no que importa: aprender a construir aplicações web.

---

## Estrutura do repositório

```
dsw/
├── README.md                                          # este arquivo
├── aula-11-05-2026-Introducao-Backend-Bun-Express.pdf # material teórico das aulas
└── code/                                              # códigos das aulas práticas
    └── 11-05-2026/                                    # aula 01 — Introdução ao backend
        ├── server.js                                  # primeiro servidor Express
        ├── package.json
        └── ...
```

A cada aula prática, uma nova pasta dentro de `code/` será criada com o padrão `dd-mm-aaaa`.

---

## Como executar os exemplos

### Pré-requisitos

Instale o Bun (https://bun.com):

```bash
curl -fsSL https://bun.sh/install | bash
```

### Rodando uma aula

```bash
# entre na pasta da aula
cd code/11-05-2026

# instale as dependências
bun install

# inicie o servidor em modo desenvolvimento (hot reload)
bun run dev
```

O servidor sobe em `http://localhost:3000`. Teste as rotas no navegador ou via `curl`:

```bash
curl http://localhost:3000/
curl http://localhost:3000/cadastro
```

---

## Cronograma

| Data         | Aula | Tema                                                     | Material |
|--------------|------|----------------------------------------------------------|----------|
| 11/05/2026   | 01   | Introdução ao Backend — Bun + Express                    | [PDF](./aula-11-05-2026-Introducao-Backend-Bun-Express.pdf) · [Código](./code/11-05-2026) |

> O cronograma será atualizado conforme as aulas avançarem.

---

## Convenções

- **Branch principal:** `main`
- **Commits:** mensagens curtas e descritivas em português
- **Pastas de aula:** nomeadas no formato `dd-mm-aaaa`
- **Arquivos sensíveis** (`.env`, credenciais) **nunca** são commitados — veja o `.gitignore`

---

## Sobre o curso

**Curso:** Bacharelado em Sistemas de Informação
**Instituição:** Universidade do Estado de Mato Grosso (UNEMAT)
**Disciplina:** Desenvolvimento de Software para Web
**Semestre:** 2026/1
**Professor:** Ivan Luiz Pedroso Pires

---

## Licença

Material educacional de uso livre para fins acadêmicos. Códigos e exemplos podem ser reutilizados em projetos pessoais e estudos.
