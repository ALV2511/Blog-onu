# MUN Blog — Simulação da ONU 2026

Blog escolar para documentar a simulação da ONU (MUN).

---

## Estrutura dos arquivos

```
blog-onu/
├── index.html   ← Página inicial (lista de posts + vídeo)
├── post.html    ← Template de post individual
├── style.css    ← Visual do site (não precisa mexer)
├── script.js    ← Funções do menu e vídeo (não precisa mexer)
└── README.md    ← Este arquivo
```

---

## Como personalizar

### 1. Adicionar o vídeo do YouTube
1. Envie o vídeo para o YouTube
2. Abra `index.html` no VS Code
3. Procure por `SEU_ID_AQUI`
4. Substitua pelo ID do vídeo
   - Exemplo: `https://youtube.com/watch?v=dQw4w9WgXcQ` → ID = `dQw4w9WgXcQ`
5. Atualize também o título, descrição e iniciais da dupla logo abaixo

### 2. Adicionar um novo post
1. Duplique o arquivo `post.html`
2. Renomeie para algo descritivo, ex: `post-clima.html`
3. Edite o título, tag, conteúdo e autor dentro do arquivo
4. Em `index.html`, adicione um novo `<article class="post-card">` dentro da `.posts-grid`
   apontando o link para o novo arquivo

### 3. Mudar as delegações e comitês
- Abra `index.html` e edite as listas dentro de `.country-list` e `.committee-list` na sidebar

### 4. Tags disponíveis
Copie a classe correta para o `<span class="post-tag ...">` do seu post:
- `tag-security`  → Conselho de Segurança (vermelho)
- `tag-ecosoc`    → ECOSOC (verde)
- `tag-assembly`  → Assembleia Geral (azul)
- `tag-backstage` → Bastidores (amarelo)

---

## Deploy no GitHub Pages (gratuito)

1. Crie uma conta em https://github.com (se não tiver)
2. Crie um repositório público chamado `blog-onu`
3. No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/blog-onu.git
git push -u origin main
```

4. No GitHub, vá em **Settings → Pages**
5. Em *Source*, selecione **Deploy from a branch → main / root**
6. Aguarde ~1 minuto e acesse:
   `https://SEU_USUARIO.github.io/blog-onu/`

Pronto! Seu site está no ar, de graça. 🌐
