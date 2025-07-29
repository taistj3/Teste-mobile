# EBAC Store - Testes Mobile

Este projeto contém a automação de testes para o aplicativo ebacshop, utilizando a ferramenta WebdriverIO com Appium. A automação cobre o fluxo de cadastro de usuário.

## Branches

- `main`: contém a estrutura de testes voltada para Android.
- `ios`: contém ajustes específicos para testes em iOS, incluindo um arquivo `.env` com variáveis apropriadas.
- `ci`: será usada para configurar integração contínua com GitHub Actions, incluindo execução de testes e publicação de relatórios.

## Tecnologias e ferramentas

- Node.js
- WebdriverIO
- Appium
- Allure Reports
- Android Studio
- GitHub Actions

## Estrutura de pastas

```
ebacstore-mobile-test/
│
├── config/             # Configurações dos testes
├── test/               # Scripts de teste
├── .github/workflows/  # Configuração de integração contínua (na branch ci)
├── allure-report/      # Relatórios gerados
├── .env                # Variáveis de ambiente (usado na branch ios)
├── package.json        # Dependências e scripts
└── README.md           # Este arquivo
```

## Pré-requisitos

- Node.js instalado
- Appium configurado
- Android Studio (para testes locais Android)
- Conta na nuvem (como Sauce Labs ou BrowserStack) para executar testes iOS no Windows

## Como executar os testes

### Android

1. Troque para a branch `main`
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute os testes:
   ```
   npm test
   ```

### iOS

1. Troque para a branch `ios`
2. Crie ou edite o arquivo `.env` com o seguinte conteúdo:
   ```
   platformName=ios
   ```
3. Execute os testes com o comando apropriado:
   ```
   npm run test:ios
   ```

## Integração contínua (CI)

A branch `ci` conterá um workflow configurado com GitHub Actions que:

- Instala as dependências do projeto
- Executa os testes automatizados
- Publica os relatórios Allure no GitHub Pages

Este workflow é ativado a cada push na branch `ci` ou manualmente pela aba Actions.

## Observações

- O aplicativo testado pode ser encontrado em:  
  https://github.com/EBAC-QE/mobileapps/blob/main/ebacshop/android/ebacshop.aab

- A execução de testes iOS em sistemas Windows é feita via nuvem (ex: Sauce Labs, BrowserStack), pois não é possível usar simuladores iOS diretamente.
