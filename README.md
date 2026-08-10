# Murilo Rosa · O Terceiro Sinal — Linkbio (versão reduzida)

Versão **reduzida** da landing page do Murilo Rosa, para uso em link na bio / campanhas.
Site estático (HTML + CSS + JS), pronto para Vercel + GitHub.

## Seções (nesta ordem)

1. Hero
2. Formulário (integrado ao **Leadlovers**)
3. Temas abordados
4. A palestra — layout claro: título + citação à esquerda, **player de vídeo** à direita
5. Carrossel de fotos (com CTA "Quero esse impacto na minha equipe")
6. Frase de fechamento
7. Footer

## Diferenças em relação à página principal

- **Header sem menu de navegação** (apenas logo + botão "Solicitar proposta"), igual à linkbio do Gabriel Carneiro.
- Sem as seções: método, o palestrante, diferenciais, impacto, formatos, reconhecimento/mídia e FAQ.
- Na seção "A palestra", os cards saem e entra o **player do vídeo** (thumb `thumb-palestra.jpg`, click-to-play do YouTube `5r4UVE5fuyU`).

## Formulário (Leadlovers — CRM conectado)

- `mid` 681453 · `fid` 77502 (código oficial da Polo, salvo na raiz do projeto).
- CSS: `//paginas.rocks/Content/capture/forms/form001.css` (no `<head>`).
- JS: `//paginas.rocks/scripts/capture/capture.js` (antes do `</body>`).
- O botão de envio recebeu estilo on-brand (dourado) via `css/styles.css`.
- O Leadlovers gerencia o fluxo de captura/agradecimento. O `obrigado.html` está incluído como reserva.

## Deploy no Vercel

Suba esta pasta como um projeto estático (Framework Preset: Other, sem build).

## Pendências

- **WhatsApp** (obrigado.html): usa `5512982506250` (contato do kit) — confirmar.
- Se quiser o mesmo formulário Leadlovers na página principal, é só replicar.
